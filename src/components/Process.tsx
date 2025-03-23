import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, BarChart, Bell, Settings } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: 'Install & Connect',
    description: 'Download the app and connect your fleet vehicles in minutes.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1024&q=80',
  },
  {
    icon: BarChart,
    title: 'Track & Analyze',
    description: 'Get real-time insights into your fleet performance and driver behavior.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1024&q=80',
  },
  {
    icon: Bell,
    title: 'Monitor & Alert',
    description: 'Receive instant notifications for maintenance needs and safety concerns.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1024&q=80',
  },
  {
    icon: Settings,
    title: 'Optimize & Improve',
    description: 'Use AI-powered recommendations to enhance fleet efficiency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1024&q=80',
  },
];

const ProcessStep = ({ icon: Icon, title, description, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Timeline number animation variants
  const numberVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.4,
        delay: 0.2 
      }
    }
  };

  // Line progress animation
  const lineVariants = {
    hidden: { 
      height: '0%',
      opacity: 0.3
    },
    visible: { 
      height: '100%',
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Timeline indicator */}
        <div className="absolute left-0 top-0 bottom-0 hidden md:flex flex-col items-center">
          {/* Number indicator */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={numberVariants}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-electric-blue to-deep-purple relative z-10"
          >
            <span className="text-white font-bold">{index + 1}</span>
          </motion.div>
          
          {/* Line connector */}
          {index < steps.length - 1 && (
            <div className="w-px h-full overflow-hidden relative mt-2">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-electric-blue via-deep-purple to-electric-blue"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={lineVariants}
              />
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/2 md:ml-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-deep-purple/20 rounded-2xl blur-xl" />
            <img
              src={image}
              alt={title}
              className="relative rounded-2xl w-full object-cover aspect-video"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-deep-purple rounded-lg p-2.5">
              <Icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-gray-400">{description}</p>
          
          {/* Mobile timeline indicator (only visible on mobile) */}
          {index < steps.length - 1 && (
            <div className="md:hidden w-full h-px my-8 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-electric-blue via-deep-purple to-electric-blue"
                initial={{ width: '0%' }}
                animate={inView ? { width: '100%' } : { width: '0%' }}
                transition={{ duration: 0.8 }}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Add spacing for the timeline */}
      <div className="h-16 md:h-24"></div>
    </motion.div>
  );
};

const Process = () => {
  // Animation for the pulsing timeline dot at the top
  const pulseAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop"
    }
  };

  return (
    <section className="bg-rich-black py-24 relative overflow-hidden" id ="process">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-electric-blue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-deep-purple opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started with our fleet management solution in four simple steps.
          </p>
          
          {/* Timeline start indicator */}
          <div className="hidden md:block absolute left-8 top-full mt-8">
            <motion.div 
              className="w-4 h-4 rounded-full bg-electric-blue"
              animate={pulseAnimation}
            />
          </div>
        </motion.div>

        {/* Timeline track - vertical line running through steps */}
        <div className="hidden md:block absolute left-8 top-[240px] bottom-24 w-px bg-gray-700/30" />

        <div className="relative pl-0 md:pl-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;