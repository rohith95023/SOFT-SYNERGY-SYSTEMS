import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Users, Lightbulb, TrendingUp, Award } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const MissionVision = () => {
  return (
    <Section light id="mission-vision">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-10 border-l-4 border-l-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-extrabold text-navy mb-6">Our Mission</h3>
              <p className="text-slate text-lg leading-relaxed">
                Empowering organizations with innovative technology solutions that drive efficiency, intelligence, and business growth. We strive to be the bridge between complex challenges and sustainable digital success.
              </p>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-10 border-l-4 border-l-accent">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-3xl font-extrabold text-navy mb-6">Our Vision</h3>
              <p className="text-slate text-lg leading-relaxed">
                To become a global leader in digital transformation and advanced technology solutions, recognized for our commitment to synergy, quality, and the strategic advancement of the digital world.
              </p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

const CORE_VALUES = [
  { name: 'Innovation', icon: Lightbulb, description: 'Relentlessly pursuing creative and cutting-edge solutions.' },
  { name: 'Quality', icon: ShieldCheck, description: 'Committed to excellence in every line of code we write.' },
  { name: 'Integrity', icon: Award, description: 'Building trust through transparency and ethical practices.' },
  { name: 'Client Focus', icon: Users, description: 'Placing our partners at the heart of everything we do.' },
  { name: 'Excellence', icon: TrendingUp, description: 'Exceeding expectations in performance and delivery.' },
  { name: 'Agility', icon: Zap, description: 'Adapting swiftly to the evolving technological landscape.' },
];

const CoreValues = () => {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle
          badge="What We Stand For"
          title="Our Core Values"
          subtitle="The principles that guide our synergy and define our success in the technology landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, idx) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-primary/20 hover:bg-background-light/50">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.name}</h4>
                <p className="text-slate text-sm leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export { MissionVision, CoreValues };
import { motion } from 'framer-motion';
