import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

const AnimatedCounter = ({ value, duration = 2, suffix = '', label, dark = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const totalMilliseconds = duration * 1000;
      const incrementTime = totalMilliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className={cn(
        "text-4xl md:text-5xl font-light mb-2 flex justify-center items-baseline",
        dark ? "text-white" : "text-primary"
      )}>
        <span>{count}</span>
        {suffix && <span className="text-2xl md:text-3xl ml-1">{suffix}</span>}
      </div>
      {label && (
        <p className={cn(
          "text-xs uppercase tracking-widest font-medium",
          dark ? "text-carbon-40" : "text-carbon-60"
        )}>
          {label}
        </p>
      )}
    </div>
  );
};

export default AnimatedCounter;
