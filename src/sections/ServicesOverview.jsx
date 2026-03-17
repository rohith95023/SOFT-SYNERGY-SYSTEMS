import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { SERVICE_CATEGORIES, SERVICES_OVERVIEW_DATA } from '../constants';

const ServicesOverview = () => {
  const { sectionBadge, sectionTitle, sectionSubtitle, bottomCTA, contactCTA } = SERVICES_OVERVIEW_DATA;

  return (
    <Section className="bg-white" id="services">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
              {sectionBadge}
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-carbon-100 mb-6 tracking-tight">
              {sectionTitle}
            </h2>
            <p className="text-lg text-carbon-60 font-light leading-relaxed">
              {sectionSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-carbon-20">
          {SERVICE_CATEGORIES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.link}
                className="block bg-white p-8 h-full group hover:bg-carbon-10 transition-colors duration-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-soft flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-200">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-200" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-carbon-100 mb-3 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-carbon-60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 pt-12 border-t border-carbon-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-carbon-60">
              {bottomCTA.question}{' '}
              <Link to={bottomCTA.link} className="text-primary font-medium hover:underline">
                {bottomCTA.linkText}
              </Link>
            </p>
            <Link
              to={contactCTA.link}
              className="inline-flex items-center gap-2 text-sm font-medium text-carbon-100 hover:text-primary transition-colors"
            >
              {contactCTA.text} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ServicesOverview;
