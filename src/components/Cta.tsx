import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Award, Clock } from 'lucide-react';

const Cta = () => {
  return (
    <section className="bg-rich-black py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-deep-purple/20" />
          <div className="absolute inset-0 backdrop-blur-xl" />
          <div className="relative p-12 md:p-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Fleet Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of fleet managers who are already saving time and money with our solution.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-electric-blue to-deep-purple text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto mb-12 shadow-lg hover:shadow-electric-blue/20"
              >
                Start Free Trial
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-6 h-6 text-electric-blue" />
                  <span className="text-gray-300">30-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Award className="w-6 h-6 text-electric-blue" />
                  <span className="text-gray-300">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Clock className="w-6 h-6 text-electric-blue" />
                  <span className="text-gray-300">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;