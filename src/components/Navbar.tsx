import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

// Navigation items
const navItems = [
  { 
    label: 'Features', 
    link: '#features',
    submenu: [
      { label: 'Real-time Analytics', link: '#analytics' },
      { label: 'GPS Tracking', link: '#tracking' },
      { label: 'Maintenance Alerts', link: '#maintenance' },
      { label: 'Fuel Management', link: '#fuel' }
    ]
  },
  { label: 'How It Works', link: '#process' },
  { label: 'Screenshots', link: '#screenshots' },
  { label: 'Testimonials', link: '#testimonials' },
  { label: 'Pricing', link: '#pricing' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll event to change navbar style and detect current section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect current section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Add offset for better detection

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize active section on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (index, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Check if item or any of its subitems matches the active section
  const isItemActive = (item) => {
    if (item.link === `#${activeSection}`) return true;
    if (item.submenu) {
      return item.submenu.some(subItem => subItem.link === `#${activeSection}`);
    }
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-rich-black/80 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src="https://xemplardrive.com/assets/images/xdrive_businessnew.svg" 
              alt="XemplarDrive" 
              className="h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <div onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={(e) => toggleDropdown(index, e)}
                      className={`px-4 py-2 transition-colors flex items-center gap-1 relative group ${
                        isItemActive(item) ? 'text-white' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <motion.div
                        animate={activeDropdown === index ? { rotate: 180 } : { rotate: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      
                      {/* Hover/active indicator */}
                      {isItemActive(item) ? (
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-electric-blue to-deep-purple w-full"
                        />
                      ) : (
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-electric-blue to-deep-purple w-0 group-hover:w-full transition-all duration-300"
                          whileHover={{ width: '100%' }}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-1 w-64 bg-dark-gray/90 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-gray-700/50"
                        >
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-deep-purple"></div>
                          <div className="py-2">
                            {item.submenu.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.link}
                                className={`block px-4 py-2 hover:bg-medium-gray/30 transition-colors ${
                                  subItem.link === `#${activeSection}` 
                                    ? 'text-white bg-medium-gray/20' 
                                    : 'text-gray-300 hover:text-white'
                                }`}
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className={`px-4 py-2 transition-colors relative group ${
                      isItemActive(item) ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    
                    {/* Hover/active indicator */}
                    {isItemActive(item) ? (
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-electric-blue to-deep-purple w-full"
                      />
                    ) : (
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-electric-blue to-deep-purple w-0 group-hover:w-full transition-all duration-300"
                        whileHover={{ width: '100%' }}
                      />
                    )}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-electric-blue to-deep-purple text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-electric-blue/20"
            >
              <a href="#trial" className="inline-flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-gray/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col divide-y divide-gray-700/30">
                {navItems.map((item, index) => (
                  <div key={index} className="py-3">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={(e) => toggleDropdown(index, e)}
                          className={`flex justify-between items-center w-full py-2 ${
                            isItemActive(item) ? 'text-white' : 'text-gray-300'
                          }`}
                        >
                          {item.label}
                          <motion.div
                            animate={activeDropdown === index ? { rotate: 180 } : { rotate: 0 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 border-l border-gray-700/30 mt-2 space-y-2">
                                {item.submenu.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subItem.link}
                                    className={`block py-2 hover:text-white ${
                                      subItem.link === `#${activeSection}` 
                                        ? 'text-white' 
                                        : 'text-gray-400'
                                    }`}
                                    onClick={handleMobileLinkClick}
                                  >
                                    {subItem.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.link}
                        className={`block py-2 hover:text-white ${
                          isItemActive(item) ? 'text-white' : 'text-gray-300'
                        }`}
                        onClick={handleMobileLinkClick}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 mb-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-electric-blue to-deep-purple text-white py-3 rounded-lg font-medium"
                >
                  <a 
                    href="#trial" 
                    className="w-full inline-flex items-center justify-center gap-2"
                    onClick={handleMobileLinkClick}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;