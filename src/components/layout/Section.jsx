import React from 'react';
import { cn } from '../../utils/cn';

const Section = ({
  children,
  className,
  id,
  dark = false,
  light = false,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        'section-padding overflow-hidden relative',
        dark && 'bg-navy text-white',
        light && 'bg-background-light',
        !dark && !light && 'bg-white',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
