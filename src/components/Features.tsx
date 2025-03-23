import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Shield, 
  Zap,
  MapPin,
  BatteryCharging,
  AlertCircle
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track fleet performance metrics and driver behavior in real-time.',
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced encryption and multi-factor authentication for your data.',
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Get immediate notifications for critical events and maintenance.',
  },
  {
    icon: MapPin,
    title: 'GPS Tracking',
    description: 'Precise location tracking and route optimization.',
  },
  {
    icon: BatteryCharging,
    title: 'Fuel Management',
    description: 'Monitor fuel consumption and identify inefficiencies.',
  },
  {
    icon: AlertCircle,
    title: 'Predictive Maintenance',
    description: 'AI-powered predictions for vehicle maintenance needs.',
  },
];

// Circuit Grid Canvas Animation
const CircuitGrid = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    
    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Draw circuit grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grid settings
      const gridSize = 50;
      const lineWidth = 1;
      
      // Calculate grid dimensions
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      
      // Draw vertical and horizontal lines
      ctx.lineWidth = lineWidth;
      
      // Draw grid
      for (let i = 0; i <= cols; i++) {
        const x = i * gridSize;
        
        for (let j = 0; j <= rows; j++) {
          const y = j * gridSize;
          
          // Only draw some lines for a sparse effect
          if ((i + j) % 3 === 0) {
            const alpha = 0.03 + Math.sin(time + i * 0.2 + j * 0.2) * 0.02;
            
            // Draw horizontal lines with gradient
            if (Math.random() > 0.5) {
              const gradient = ctx.createLinearGradient(x, y, x + gridSize, y);
              gradient.addColorStop(0, `rgba(76, 201, 240, ${alpha})`);
              gradient.addColorStop(1, `rgba(114, 9, 183, ${alpha})`);
              
              ctx.strokeStyle = gradient;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + gridSize, y);
              ctx.stroke();
            }
            
            // Draw vertical lines with gradient
            if (Math.random() > 0.5) {
              const gradient = ctx.createLinearGradient(x, y, x, y + gridSize);
              gradient.addColorStop(0, `rgba(76, 201, 240, ${alpha})`);
              gradient.addColorStop(1, `rgba(114, 9, 183, ${alpha})`);
              
              ctx.strokeStyle = gradient;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, y + gridSize);
              ctx.stroke();
            }
            
            // Occasionally brighten line intersection points
            if (Math.random() > 0.9) {
              const brightnessPulse = (Math.sin(time * 2 + x * 0.05 + y * 0.05) * 0.5 + 0.5) * 0.1;
              ctx.fillStyle = `rgba(76, 201, 240, ${brightnessPulse})`;
              ctx.fillRect(x - 1, y - 1, 2, 2);
            }
          }
        }
      }
      
      time += 0.005;
      animationFrameId = requestAnimationFrame(drawGrid);
    };
    
    drawGrid();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-40"
    />
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
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
      className="group relative p-6 bg-medium-gray/30 backdrop-blur-md rounded-2xl hover:bg-medium-gray/50 transition-all duration-300"
    >
      {/* Gradient border solution using pseudo-element approach */}
      <div className="absolute inset-0 rounded-2xl">
        {/* This creates the complete border with gradient that follows rounded corners */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, #4CC9F0, #7209B7)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1px',
            borderRadius: '1rem' // Same as rounded-2xl
          }}
        />
      </div>
      
      <div className="relative">
        <motion.div 
          className="w-12 h-12 bg-gradient-to-br from-electric-blue to-deep-purple rounded-lg p-2.5 mb-4"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 15px rgba(76, 201, 240, 0.5)'
          }}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        {/* Animated line element on hover */}
        <div className="mt-4 h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-electric-blue to-deep-purple transition-all duration-500 ease-in-out" />
      </div>
    </motion.div>
  );
};

const Features = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="features" ref={sectionRef} className="relative bg-rich-black py-24 overflow-hidden">
      {/* Circuit Grid Background */}
      {sectionInView && <CircuitGrid />}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Powerful Features for Modern Fleets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to manage your fleet efficiently, all in one place.
          </motion.p>
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-electric-blue to-deep-purple mx-auto mt-6"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;