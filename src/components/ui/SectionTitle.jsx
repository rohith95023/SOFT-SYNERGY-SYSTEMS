import React from 'react';
import { cn } from '../../utils/cn';

const SectionTitle = ({
  title,
  subtitle,
  badge,
  align = 'center',
  className,
  light = false,
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col mb-12 max-w-3xl mx-auto', alignment[align], className)}>
      {badge && (
        <span className={cn(
          "px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-sm",
          light ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn("mb-6", light ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg", light ? "text-white/80" : "text-slate")}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
