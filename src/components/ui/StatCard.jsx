import React from 'react';
import { cn } from '../../utils/cn';
import AnimatedCounter from './AnimatedCounter';

const StatCard = ({ value, suffix = '', label, icon: Icon, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center text-center px-6 py-8',
        className
      )}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-accent" />
        </div>
      )}
      <AnimatedCounter value={value} suffix={suffix} />
      <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
};

export default StatCard;
