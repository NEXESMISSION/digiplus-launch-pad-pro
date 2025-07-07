
import { motion } from 'framer-motion';
import { Globe, ArrowUp, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-orange-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16"
        >
          {/* Logo and Brand Section */}
          <div className="text-center mb-12">
            <motion.div 
              className="flex items-center justify-center mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img 
                  src="/lovable-uploads/c1fcaacd-1b60-4301-b8a2-126b4754ebf9.png" 
                  alt="DIGILUS_XTFP Logo" 
                  className="w-16 h-16 ml-3"
                  style={{ filter: 'brightness(0) saturate(100%) invert(65%) sepia(75%) saturate(4174%) hue-rotate(191deg) brightness(105%) contrast(94%)' }}
                />
                <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-xl"></div>
              </div>
              <h3 className="text-3xl font-bold text-white ml-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                DIGILUS_XTFP
              </h3>
            </motion.div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Your gateway to the professional web world. We provide modern web solutions that you need to stand out in the digital market and achieve your business goals.
            </p>
            
            {/* Social/Contact Icons */}
            <div className="flex justify-center space-x-6">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DIGILUS_XTFP. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for digital excellence</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};
