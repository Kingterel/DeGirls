import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { SERVICES } from '../data/services.js';
import { getWhatsAppURL, WHATSAPP_MESSAGES } from '../config/site.js';
import artmeeBrandImg from '../assets/artmee_brand.jpg';

const CREED_ITEMS = [
  'We Find It',
  'We Source It',
  'We Verify It',
  'We Negotiate It',
  'We Curate It',
  'We Package It',
  'We Deliver It',
];

export default function Services() {
  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO WITH ARTMEE BRAND CARD ─── */}
      <section className="relative bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 pt-24 pb-14 lg:pt-32 lg:pb-20 border-b border-cream-300/60 overflow-hidden">
        {/* Soft atmospheric ambient light */}
        <div className="absolute top-12 left-1/4 w-80 h-80 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-28 right-12 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral-soft border border-brand-coral-border/60 text-brand-coral text-xs font-sans font-semibold tracking-wide mb-5 shadow-2xs"
              >
                <Sparkles size={14} className="text-brand-gold-dark" />
                <span>Our Bespoke Concierge Services</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-[52px] text-charcoal-700 leading-tight mb-5"
              >
                Six Ways We Make <br />
                <span className="text-brand-coral">Your Life Effortless</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-12 h-0.5 bg-brand-gold mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-charcoal-500 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
              >
                From grocery runs at local markets to bespoke celebration hampers, hard-to-find item tracking, and corporate gifts — we source, curate, and deliver with white-glove care.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link to="/contact" className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-md shadow-brand-coral/15">
                  Request a Service
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm sm:text-base px-7 py-3.5 shadow-sm"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Right: Authentic Untouched Artmee Brand Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                {/* Brand Card - Original fonts, graphics & texture preserved untouched */}
                <div className="relative rounded-3xl overflow-hidden bg-white border border-brand-gold/30 shadow-2xl shadow-brand-navy/15 p-2 sm:p-3 transition-transform duration-500 hover:scale-[1.01]">
                  <div className="rounded-2xl overflow-hidden bg-[#F6EFE6]">
                    <img
                      src={artmeeBrandImg}
                      alt="Artmee Limited - We find it, We source it, We verify it, We negotiate it, We curate it, We package it, We deliver it"
                      className="w-full h-auto object-contain block"
                      fetchPriority="high"
                    />
                  </div>
                </div>

                {/* Subtle quality badge */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-sans text-charcoal-500 font-medium">
                  <ShieldCheck size={15} className="text-brand-coral" />
                  <span>Official Artmee Limited Quality & Delivery Promise</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CREED RIBBON ─── */}
      <section className="bg-brand-navy text-cream-100 py-3.5 sm:py-4 border-y border-brand-gold/30 shadow-sm overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-7 text-center">
            {CREED_ITEMS.map((item, idx) => (
              <div key={item} className="flex items-center gap-2 sm:gap-3.5">
                <span className="font-serif text-xs sm:text-sm tracking-wide font-medium text-cream-100">
                  {item}
                </span>
                {idx < CREED_ITEMS.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-20 lg:py-28 bg-cream-100" id="services-grid">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Explore All Services"
            heading="Tailored Shopping & Gifting Solutions"
            subtext="Click on any service to view what is included, how it works, and sample requests."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section className="py-16 bg-cream-200 border-t border-cream-300">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl text-charcoal-700">Not sure which service you need?</h2>
            <p className="font-sans text-sm text-charcoal-500 mt-1">
              Tell us what you are looking for and our concierge will guide you.
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
