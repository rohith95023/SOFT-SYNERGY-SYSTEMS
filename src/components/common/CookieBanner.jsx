import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../layout/Container';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (agreed) => {
    localStorage.setItem('cookie-consent', agreed ? 'accepted' : 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-[110] p-4 md:p-6"
        >
          <div className="bg-white rounded-2xl shadow-strong border border-slate-light/10 overflow-hidden max-w-4xl mx-auto">
            <Container className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Cookie className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="font-bold text-navy mb-2">We value your privacy</h4>
                <p className="text-slate text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/cookies" className="text-primary font-semibold hover:underline">Cookie Policy</Link>.
                </p>
              </div>
              <div className="flex gap-3 shrink-0 w-full md:w-auto">
                <Button variant="ghost" className="grow md:grow-0" onClick={() => handleConsent(false)}>Decline</Button>
                <Button className="grow md:grow-0" onClick={() => handleConsent(true)}>Accept All</Button>
              </div>
            </Container>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
