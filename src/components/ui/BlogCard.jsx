import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Badge from './Badge';
import { formatShortDate } from '../../utils/formatDate';

const BlogCard = ({ title, slug, date, category, excerpt, thumbnail, className }) => {
  return (
    <article
      className={cn(
        'group bg-white rounded-2xl overflow-hidden border border-slate/10 shadow-soft',
        'hover:shadow-strong hover:-translate-y-1 transition-all duration-200',
        className
      )}
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden relative">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl font-extrabold text-primary/20 select-none">SSS</div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="accent">{category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-slate-light text-xs font-medium mb-3">
          <Calendar className="w-3.5 h-3.5" />
          {date ? formatShortDate(date) : 'Recent'}
        </div>
        <h3 className="text-lg font-bold text-navy mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate text-sm leading-relaxed line-clamp-3 mb-5">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
