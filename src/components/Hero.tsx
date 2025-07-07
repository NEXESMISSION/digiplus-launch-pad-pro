import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/27c2843e-c54f-458c-88c4-674dddfe2044.png')`,
            filter: 'saturate(0.4) brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Lens Flare positioned above background but below all content */}
      <div className="absolute inset-0 z-5 pointer-events-none flex items-center justify-center">
        <div 
          className="w-[800px] h-[800px] bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/e95dc5cd-cb7c-4894-b5eb-63535fecfd53.png')`,
            mixBlendMode: 'screen',
            filter: 'brightness(1.5) contrast(1.2) blur(2px)',
            animation: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            maskImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 80%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 80%)'
          }}
        />
      </div>

      {/* Logo in top left */}
      <div className="absolute top-6 left-6 z-50">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/c1fcaacd-1b60-4301-b8a2-126b4754ebf9.png" 
            alt="DIGILUS_XTFP Logo" 
            className="w-10 h-10"
            style={{ filter: 'brightness(0) saturate(100%) invert(65%) sepia(75%) saturate(4174%) hue-rotate(191deg) brightness(105%) contrast(94%)' }}
          />
          <h1 className="text-xl font-bold text-white">
            DIGILUS_XTFP
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight relative z-10">
              Your Gateway to the
              <span className="block text-orange-500">Professional Web</span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            We provide you with modern web solutions that you need to stand out in the digital market
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg w-full sm:w-auto"
            >
              Start Your Project Now
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
            
            <Link to="/gallery" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 w-full"
              >
                <Play className="w-5 h-5 ml-2" />
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Stats - moved here to be closer to buttons */}
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-8 border border-white/10 max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-white">
              <div className="text-center">
                <div className="text-lg sm:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">100+</div>
                <div className="text-xs sm:text-sm text-gray-300">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-300">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">3</div>
                <div className="text-xs sm:text-sm text-gray-300">Days Delivery</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
