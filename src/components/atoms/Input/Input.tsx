import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  label, 
  error, 
  variant = 'primary', 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text font-sans font-medium">{label}</span>
        </label>
      )}
      <input
        ref={ref}
        className={`input input-bordered input-${variant} w-full font-sans ${error ? 'input-error' : ''} ${className}`}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error font-sans">{error}</span>
        </label>
      )}
    </div>
  );
});

Input.displayName = 'Input';
