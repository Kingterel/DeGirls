import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { SERVICES } from '../data/services.js';
import { getWhatsAppURL, WHATSAPP_MESSAGES } from '../config/site.js';

export default function Services() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#7A1F3D] to-[#76508A] pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-custom text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow text-[#C97A96] mb-4">Our Services</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] text-cream-100 leading-tight mb-6">
              Six Ways We Make Life Easier
            </h1>
            <div className="w-12 h-0.5 bg-gold-light mx-auto mb-6" />
            <p className="font-sans text-cream-400 text-base sm:text-lg leading-relaxed">
              Whether it is a quick grocery run or a full event setup, we find it, source it, curate it, and deliver it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-cream-200 border-t border-cream-300">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl text-charcoal-700">Not sure which service you need?</h2>
            <p className="font-sans text-sm text-charcoal-500 mt-1">
              Tell us what you're looking for and we'll figure it out together.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary flex-shrink-0" id="services-contact-cta">
              Send an Enquiry
              <ArrowRight size={16} />
            </Link>
            <a
              href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-shrink-0"
              id="services-whatsapp-cta"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
