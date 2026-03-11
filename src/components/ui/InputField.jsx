import React from 'react';
import { cn } from '../../utils/cn';

const InputField = ({
  label,
  error,
  id,
  type = 'text',
  className,
  ...props
}) => {
  return (
    <div className={cn('flex flex-col mb-4 w-full', className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold mb-2 text-slate uppercase tracking-wide"
        >
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={id}
          className={cn(
            'w-full px-4 py-3 bg-white border border-slate-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-standard min-h-[120px] resize-none',
            error && 'border-red-500 focus:ring-red-500'
          )}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={cn(
            'w-full px-4 py-3 bg-white border border-slate-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-standard',
            error && 'border-red-500 focus:ring-red-500'
          )}
          {...props}
        />
      )}
      {error && <span className="text-red-500 text-xs mt-1 font-medium">{error}</span>}
    </div>
  );
};

export default InputField;
