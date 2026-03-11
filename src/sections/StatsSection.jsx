import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import AnimatedCounter from '../ui/AnimatedCounter';
import { STATS_DATA } from '../../constants/stats';

const StatsSection = () => {
  return (
    <Section dark className="bg-navy-dark pt-16 pb-16">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS_DATA.map((stat) => (
            <AnimatedCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default StatsSection;
