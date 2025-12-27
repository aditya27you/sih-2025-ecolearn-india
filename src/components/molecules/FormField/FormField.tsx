import React from 'react';

export interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  children,
  className = '',
}) => {
  return (
    <div className={`form-control w-full ${className}`}>
      {label && (
        <label className="label">
          <span className="label-text font-sans font-medium">{label}</span>
        </label>
      )}
      {children}
      {error && (
        <label className="label">
          <span className="label-text-alt text-error font-sans">{error}</span>
        </label>
      )}
    </div>
  );
};
