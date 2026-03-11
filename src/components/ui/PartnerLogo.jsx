import React from 'react';
import { cn } from '../../utils/cn';

const PartnerLogo = ({ name, logoUrl, initials, website = '#', className }) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name}`}
      className={cn(
        'group flex items-center justify-center',
        'bg-white rounded-xl border border-slate/10 p-6 shadow-soft',
        'hover:shadow-medium hover:border-primary/20',
        'transition-all duration-300 cursor-pointer',
        className
      )}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={name}
          loading="lazy"
          className="h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-primary font-extrabold text-lg">{initials}</span>
          </div>
          <span className="text-xs font-semibold text-slate group-hover:text-primary transition-colors text-center leading-tight mt-1">
            {name}
          </span>
        </div>
      )}
    </a>
  );
};

export default PartnerLogo;
