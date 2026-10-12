import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import { FAQS } from '../data/faqs.js';
import { getWhatsAppURL, WHATSAPP_MESSAGES } from '../config/site.js';

export default function FAQs() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-green-600 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container-custom text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow text-green-300 mb-4">FAQs</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-cream-100 leading-tight mb-5">
              Frequently Asked Questions
            </h1>
            <div className="w-12 h-0.5 bg-gold-light mx-auto mb-5" />
            <p className="font-sans text-cream-400 text-base leading-relaxed">
              Have a question? We've answered the most common ones below. If you still need help, just reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-cream-300/60">
            <FAQAccordion faqs={FAQS} />
          </div>

          {/* Still have questions? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-green-600 rounded-3xl p-8 sm:p-10 text-center"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-cream-100 mb-4">
              Still have a question?
            </h2>
            <p className="font-sans text-cream-400 text-sm leading-relaxed mb-7 max-w-sm mx-auto">
              Our team is responsive and happy to help. Reach us on WhatsApp for the fastest reply.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-ghost" id="faqs-contact-cta">
                Send an Enquiry
                <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="faqs-whatsapp-cta"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
