import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Rocket,
    Users,
    GraduationCap,
    Heart,
    Globe,
    Lightbulb,
    Play,
    MapPin,
    Clock,
    Briefcase
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import CTABanner from '../sections/CTABanner';

// Why Join Us data
const benefits = [
    {
        icon: Rocket,
        title: 'Growth Opportunities',
        description: 'Accelerate your career with challenging projects and clear advancement paths.'
    },
    {
        icon: GraduationCap,
        title: 'Learning & Development',
        description: 'Access to training programs, certifications, and mentorship from industry experts.'
    },
    {
        icon: Heart,
        title: 'Health & Wellness',
        description: 'Comprehensive health insurance, wellness programs, and mental health support.'
    },
    {
        icon: Globe,
        title: 'Global Exposure',
        description: 'Work with international clients and diverse teams across multiple time zones.'
    },
    {
        icon: Lightbulb,
        title: 'Innovation Culture',
        description: 'Experiment with cutting-edge technologies and contribute to groundbreaking solutions.'
    },
    {
        icon: Users,
        title: 'Collaborative Environment',
        description: 'Join a supportive team that values transparency, respect, and open communication.'
    }
];

// Culture values
const cultureValues = [
    {
        title: 'Innovation First',
        description: 'We embrace new ideas and technologies, encouraging experimentation and creative problem-solving.'
    },
    {
        title: 'Client Success',
        description: 'Our clients\' success is our success. We go above and beyond to deliver exceptional value.'
    },
    {
        title: 'Continuous Learning',
        description: 'We invest in our people\'s growth through training, workshops, and knowledge sharing.'
    },
    {
        title: 'Work-Life Balance',
        description: 'We believe in sustainable work practices that allow our team to thrive professionally and personally.'
    }
];

// Open positions
const positions = [
    {
        id: 1,
        title: 'Senior Java Developer',
        department: 'Engineering',
        location: 'Bangalore, India',
        type: 'Full-time',
        experience: '5+ years'
    },
    {
        id: 2,
        title: 'Python Developer - AI/ML',
        department: 'AI Division',
        location: 'Bangalore, India',
        type: 'Full-time',
        experience: '3+ years'
    },
    {
        id: 3,
        title: 'QA Automation Engineer',
        department: 'Quality Assurance',
        location: 'Bangalore, India',
        type: 'Full-time',
        experience: '4+ years'
    },
    {
        id: 4,
        title: 'Full Stack Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        experience: '3+ years'
    },
    {
        id: 5,
        title: 'DevOps Engineer',
        department: 'Infrastructure',
        location: 'Bangalore, India',
        type: 'Full-time',
        experience: '4+ years'
    },
    {
        id: 6,
        title: 'Business Analyst',
        department: 'Consulting',
        location: 'Bangalore, India',
        type: 'Full-time',
        experience: '2+ years'
    }
];

const Careers = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <SEO
                title="Careers - Soft Synergy Systems"
                description="Join Soft Synergy Systems and build your career in AI, automation, and enterprise software development. Explore open positions and our vibrant culture."
            />

            {/* Page Hero */}
            <PageHero
                title="Join Our Team"
                subtitle="Build your career with innovators and problem-solvers"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Careers', path: '/careers' }
                ]}
            />

            {/* Media Section - Video/Image Box */}
            <Section className="bg-white">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-video bg-carbon-10 max-w-5xl mx-auto overflow-hidden group cursor-pointer"
                    >
                        {/* Placeholder for video/image - replace with actual media */}
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                            alt="Soft Synergy Systems Team Culture"
                            className="w-full h-full object-cover"
                        />
                        {/* Play button overlay for video */}
                        <div className="absolute inset-0 bg-carbon-100/40 flex items-center justify-center group-hover:bg-carbon-100/50 transition-colors">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Play className="h-8 w-8 text-primary ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-sm uppercase tracking-widest mb-1">Life at SSS</p>
                            <p className="text-lg font-light">Discover what makes our team special</p>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* Why Join Us Section */}
            <Section className="bg-carbon-10">
                <Container>
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                                Benefits
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
                                Why Join Us
                            </h2>
                            <p className="mt-4 text-carbon-60 max-w-2xl mx-auto">
                                We invest in our people because they are our greatest asset. Here's what you can expect when you join our team.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-carbon-20">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white p-8 group hover:bg-carbon-10 transition-colors duration-200"
                            >
                                <div className="w-12 h-12 bg-primary-soft flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-200">
                                    <benefit.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-200" />
                                </div>
                                <h3 className="text-lg font-medium text-carbon-100 mb-3">{benefit.title}</h3>
                                <p className="text-sm text-carbon-60 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Our Culture Section */}
            <Section className="bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image/Media Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-carbon-10 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
                                    alt="Our Team Culture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-primary p-6 text-white">
                                <p className="text-3xl font-light">200+</p>
                                <p className="text-xs uppercase tracking-widest text-primary-light">Team Members</p>
                            </div>
                        </motion.div>

                        {/* Culture Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                                Our Culture
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight mb-6">
                                What Defines Us
                            </h2>
                            <p className="text-carbon-60 leading-relaxed mb-8">
                                At Soft Synergy Systems, we've built a culture that empowers our team to do their best work.
                                We believe in collaboration, continuous improvement, and creating an environment where
                                everyone can thrive.
                            </p>

                            <div className="space-y-6">
                                {cultureValues.map((value, idx) => (
                                    <div key={value.title} className="flex gap-4">
                                        <div className="w-1 bg-primary flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-medium text-carbon-100 mb-1">{value.title}</h4>
                                            <p className="text-sm text-carbon-60">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Open Positions Section */}
            <Section className="bg-carbon-10">
                <Container>
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                                Opportunities
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
                                Open Positions
                            </h2>
                            <p className="mt-4 text-carbon-60 max-w-2xl mx-auto">
                                Explore our current openings and find the role that matches your skills and aspirations.
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-px bg-carbon-20 max-w-4xl mx-auto">
                        {positions.map((position, idx) => (
                            <motion.div
                                key={position.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.4 }}
                                className="bg-white p-6 md:p-8 group hover:bg-carbon-10 transition-colors duration-200"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-carbon-100 group-hover:text-primary transition-colors">
                                            {position.title}
                                        </h3>
                                        <p className="text-sm text-carbon-50 mt-1">{position.department}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-carbon-60">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-carbon-40" />
                                            <span>{position.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-carbon-40" />
                                            <span>{position.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="h-4 w-4 text-carbon-40" />
                                            <span>{position.experience}</span>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/careers/${position.id}`}
                                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                                    >
                                        Apply <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-10"
                    >
                        <p className="text-carbon-60 mb-4">
                            Don't see a role that fits? We're always looking for talented individuals.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                            Send us your resume <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>
                </Container>
            </Section>

            {/* CTA */}
            <CTABanner />
        </motion.main>
    );
};

export default Careers;
