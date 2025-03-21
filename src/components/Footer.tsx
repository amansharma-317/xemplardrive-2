import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, LinkedinIcon, Twitter, Facebook, RefreshCw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rich-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-deep-purple/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern - subtle background */}
        <div className="absolute inset-0 opacity-5">
          {Array(10).fill().map((_, i) => (
            <React.Fragment key={i}>
              <div className="absolute left-0 right-0 h-px bg-electric-blue" style={{ top: `${i * 10}%` }} />
              <div className="absolute top-0 bottom-0 w-px bg-deep-purple" style={{ left: `${i * 10}%` }} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and company info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="https://xemplardrive.com/assets/images/xemplar_logo.svg" 
                alt="Xemplar Insights" 
                className="h-16"
              />
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">HEADQUARTERS</h3>
              <address className="text-gray-400 not-italic space-y-2">
                <p>295 East Swedesford Rd.</p>
                <p>Suite 341,</p>
                <p>Wayne PA 19087,</p>
                <p>USA</p>
              </address>
            </div>
          </div>

          {/* Development Center */}
          <div className="space-y-6">
            <h3 className="text-white font-bold mb-4 text-lg">DEVELOPMENT CENTER</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>Krishe Sapphire, 6th Floor</p>
              <p>Survey No.88, Madhapur</p>
              <p>Telangana, 500081</p>
              <p>India, Ph: +91-9440473879</p>
            </address>

            <div className="pt-4">
              <div className="flex items-center gap-3 text-gray-400 mb-3 hover:text-electric-blue transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:1-844-900-9367" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Call Us: 1-844-900-XEMP (9367)
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400 hover:text-electric-blue transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@xemplardrive.com" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Write to Us: info@xemplardrive.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-2xl">HAVE A QUESTION?</h3>
            <p className="text-gray-400">We will get back to you within one business day.</p>
            
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="text" 
                  placeholder="First Name*" 
                  className="bg-dark-gray/50 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
                />
                <input 
                  type="text" 
                  placeholder="Last Name*" 
                  className="bg-dark-gray/50 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="email" 
                  placeholder="Email*" 
                  className="bg-dark-gray/50 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number*" 
                  className="bg-dark-gray/50 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
                />
              </div>
              
              <div className="flex gap-3">
                <div className="flex bg-dark-gray/50 border border-gray-700 rounded-md px-3 items-center w-1/3">
                  <div className="text-gray-400">HZCMr</div>
                  <RefreshCw className="w-4 h-4 text-gray-400 ml-2" />
                </div>
                <input 
                  type="text" 
                  placeholder="Type Here" 
                  className="bg-dark-gray/50 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 w-2/3"
                />
              </div>
              
              <textarea 
                placeholder="How can we help you?*" 
                rows={4}
                className="w-full bg-dark-gray/50 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
              ></textarea>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full uppercase"
              >
                Submit
              </motion.button>
            </form>
            
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            <motion.a 
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-medium-gray/30 rounded-full flex items-center justify-center text-white hover:bg-electric-blue transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-medium-gray/30 rounded-full flex items-center justify-center text-white hover:bg-electric-blue transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-medium-gray/30 rounded-full flex items-center justify-center text-white hover:bg-electric-blue transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-400 text-sm">
              © 2018-2025 Xemplar Insights, LLC.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;