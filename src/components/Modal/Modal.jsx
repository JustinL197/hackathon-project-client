import React, { useEffect, useState } from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scroll

      // Start the timer for the progress bar when the modal is open
      let start = 0;
      const interval = setInterval(() => {
        start += 100 / (10 * 10); // 10 seconds total, updating every 0.1 second
        setProgress(start);
        if (start >= 100) {
          clearInterval(interval);
        }
      }, 100); // Update every 100ms (0.1 second)

      return () => {
        clearInterval(interval);
        document.body.style.overflow = 'auto'; // Enable scroll when modal closes
        setProgress(0); // Reset progress when modal closes
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