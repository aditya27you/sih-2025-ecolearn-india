import React from 'react';
import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  children, 
  className = '',
  disabled,
  ...props 
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className} ${loading ? 'btn-disabled' : ''}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner loading-sm"></span>}
      {children}
    </button>
  );
};
