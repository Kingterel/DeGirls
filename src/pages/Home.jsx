import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Clock, ShieldCheck, Wallet, MapPin, CheckCircle, Sparkles, Heart, Star, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

import heroImg from '../assets/hero.jpg';
import promiseImg from '../assets/promise.jpg';
import corporateImg from '../assets/corporate_gift.jpg';
import artmeeBrandImg from '../assets/artmee_brand.jpg';

import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';

import { SERVICES } from '../data/services.js';
import { TESTIMONIALS } from '../data/testimonials.js';
import { FAQS } from '../data/faqs.js';
import { OCCASIONS } from '../data/occasions.js';
import { getWhatsAppURL, WHATSAPP_MESSAGES } from '../config/site.js';

const TRUST_ITEMS = [
  {
    icon: Clock,
    title: 'Zero Market Stress',
    desc: 'You send the list, we do the running.',
  },
  {
    icon: ShieldCheck,
    title: '100% Verified Quality',
    desc: 'Handpicked from trusted, vetted vendors.',
  },
  {
    icon: Wallet,
    title: 'Every Budget Welcome',
    desc: 'Bespoke solutions customized for you.',
  },
  {
    icon: MapPin,
    title: 'Abuja & Nationwide',
    desc: 'Prompt doorstep delivery you can rely on.',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Send us a shopping list, an item photo, or your gifting idea via WhatsApp or our quick enquiry form.',
  },
  {
    step: '02',
    title: 'We Source & Curate',
    desc: 'We scour trusted markets and vendors, negotiate the best rates, verify quality, and curate your order.',
  },
  {
    step: '03',
    title: 'Delivered With Love',
    desc: 'Every item is packaged beautifully and delivered right to your home, office, or event on schedule.',
  },
];

