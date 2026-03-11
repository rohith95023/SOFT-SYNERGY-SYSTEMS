import React from 'react';
import { cn } from '../../utils/cn';

const IndustryChip = ({ name, icon: Icon, className }) => {
  return (
    <div
      className={cn(
        'group flex flex-col items-center gap-3 px-6 py-5 rounded-2xl shrink-0',
        'bg-white border border-slate/10 shadow-soft cursor-default',
        'hover:bg-primary hover:border-primary hover:shadow-medium transition-all duration-200',
        className
      )}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
          <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
        </div>
      )}
      <span className="text-sm font-bold text-navy group-hover:text-white transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export default IndustryChip;
