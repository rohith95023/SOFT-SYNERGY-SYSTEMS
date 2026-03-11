import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';

const CTABanner = () => {
  return (
    <Section className="bg-primary py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-light text-lg max-w-xl">
              Let's discuss how our technology solutions can drive growth,
              efficiency, and innovation for your organization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-primary hover:bg-carbon-10 border-white"
                icon={ArrowRight}
              >
                Start a Conversation
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                icon={ArrowUpRight}
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CTABanner;
