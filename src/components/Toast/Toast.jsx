

import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast-containerr toast-${type}`}>
      <p>{message}</p>
    </div>
  );


};

export default Toast;