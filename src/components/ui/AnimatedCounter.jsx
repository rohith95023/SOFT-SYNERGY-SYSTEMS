import React, { useRef, useEffect, useState } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2, suffix = '', label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center group p-6">
      <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 flex justify-center items-center">
        <span>{count}</span>
        {suffix && <span className="ml-1">{suffix}</span>}
      </div>
      {label && <p className="text-slate font-semibold uppercase tracking-wider text-sm">{label}</p>}
    </div>
  );
};

export default AnimatedCounter;
