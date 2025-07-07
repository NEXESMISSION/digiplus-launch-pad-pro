
import { motion } from 'framer-motion';
import { ExternalLink, Palette, Code, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Gallery = () => {
  const projects = [
    {
      title: "E-Commerce Store",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Restaurant Website",
      category: "Restaurants & Hospitality",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Palette className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Beauty Salon",
      category: "Beauty Services",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Code className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Service Company",
      category: "Professional Services",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <ExternalLink className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Browse a collection of the best websites we've developed for our clients across various fields
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Link to="/project-not-found" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white mb-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.category}</p>
                </div>

                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 transition-colors duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/gallery">
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg mb-6 w-full sm:w-auto"
            >
              View Our Work
            </Button>
          </Link>
          
          <p className="text-lg text-gray-400">
            And more than 100+ successful projects waiting for you to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
};
