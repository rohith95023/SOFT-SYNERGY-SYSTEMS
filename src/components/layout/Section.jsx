import React from 'react';
import { cn } from '../../utils/cn';

const Section = ({ children, className, id, light, dark }) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        light && 'bg-white',
        dark && 'bg-carbon-100',
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
