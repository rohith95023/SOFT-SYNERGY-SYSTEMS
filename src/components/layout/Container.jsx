import React from 'react';
import { cn } from '../../utils/cn';

const Container = ({
  children,
  className,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={cn('container-custom', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
