import { forwardRef, type SelectHTMLAttributes } from 'react';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ 
  label, 
  error, 
  options,
  variant = 'primary', 
  className = '', 
  placeholder,
  ...props 
}, ref) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text font-sans font-medium">{label}</span>
        </label>
      )}
      <select
        ref={ref}
        className={`select select-bordered select-${variant} w-full font-sans ${error ? 'select-error' : ''} ${className}`}
        {...props}
      >
        {placeholder && <option disabled value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error font-sans">{error}</span>
        </label>
      )}
    </div>
  );
});

Select.displayName = 'Select';
