import React, { useEffect, useState } from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children, contentType, onProgressComplete }) => { 
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      let start = 0;
      const interval = setInterval(() => {
        start += 100 / (10 * 10); 
        setProgress(start);
        if (start >= 100) {
          clearInterval(interval);
          onProgressComplete();
        }
      }, 70); 

      return () => {
        clearInterval(interval);
        document.body.style.overflow = 'auto'; 
        setProgress(0); 
      };
    }
  }, [isOpen, onProgressComplete]);

  useEffect(() => {
    setProgress(0);
  }, [contentType]);

  if (!isOpen) return null;

  // Determine modal classes based on content type
  const modalClass = contentType === 'recipe' || contentType === 'recipePartTwo' 
    ? 'modal-content modal-content--recipe' 
    : 'modal-content';
  
  const progressBarClass = contentType === 'recipe' || contentType === 'recipePartTwo' 
    ? 'progress-bar progress-bar--recipe' 
    : 'progress-bar';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={modalClass} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className={progressBarClass}>
          <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;