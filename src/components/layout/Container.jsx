import React from 'react';
import { cn } from '../../utils/cn';

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        'w-full max-w-[1584px] mx-auto px-4 md:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
