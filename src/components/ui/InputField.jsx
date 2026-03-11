import React from 'react';
import { cn } from '../../utils/cn';

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required,
  className,
}) => {
  return (
    <div className={cn('flex flex-col', className)}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-carbon-80 mb-2"
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={cn(
          'w-full px-4 py-3 bg-white border text-carbon-100 transition-colors',
          'focus:outline-none',
          error
            ? 'border-error focus:border-error'
            : 'border-carbon-50 hover:border-carbon-70 focus:border-primary'
        )}
      />
      {error && (
        <span className="text-xs text-error mt-1">{error}</span>
      )}
    </div>
  );
};

export default InputField;
