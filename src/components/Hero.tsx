import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Smartphone, Mail, User, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(1);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen bg-rich-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-medium-gray/20 via-rich-black to-rich-black" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-electric-blue"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.5 + 0.2 
            }}
            animate={{ 
              y: [null, Math.random() * 20 - 10 + "%"],
              opacity: [null, Math.random() * 0.3 + 0.1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Smart Fleet
              <span className="bg-gradient-to-r from-electric-blue to-deep-purple bg-clip-text text-transparent"> Management</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Transform your fleet operations with real-time insights, predictive analytics, and automated reporting - all from your smartphone.
            </p>
            
            {/* Form Component */}
            <motion.div 
              className="mb-8 bg-medium-gray/10 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {formStep === 0 ? (
                <form onSubmit={handleSubmit}>
                  <div className="text-white font-semibold mb-4 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ repeat: Infinity, duration: 2, repeatDelay: 5 }}
                    >
                      <Shield className="text-electric-blue mr-2 w-5 h-5" />
                    </motion.div>
                    Start your <span className="bg-gradient-to-r from-electric-blue to-deep-purple bg-clip-text text-transparent mx-1">FREE MONTH</span> trial today
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full bg-rich-black border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full bg-rich-black border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-electric-blue to-deep-purple text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-electric-blue/20 transition-all"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        Start Free Trial <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                  
                  <p className="text-gray-400 text-xs mt-3 text-center">
                    ₹599/month after trial. No credit card required to start.
                  </p>
                </form>
              ) : (
                <motion.div 
                  className="text-center py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-electric-blue to-deep-purple rounded-full mx-auto flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Thanks, {name}!
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Check your email to activate your trial.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-20"
            >
              <div className="relative w-[300px] h-[600px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-deep-purple/20 rounded-[60px] blur-xl" />
                <div className="absolute inset-0 bg-dark-gray rounded-[60px] p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-[48px] bg-rich-black">
                    <img
                      src="https://xemplardrive.com/assets/images/i-dashboardnew.png"
                      alt="Fleet Dashboard"
                      className="object-cover w-full h-full"
                    />
                    
                    {/* App Interface Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rich-black/90 flex flex-col justify-end p-6">
                      <motion.div 
                        className="bg-medium-gray/40 backdrop-blur-md rounded-xl p-4 mb-4"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1, duration: 0.8, type: "spring" }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
                          <span className="text-white text-sm font-medium">Fleet Status</span>
                        </div>
                        <p className="text-gray-200 text-xs">
                          All 8 vehicles operating normally
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-medium-gray/40 backdrop-blur-md rounded-xl p-4"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 rounded-full bg-deep-purple mr-2" />
                          <span className="text-white text-sm font-medium">Fuel Efficiency</span>
                        </div>
                        <div className="w-full bg-rich-black rounded-full h-2">
                          <motion.div 
                            className="h-2 rounded-full bg-gradient-to-r from-electric-blue to-deep-purple"
                            initial={{ width: 0 }}
                            animate={{ width: "78%" }}
                            transition={{ delay: 1.4, duration: 1 }}
                          />
                        </div>
                        <p className="text-right text-xs text-gray-300 mt-1">78% Better than last month</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glowing Effects */}
            <div className="absolute top-1/4 -left-12 w-32 h-32 bg-electric-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-deep-purple/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Scrolling Logos */}
        <div className="mt-20 overflow-hidden">
          <p className="text-gray-400 text-center mb-4 text-sm">TRUSTED BY LEADING FLEET OPERATORS</p>
          <motion.div 
            className="flex gap-8"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              repeatType: "loop", 
              ease: "linear" 
            }}
          >
            {[...Array(2)].map((_, groupIndex) => (
              ['Toyota', 'Ford', 'Tesla', 'BMW', 'Mercedes', 'Volvo', 'Uber', 'Lyft', 'DHL', 'FedEx'].map((brand, index) => (
                <div
                  key={`${groupIndex}-${brand}`}
                  className="flex items-center justify-center min-w-[150px] h-12 bg-medium-gray/30 rounded-lg px-6 backdrop-blur-sm"
                >
                  <span className="text-gray-400 font-semibold">{brand}</span>
                </div>
              ))
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;