import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection = () => {
  return (
    <Section className="bg-carbon-10" id="testimonials">
      <Container>
        {/* Section Header - IBM Style */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
              Client Success
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight mb-4">
              What Our Partners Say
            </h2>
            <p className="text-carbon-60">
              Real results from enterprises that have trusted us with their
              digital transformation journey.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid - IBM Carbon Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-carbon-20">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 group hover:bg-carbon-10 transition-colors duration-200"
            >
              {/* Quote Icon */}
              <div className="text-primary-soft mb-6">
                <Quote size={32} fill="currentColor" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-warning fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-carbon-70 italic leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-carbon-20">
                <div className="w-12 h-12 bg-primary-soft flex items-center justify-center font-semibold text-primary">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-medium text-carbon-100 leading-tight">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-carbon-50 mt-1">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
