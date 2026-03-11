import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '../../utils/cn';

const TestimonialCard = ({ quote, author, role, company, rating = 5, className }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-8 border border-slate/10 shadow-soft flex flex-col gap-6',
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn('w-4 h-4', i < rating ? 'text-warning fill-warning' : 'text-slate/20 fill-slate/10')}
          />
        ))}
      </div>

      {/* Quote icon */}
      <Quote className="w-8 h-8 text-primary/20" />

      {/* Quote text */}
      <p className="text-slate leading-relaxed text-sm flex-1 italic">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate/10">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-primary font-extrabold text-sm">
            {author?.split(' ').map((n) => n[0]).join('').slice(0, 2)}
          </span>
        </div>
        <div>
          <p className="font-bold text-navy text-sm">{author}</p>
          <p className="text-slate-light text-xs font-medium">{role} · {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
