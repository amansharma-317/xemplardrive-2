import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Fleet Manager',
    company: 'Global Logistics Co.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The real-time analytics have helped us reduce fuel costs by 23% and improve driver safety scores significantly.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Operations Director',
    company: 'Express Delivery Services',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'Implementation was smooth, and the ROI was evident within the first month. Our fleet efficiency has improved by 35%.',
  },
  {
    name: 'Emily Thompson',
    role: 'CEO',
    company: 'Urban Transit Solutions',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The predictive maintenance features alone have saved us thousands in potential repair costs. Absolutely worth the investment.',
  }
];

const TestimonialCard = ({ name, role, company, image, quote }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative p-6 bg-medium-gray/30 backdrop-blur-md rounded-2xl"
    >
      <div className="absolute top-4 right-4 text-electric-blue/20">
        <Quote size={48} />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-gray-400 text-sm">{role}</p>
          <p className="text-electric-blue text-sm">{company}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">&ldquo;{quote}&rdquo;</p>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-rich-black py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Fleet Managers Worldwide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how leading companies are transforming their fleet operations with our solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;