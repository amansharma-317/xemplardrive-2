import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const screenshots = [
  {
    title: "Real-time Fleet Dashboard",
    description: "Monitor all your vehicles at a glance with comprehensive performance metrics.",
    image: "https://xemplardrive.com/assets/images/i-Trip-Details.png"
  },
  {
    title: "Driver Analytics",
    description: "Track driver behavior, routes, and efficiency with detailed analytics.",
    image: "https://xemplardrive.com/assets/images/i-Fleet-Monitor-TH.png"
  },
  {
    title: "Maintenance Alerts",
    description: "Stay ahead of vehicle maintenance with proactive notifications and scheduling.",
    image: "https://xemplardrive.com/assets/images/i-trip_history.png"
  }
];

const ScreenshotSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: custom === activeIndex ? 1 : 0.85,
      filter: custom === activeIndex ? 'brightness(1)' : 'brightness(0.5)',
      transition: { 
        duration: 0.5,
        delay: custom === activeIndex ? 0 : 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="screenshots" ref={ref} className="bg-rich-black py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-deep-purple/20 rounded-full blur-3xl"></div>
        
        {/* Tech Grid Lines - Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          {Array(10).fill().map((_, i) => (
            <React.Fragment key={i}>
              <div className="absolute left-0 right-0 h-px bg-electric-blue" style={{ top: `${i * 10}%` }} />
              <div className="absolute top-0 bottom-0 w-px bg-deep-purple" style={{ left: `${i * 10}%` }} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            User Interface Tour
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Intuitive, powerful, and designed for the modern fleet manager.
          </p>
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 120 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-electric-blue to-deep-purple mx-auto mt-6"
          />
        </motion.div>

        <div className="relative h-auto pt-20">
          {/* Navigation Controls - Place above the carousel */}
          <div className="flex justify-center items-center gap-4 mb-8 relative z-50">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-medium-gray/30 flex items-center justify-center text-white hover:bg-medium-gray/50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {screenshots.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    width: index === activeIndex ? 24 : 8,
                    backgroundColor: index === activeIndex 
                      ? ["#4CC9F0", "#7209B7", "#4CC9F0"] 
                      : "rgba(255, 255, 255, 0.3)"
                  }}
                  transition={{
                    duration: index === activeIndex ? 2 : 0.3,
                    repeat: index === activeIndex ? Infinity : 0,
                    ease: "linear"
                  }}
                  className="h-2 rounded-full"
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-medium-gray/30 flex items-center justify-center text-white hover:bg-medium-gray/50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Phone Carousel */}
          <div className="flex justify-center items-center py-12 min-h-[650px] relative">
            {screenshots.map((screenshot, index) => {
              // Calculate position (left, center, right)
              const position = 
                index === activeIndex ? "center" : 
                (index === (activeIndex - 1 + screenshots.length) % screenshots.length) ? "left" : "right";
              
              const xPosition = 
                position === "center" ? 0 : 
                position === "left" ? "-30%" : "30%";
              
              const zIndex = position === "center" ? 30 : 10;
              
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={phoneVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="absolute"
                  style={{ 
                    left: "50%",
                    zIndex,
                    x: xPosition,
                    translateX: "-50%" 
                  }}
                >
                  <div className="relative w-[280px] h-[580px]">
                    {/* Phone Frame */}
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/30 to-deep-purple/30 rounded-[40px] blur-md"></div>
                    <div className="absolute inset-0 bg-dark-gray rounded-[40px] p-2">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20"></div>
                      
                      {/* Screen */}
                      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-rich-black">
                        {/* Glare effect */}
                        <div className="absolute top-0 right-0 w-1/2 h-1/3 bg-white/5 blur-md rounded-bl-full"></div>
                        
                        {/* Screenshot */}
                        <motion.img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ scale: 1.05 }}
                          animate={{ scale: position === "center" ? 1 : 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        {/* UI Elements Overlay - Only for center phone */}
                        {position === "center" && (
                          <div className="absolute inset-0 flex flex-col justify-end">
                            <motion.div
                              initial={{ y: 100, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                              className="p-6 bg-gradient-to-t from-rich-black via-rich-black/90 to-transparent"
                            >
                              <h3 className="text-white text-xl font-semibold mb-2">{screenshot.title}</h3>
                              <p className="text-gray-400 text-sm mb-4">{screenshot.description}</p>
                              
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="h-1 bg-gradient-to-r from-electric-blue to-deep-purple"
                              />
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* CTA - Moved after closing the carousel div */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center relative z-40"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-electric-blue to-deep-purple text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-electric-blue/20"
            >
              Request Full Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;