
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';
import { BenefitsSection } from '../components/BenefitsSection';
import { PricingSection } from '../components/PricingSection';
import { CountdownTimer } from '../components/CountdownTimer';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

const Index = () => {
  const [websitesLeft, setWebsitesLeft] = useState(42);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <Gallery />
          <BenefitsSection />
          <PricingSection websitesLeft={websitesLeft} />
          <CountdownTimer />
          <ContactForm />
          <Footer />
        </motion.div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
