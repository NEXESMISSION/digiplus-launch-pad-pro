
import { motion } from 'framer-motion';
import { Send, User, Phone, Mail, MessageSquare, Lightbulb, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, FormEvent } from 'react';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleWhatsApp = () => {
    const phone = "+21658415520";
    const message = "Hello! I'm interested in your website offer for $50 USD. Can you tell me more?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/digiplus_xtfp/', '_blank');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert('Your request has been sent successfully!');
        form.reset();
        setSubmitStatus({ success: true, message: 'Your request has been sent successfully! We will contact you soon.' });
      } else {
        const data = await response.json();
        const errorMessage = data.errors ? data.errors.map((e: any) => e.message).join(', ') : 'An error occurred while submitting the form.';
        alert(`An error occurred: ${errorMessage}`);
        setSubmitStatus({ success: false, message: `An error occurred: ${errorMessage}` });
      }
    } catch (error) {
      const errorMessage = 'An error occurred while sending the request. Please check your internet connection and try again.';
      alert(errorMessage);
      setSubmitStatus({ success: false, message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Start Your Digital Journey With Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fill out the form below and we will contact you to discuss your website idea and turn it into an outstanding digital reality.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Social Contact Options - Moved to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Contact Us Now
              </h3>
              <p className="text-lg text-gray-400">
                Choose the appropriate way to contact us and get a free consultation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 hover:from-green-700 hover:to-green-800 transition-all duration-300 cursor-pointer"
                onClick={handleWhatsApp}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">WhatsApp</h4>
                    <p className="text-green-100 mb-3">Instant and direct communication</p>

                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <Button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-none">
                  Start Conversation
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </div>

              <div
                className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl p-6 hover:from-pink-700 hover:to-purple-800 transition-all duration-300 cursor-pointer"
                onClick={handleInstagram}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Instagram</h4>
                    <p className="text-pink-100 mb-3">View our work and projects</p>
                    <p className="text-pink-200 font-semibold">@digiplus_xtfp</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
                <Button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-none">
                  Visit Our Page
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <form onSubmit={handleSubmit} action="https://formsubmit.co/your-email@example.com" method="POST" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="false" />
                <div className="relative">
                  <User className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className="pr-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 h-12 text-right"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    className="pr-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 h-12 text-right"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email (Optional)"
                    className="pr-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 h-12 text-right"
                  />
                </div>

                <div className="relative">
                  <Lightbulb className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    name="projectType"
                    placeholder="Project Type (Restaurant, Salon, Store...)"
                    className="pr-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 h-12 text-right"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                  <Textarea
                    name="details"
                    placeholder="Additional Details (Number of pages, special features...)"
                    className="pr-12 pt-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 min-h-[120px] resize-none text-right"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 text-lg rounded-lg transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 ml-2" />
                      Send Request
                    </>
                  )}
                </Button>
                {submitStatus && (
                  <div className={`mt-4 text-center p-3 rounded-lg text-white ${submitStatus.success ? 'bg-green-500/20 border border-green-500' : 'bg-red-500/20 border border-red-500'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
