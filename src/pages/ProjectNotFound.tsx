
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectNotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Logo and Back Button */}
      <header className="relative py-6 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
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
            <Link to="/gallery">
              <Button 
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black"
              >
                <ArrowLeft className="w-5 h-5 ml-2" />
                Back to Gallery
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="text-center max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon */}
            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="w-12 h-12 text-white" />
            </div>

            {/* Main Message */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Project Not Available
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Sorry, this project is not available for viewing currently or is under development
            </p>

            <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Do you want a similar project?
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                We can develop a custom project for you with the same quality and professionalism
              </p>
              <Link to="/#contact">
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Contact Us Now
                </Button>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery">
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 bg-gray-800/50 text-white hover:bg-gray-700 px-6 py-3"
                >
                  <ArrowLeft className="w-5 h-5 ml-2" />
                  Browse More Work
                </Button>
              </Link>
              
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3"
                >
                  <Home className="w-5 h-5 ml-2" />
                  Home Page
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNotFound;
