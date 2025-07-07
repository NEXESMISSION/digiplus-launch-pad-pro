
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WorkspaceShowcase = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover the Perfect
              <span className="block text-orange-500">Workspace at DIGILUS_XTFP</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Experience the best technical and creative solutions in an inspiring work environment equipped with the latest technologies.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Comfortable and fully equipped workspaces
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Modern technologies and high-speed internet
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Collaborative environment with professionals from various fields
              </div>
            </div>

            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
                  100+ Completed Projects
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
                  150+ Client Reviews
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
