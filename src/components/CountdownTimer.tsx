
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Get or create target date from localStorage
    const getTargetDate = () => {
      const storedTargetDate = localStorage.getItem('countdownTargetDate');
      if (storedTargetDate) {
        return new Date(parseInt(storedTargetDate));
      } else {
        // Create new target date (7 days from now)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);
        localStorage.setItem('countdownTargetDate', targetDate.getTime().toString());
        return targetDate;
      }
    };

    const targetDate = getTargetDate();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full relative"
        >
          {/* Close button */}
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              Special Offer Ends Soon
            </h2>
            <p className="text-gray-600">
              Get your distinguished website at a special price
            </p>
          </div>

          {/* Countdown Display */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { value: timeLeft.days.toString().padStart(2, '0'), label: 'Days' },
                { value: timeLeft.hours.toString().padStart(2, '0'), label: 'Hours' },
                { value: timeLeft.minutes.toString().padStart(2, '0'), label: 'Minutes' },
                { value: timeLeft.seconds.toString().padStart(2, '0'), label: 'Seconds' },
              ].map(({ value, label }, index) => (
                <div key={label} className="flex flex-col">
                  <div className="text-white text-3xl font-bold mb-2">
                    {value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">
              Professional website at an attractive price
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Book your website now and take advantage of the limited special offer.
              <br />
              Modern and fast design with comprehensive technical support.
            </p>
          </div>

          {/* Add to Calendar Button */}
          <Button 
            onClick={scrollToContact}
            className="w-full bg-orange-50 text-orange-600 hover:bg-orange-100 border border-orange-200 rounded-lg py-3"
            variant="outline"
          >
            <Calendar className="w-4 h-4 ml-2" />
            Book Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
