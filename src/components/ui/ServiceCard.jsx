import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const ServiceCard = ({ icon: Icon, title, description, tags = [], link = '/services', className }) => {
  return (
    <motion.div
      className={cn(
        'group relative bg-white rounded-2xl p-8 border border-slate/10 shadow-soft',
        'hover:shadow-strong hover:-translate-y-1 transition-all duration-200',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        {Icon && <Icon className="w-7 h-7 text-primary" />}
      </div>

      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-slate text-sm leading-relaxed mb-5">{description}</p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-background-light text-primary border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Link
        to={link}
        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
