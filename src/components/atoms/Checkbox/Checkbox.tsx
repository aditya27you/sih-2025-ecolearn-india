import { forwardRef, type InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ 
  label, 
  error, 
  variant = 'primary', 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-3">
        <input
          type="checkbox"
          ref={ref}
          className={`checkbox checkbox-${variant} ${error ? 'checkbox-error' : ''} ${className}`}
          {...props}
        />
        {label && <span className="label-text font-sans font-medium">{label}</span>}
      </label>
      {error && (
        <label className="label py-0">
          <span className="label-text-alt text-error font-sans">{error}</span>
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
