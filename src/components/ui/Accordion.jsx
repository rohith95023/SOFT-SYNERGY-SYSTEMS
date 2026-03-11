import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-light/10 mb-2">
      <button
        className="w-full py-4 px-2 flex justify-between items-center text-left hover:text-primary transition-standard"
        onClick={onClick}
      >
        <span className="text-lg font-semibold">{title}</span>
        <ChevronDown 
          className={cn(
            "h-5 w-5 transition-transform duration-300",
            isOpen && "rotate-180 text-primary"
          )} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-2 text-slate leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndex, setOpenIndex] = useState(allowMultiple ? [] : null);

  const handleClick = (index) => {
    if (allowMultiple) {
      setOpenIndex(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index) 
          : [...prev, index]
      );
    } else {
      setOpenIndex(prev => prev === index ? null : index);
    }
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={allowMultiple ? openIndex.includes(index) : openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
