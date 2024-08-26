import React, { useEffect, useState } from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scroll

      let start = 0;
      const interval = setInterval(() => {
        start += 100 / (10 * 10); 
        setProgress(start);
        if (start >= 100) {
          clearInterval(interval);
        }
      }, 80); 

      return () => {
        clearInterval(interval);
        document.body.style.overflow = 'auto'; 
        setProgress(0); 
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;