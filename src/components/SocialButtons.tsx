
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialButtons = () => {
  const handleWhatsApp = () => {
    const phone = "+21658415520";
    const message = "Hello! I'm interested in your website offer for $25 USD. Can you tell me more?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/digiplus_xtfp/', '_blank');
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us Now
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the appropriate way to contact us and get a free consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer"
            onClick={handleWhatsApp}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-green-100 mb-4">Instant and direct communication</p>

              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 text-white border-none">
              Start Conversation
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl p-8 hover:from-pink-700 hover:to-purple-800 transition-all duration-300 cursor-pointer"
            onClick={handleInstagram}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Instagram</h3>
                <p className="text-pink-100 mb-4">View our work and projects</p>
                <p className="text-pink-200 font-semibold">@digiplus_xtfp</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
            <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 text-white border-none">
              Visit Our Page
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
