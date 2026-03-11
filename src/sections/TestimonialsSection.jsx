import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { TESTIMONIALS } from '../../constants/testimonials';

const TestimonialsSection = () => {
  return (
    <Section className="bg-white overflow-hidden">
      <Container>
        <SectionTitle
          badge="Client Success"
          title="What Our Partners Say"
          subtitle="Real results from enterprises that have trusted us with their digital transformation journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col relative pt-12">
                <div className="absolute top-6 left-6 text-primary/10">
                  <Quote size={40} fill="currentColor" />
                </div>
                
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate italic leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-light/10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-navy leading-tight">{testimonial.author}</p>
                    <p className="text-xs text-slate-light font-semibold uppercase tracking-wider mt-1">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
