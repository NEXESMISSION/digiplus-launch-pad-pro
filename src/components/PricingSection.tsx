
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Palette, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingSectionProps {
  websitesLeft: number;
}

export const PricingSection = ({ websitesLeft }: PricingSectionProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast delivery in just 3 days",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Custom design that fits your business identity",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Free support for a full year",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Special & Exclusive Offer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get your professional website at an exceptional price for the first 50 clients only
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Websites Left Counter - Moved to top of pricing boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 rounded-full px-8 py-4">
            <p className="text-white font-bold text-lg">
              Websites remaining at this price: 
              <span className="text-yellow-300 text-2xl mx-3">{websitesLeft}</span>
              / 50
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Regular Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-400 mb-4">Regular Price</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-500 line-through">$100</span>
                <span className="text-xl text-gray-600 mr-2">USD</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Check className="w-5 h-5 text-gray-500 ml-3" />
                  Professional design
                </div>
                <div className="flex items-center text-gray-400">
                  <Check className="w-5 h-5 text-gray-500 ml-3" />
                  Hosting for one year
                </div>
                <div className="flex items-center text-gray-400">
                  <Check className="w-5 h-5 text-gray-500 ml-3" />
                  Technical support
                </div>
              </div>
            </div>
          </motion.div>

          {/* Special Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 relative border-2 border-orange-400 transform scale-105"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center">
                <Crown className="w-4 h-4 ml-2" />
                Limited Offer
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-orange-100 mb-4">Special Price</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$50</span>
                <span className="text-xl text-orange-200 mr-2">USD</span>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <p className="text-orange-100 font-semibold">
                  Save $50 USD
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-orange-100">
                  <Check className="w-5 h-5 text-orange-300 ml-3" />
                  Custom professional design
                </div>
                <div className="flex items-center text-orange-100">
                  <Check className="w-5 h-5 text-orange-300 ml-3" />
                  Free hosting for one year
                </div>
                <div className="flex items-center text-orange-100">
                  <Check className="w-5 h-5 text-orange-300 ml-3" />
                  Free modifications for one month
                </div>
                <div className="flex items-center text-orange-100">
                  <Check className="w-5 h-5 text-orange-300 ml-3" />
                  Delivery in 3 days
                </div>
              </div>

              <Button
                onClick={scrollToContact}
                className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 text-lg"
              >
                Get the Offer Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
