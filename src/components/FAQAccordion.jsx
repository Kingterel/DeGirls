import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function FAQAccordion({ faqs, limit }) {
  const [openId, setOpenId] = useState(null);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="divide-y divide-cream-300">
      {displayFaqs.map((faq) => (
        <div key={faq.id} className="py-1">
          <button
            onClick={() => toggle(faq.id)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            aria-expanded={openId === faq.id}
            id={`faq-btn-${faq.id}`}
          >
            <span
              className={`font-serif text-base sm:text-lg font-medium transition-colors duration-200 ${
                openId === faq.id ? 'text-green-600' : 'text-charcoal-700 group-hover:text-green-600'
              }`}
            >
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                openId === faq.id
                  ? 'bg-green-600 border-green-600 text-cream-100'
                  : 'border-cream-400 text-charcoal-400 group-hover:border-green-400 group-hover:text-green-600'
              }`}
            >
              <ChevronDown size={15} strokeWidth={2.5} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openId === faq.id && (
              <motion.div
                key={`answer-${faq.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className="pb-5 pr-10">
                  <p className="font-sans text-sm sm:text-base text-charcoal-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
