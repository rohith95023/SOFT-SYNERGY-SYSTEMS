import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { SERVICE_LIST } from '../../constants/services';

const ServicesOverview = () => {
  return (
    <Section light id="services">
      <Container>
        <SectionTitle
          badge="Our Capability"
          title="Advanced Solutions for Modern Enterprises"
          subtitle="We bridge the gap between complex problems and elegant technology solutions across four core divisions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col group border-transparent hover:border-primary/20">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate text-sm mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServicesOverview;