const CREED_ITEMS = [
  'We Find It',
  'We Source It',
  'We Verify It',
  'We Negotiate It',
  'We Curate It',
  'We Package It',
  'We Deliver It',
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ─── WELCOMING MODERN HERO ─── */}
      <section className="relative bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-cream-300/60">
        {/* Soft atmospheric background lights */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-32 right-10 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left">
              {/* Welcoming pill badge */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral-soft border border-brand-coral-border/60 text-brand-coral text-xs font-sans font-semibold tracking-wide mb-6 shadow-2xs"
              >
                <Sparkles size={14} className="text-brand-gold-dark" />
                <span>Abuja's Premier Shopping & Bespoke Gifting Concierge</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                custom={0.1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-charcoal-700 leading-[1.12] tracking-tight mb-6"
              >
                Consider it done. <br className="hidden sm:inline" />
                <span className="text-brand-coral">We shop, curate & deliver</span> so you never have to stress.
              </motion.h1>

              {/* Welcoming Subtitle */}
              <motion.p
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-sans text-base sm:text-lg text-charcoal-500 leading-relaxed mb-8 max-w-xl"
              >
                Say goodbye to crowded market runs and gifting dilemmas. From custom luxury gift hampers and everyday essentials to hard-to-find items, Artmee Limited handles every single detail with white-glove care.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                custom={0.3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="btn-primary text-sm sm:text-base px-8 py-4 shadow-lg shadow-brand-coral/20"
                  id="hero-cta-enquiry"
                >
                  Place an Enquiry
                  <ArrowRight size={18} />
                </Link>

                <a
                  href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm sm:text-base px-7 py-4 shadow-md shadow-green-500/20"
                  id="hero-cta-whatsapp"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Trust Micro-Indicators */}
              <motion.div
                custom={0.4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-cream-300/80"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-coral flex-shrink-0" />
                  <span className="font-sans text-xs text-charcoal-600 font-medium">Abuja & Nationwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-coral flex-shrink-0" />
                  <span className="font-sans text-xs text-charcoal-600 font-medium">Personalized Sourcing</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle size={16} className="text-brand-coral flex-shrink-0" />
                  <span className="font-sans text-xs text-charcoal-600 font-medium">Every Budget Welcome</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Authentic Untouched Brand Asset Showcase */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                {/* Decorative glow backing */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/15 via-brand-gold/15 to-transparent rounded-3xl blur-2xl -z-10 transform -rotate-2" />

                {/* The Original Brand Asset - Preserved 100% Untouched in Design, Fonts & Proportions */}
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

                {/* Floating Highlight Badge 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-cream-300 hidden sm:flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-coral-soft border border-brand-coral-border/50 flex items-center justify-center text-brand-coral">
                    <Heart size={18} />
                  </div>
                  <div>
                    <p className="font-serif text-xs font-semibold text-charcoal-700">Curated With Care</p>
                    <p className="font-sans text-[11px] text-charcoal-400">Treated like our own</p>
                  </div>
                </motion.div>

                {/* Floating Highlight Badge 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-cream-300 hidden sm:flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold-soft border border-brand-gold/40 flex items-center justify-center text-brand-gold-dark">
                    <Star size={18} />
                  </div>
                  <div>
                    <p className="font-serif text-xs font-semibold text-charcoal-700">White-Glove Delivery</p>
                    <p className="font-sans text-[11px] text-charcoal-400">Prompt & dependable</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CATCHY CREED RIBBON ─── */}
      <section className="bg-brand-navy text-cream-100 py-4 sm:py-5 border-y border-brand-gold/30 shadow-sm overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-8 text-center">
            {CREED_ITEMS.map((item, idx) => (
              <div key={item} className="flex items-center gap-3 sm:gap-4">
                <span className="font-serif text-sm sm:text-base tracking-wide font-medium text-cream-100">
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

      {/* ─── QUICK SERVICE BROWSER / CATCHY FEATURE HIGHLIGHT ─── */}
      <section className="py-20 lg:py-28 bg-cream-100" id="services">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Bespoke Services"
            heading="How Can We Make Life Easier For You Today?"
            subtext="Select what you need below, and our concierge team will take it from here."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/services" className="btn-secondary px-8 py-3.5" id="home-services-cta">
              View Complete Services Guide
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-cream-200 border-y border-cream-300 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl border border-cream-300 bg-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <item.icon size={22} className="text-brand-coral" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-charcoal-700 leading-tight">
                    {item.title}
                  </p>
                  <p className="font-sans text-xs text-charcoal-500 mt-1 leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROMISE & EXPERIENCE ─── */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <p className="font-script text-4xl text-brand-coral mb-3">Our Promise</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-charcoal-700 leading-tight mb-6">
                We handle your errands, so you can focus on living.
              </h2>
              <div className="divider mb-6" />
              <p className="font-sans text-charcoal-600 text-base leading-relaxed mb-6">
                Whether it is sourcing rare ingredients, hunting down a specific fabric, or surprising someone special with a bespoke hamper in Abuja, you will never have to spend hours in traffic or negotiating with multiple vendors.
              </p>
              <p className="font-sans text-charcoal-500 text-base leading-relaxed mb-8">
                We pride ourselves on attention to detail, transparent communication, and impeccable packaging that makes every delivery feel like a gift.
              </p>

              <ul className="space-y-3.5 mb-10">
                {[
                  'Hand-inspected goods from trusted vendors',
                  'Same-day and scheduled deliveries across Abuja',
                  'Customized packaging & personalized note cards',
                  'Every budget respected with full transparency',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-sans text-charcoal-700">
                    <CheckCircle size={17} className="text-brand-coral flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary" id="promise-cta">
                  Start Your Request
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <MessageCircle size={16} />
                  Speak to Concierge
                </a>
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-brand-navy/15 border border-cream-300">
                <img
                  src={promiseImg}
                  alt="Customer relaxing while Artmee Limited manages her shopping"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-navy-dark/95 via-brand-navy/50 to-transparent text-cream-50">
                  <p className="font-script text-3xl text-brand-gold-light leading-tight">Shopping & Gifting</p>
                  <p className="font-serif text-xl sm:text-2xl text-white font-medium">Simplified with Elegance</p>
                </div>
              </div>

              {/* Decorative glow backing */}
              <div className="absolute -bottom-8 -left-8 w-52 h-52 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 lg:py-28 bg-cream-200 border-y border-cream-300">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Simple & Seamless"
            heading="How Artmee Works"
            subtext="From your first message to final delivery, we keep things simple and effortless."
            align="center"
            className="mb-16"
          />

          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-cream-300 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
              {HOW_IT_WORKS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl border border-brand-gold/30 shadow-md flex items-center justify-center mb-6">
                    <span className="font-serif text-2xl font-bold text-brand-navy">{step.step}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal-700 mb-3">{step.title}</h3>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link to="/contact" className="btn-primary" id="how-it-works-cta">
              Send Your Request
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OCCASIONS ─── */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Celebrate Life's Moments"
            heading="Whatever the Occasion, We've Got You Covered"
            subtext="Handcrafted gift curation for every milestone and celebration."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {OCCASIONS.map((occasion, i) => (
              <motion.div
                key={occasion.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square shadow-sm"
              >
                <img
                  src={occasion.image}
                  alt={occasion.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy/30 to-transparent transition-all duration-300 group-hover:from-brand-navy-dark/95" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
                  <p className="font-serif text-white text-base font-semibold leading-tight">
                    {occasion.name}
                  </p>
                  <p className="font-sans text-cream-200 text-xs mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {occasion.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services/bespoke-box" className="btn-secondary" id="occasions-cta">
              Explore Bespoke Gift Boxes
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CORPORATE ─── */}
      <section className="bg-brand-navy-dark text-cream-100 py-20 lg:py-28 relative overflow-hidden border-y border-brand-gold/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-eyebrow text-brand-gold-light mb-4">Corporate & Executive</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-cream-100 leading-tight mb-6">
                Make Corporate Gifting Effortless & Impressive
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold mb-6" />
              <p className="font-sans text-cream-300 text-base leading-relaxed mb-8 max-w-lg">
                From executive appreciation hampers to bulk staff rewards and year-end client gifts, we source premium items, brand your packaging, and coordinate on-time multi-location deliveries.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={getWhatsAppURL(WHATSAPP_MESSAGES.corporate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  id="corporate-whatsapp-cta"
                >
                  <MessageCircle size={16} />
                  Discuss Corporate Orders
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-brand-gold/30">
                <img
                  src={corporateImg}
                  alt="Corporate gift hampers curated by Artmee Limited"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Words of Trust"
            heading="Loved by Clients Across Abuja"
            subtext="Hear directly from busy professionals, families, and businesses who rely on Artmee."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ PREVIEW ─── */}
      <section className="py-20 lg:py-24 bg-cream-200 border-t border-cream-300">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            eyebrow="Common Questions"
            heading="Frequently Asked Questions"
            align="center"
            className="mb-12"
          />

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-cream-300/80">
            <FAQAccordion faqs={FAQS} limit={5} />
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-coral hover:text-brand-coral-hover transition-colors group"
              id="faq-preview-cta"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WELCOMING FINAL CTA ─── */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-4xl text-brand-coral mb-3">Let's get started</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-700 leading-tight mb-5">
              Need Something? Let Us Take Care of It.
            </h2>
            <div className="divider mx-auto mb-6" />
            <p className="font-sans text-charcoal-500 text-base sm:text-lg leading-relaxed mb-10">
              Tell us what you're looking for and we'll handle the rest. Whether it's a single emergency errand, a thoughtful anniversary box, or an office restock, no request is too small or too grand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-9 py-4 text-base" id="final-cta-btn">
                Place an Enquiry
                <ArrowRight size={18} />
              </Link>
              <a
                href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-9 py-4 text-base"
                id="final-cta-whatsapp"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
