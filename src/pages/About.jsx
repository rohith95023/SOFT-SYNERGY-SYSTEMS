import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, Lightbulb, Shield, Heart, Zap } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import DivisionsSection from '../sections/DivisionsSection';
import CTABanner from '../sections/CTABanner';

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries with cutting-edge technology solutions' },
  { icon: Award, title: 'Quality', description: 'Delivering excellence in every project we undertake' },
  { icon: Shield, title: 'Integrity', description: 'Building trust through transparency and ethical practices' },
  { icon: Users, title: 'Client Focus', description: 'Putting our clients\' success at the heart of everything we do' },
  { icon: Heart, title: 'Excellence', description: 'Striving for the highest standards in all our deliverables' },
  { icon: Zap, title: 'Agility', description: 'Adapting quickly to meet evolving business needs' },
];

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="About Us - Soft Synergy Systems"
        description="Learn about Soft Synergy Systems - our mission, vision, values, and the team driving digital transformation for enterprises globally."
      />

      {/* Page Hero */}
      <PageHero
        title="About Us"
        subtitle="Pioneering digital transformation with innovation, integrity, and excellence"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' }
        ]}
      />

      {/* Company Story */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight mb-6">
                Building the Future of Enterprise Technology
              </h2>
              <div className="space-y-4 text-carbon-60 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between complex business challenges and
                  elegant technology solutions, Soft Synergy Systems has grown into a trusted partner
                  for enterprises worldwide.
                </p>
                <p>
                  With over a decade of experience, we've established ourselves as leaders in AI,
                  automation, quality assurance, and enterprise software development. Our ISO
                  certification reflects our commitment to maintaining the highest standards of
                  quality and process excellence.
                </p>
                <p>
                  Today, we serve clients across Banking, Healthcare, Telecom, Logistics, and
                  E-commerce, delivering solutions that drive measurable business outcomes.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium mt-8 hover:gap-3 transition-all"
              >
                Get to know us better <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-carbon-10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Soft Synergy Systems Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 text-white">
                <p className="text-3xl font-light">10+</p>
                <p className="text-xs uppercase tracking-widest text-primary-light">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-carbon-10">
        <Container>
          <div className="grid md:grid-cols-2 gap-px bg-carbon-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 md:p-12"
            >
              <div className="w-12 h-12 bg-primary-soft flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-carbon-100 mb-4">Our Mission</h3>
              <p className="text-carbon-60 leading-relaxed">
                Empowering organizations with innovative technology solutions that drive efficiency,
                intelligence, and business growth. We transform complex challenges into elegant,
                scalable solutions that deliver lasting value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-10 md:p-12"
            >
              <div className="w-12 h-12 bg-primary-soft flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-carbon-100 mb-4">Our Vision</h3>
              <p className="text-carbon-60 leading-relaxed">
                To become a global leader in digital transformation and advanced technology solutions,
                recognized for our innovation, quality, and the measurable impact we create for our
                clients and communities.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
                Our Core Values
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-carbon-20">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 group hover:bg-carbon-10 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-primary-soft flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-200">
                  <value.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-lg font-medium text-carbon-100 mb-3">{value.title}</h3>
                <p className="text-sm text-carbon-60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Divisions */}
      <DivisionsSection />

      {/* ISO Certification */}
      <Section className="bg-carbon-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-primary flex items-center justify-center">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-carbon-100 mb-2">ISO Certified Organization</h3>
                <p className="text-carbon-60">
                  Our processes and quality management systems meet international standards.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '50+', label: 'Clients Served' },
                { value: '99%', label: 'Success Rate' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-2xl font-light text-primary mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-carbon-50">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner />
    </motion.main>
  );
};

export default About;
