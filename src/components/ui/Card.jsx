import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({
  children,
  className,
  hover = true,
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'bg-white border border-slate-light/10',
    glass: 'glass-effect',
    primary: 'bg-primary text-white border-none',
    accent: 'bg-accent text-white border-none',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-standard shadow-soft',
        variants[variant],
        hover && 'hover:-translate-y-2 hover:shadow-medium',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
