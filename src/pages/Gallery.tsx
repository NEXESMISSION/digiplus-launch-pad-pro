import { motion } from 'framer-motion';
import { ExternalLink, Palette, Code, Smartphone, ShoppingCart, Utensils, Scissors, Building2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const categories = [
    {
      title: "E-Commerce",
      description: "Advanced and responsive online stores",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
      projects: [
        {
          title: "Modern Fashion Store",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Online store for women's fashion"
        },
        {
          title: "Electronics Store",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Platform for selling electronic devices"
        },
        {
          title: "Gift Store",
          image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Specialized store for premium gifts"
        }
      ]
    },
    {
      title: "Restaurants & Hospitality",
      description: "Professional restaurant and café websites",
      icon: <Utensils className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      projects: [
        {
          title: "Mediterranean Restaurant",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Luxury seafood restaurant"
        },
        {
          title: "Art Café",
          image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Modern café for artists and creators"
        },
        {
          title: "Heritage Restaurant",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Authentic traditional cuisine restaurant"
        }
      ]
    },
    {
      title: "Beauty Services",
      description: "Distinguished salons and beauty centers",
      icon: <Scissors className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500",
      projects: [
        {
          title: "Royal Beauty Salon",
          image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Luxury women's beauty salon"
        },
        {
          title: "Skin Care Center",
          image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Specialized center for skin treatments"
        },
        {
          title: "Modern Men's Salon",
          image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Advanced men's barbershop"
        }
      ]
    },
    {
      title: "Professional Services",
      description: "Company websites and professional services",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      projects: [
        {
          title: "Legal Consulting Company",
          image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Law office and legal consulting"
        },
        {
          title: "Digital Marketing Company",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Digital marketing agency"
        },
        {
          title: "Accounting Company",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description: "Accounting and financial auditing office"
        }
      ]
    }
  ];

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
            <Link to="/">
              <Button 
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black"
              >
                <ArrowLeft className="w-5 h-5 ml-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Portfolio of
              <span className="block text-orange-500">Excellence</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover a diverse collection of successful projects we've implemented for our clients across various sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16 border-b border-gray-800">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mx-auto mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.projects.map((project, projectIndex) => (
                <Link to="/project-not-found" key={projectIndex}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
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
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4 ml-2" />
                        View Project
                      </Button>
                    </div>

                    <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 transition-colors duration-300" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              Do you want a project like these?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Start your project now and get a professional website that sets you apart from competitors
            </p>
            <Link to="/#contact">
              <Button
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Start Your Project Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
