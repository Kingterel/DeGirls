import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  Wallet,
  MapPin,
  CheckCircle,
  Gift,
  ShoppingBag,
  Package,
  Truck,
} from 'lucide-react';
import { motion } from 'framer-motion';

import heroWelcomingImg from '../assets/hero_welcoming.jpg';
import promiseImg from '../assets/promise.jpg';
import corporateImg from '../assets/corporate_gift.jpg';

import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';

import { SERVICES } from '../data/services.js';
import { TESTIMONIALS } from '../data/testimonials.js';
import { FAQS } from '../data/faqs.js';
import { OCCASIONS } from '../data/occasions.js';
import { getWhatsAppURL, WHATSAPP_MESSAGES } from '../config/site.js';

const WELCOMING_FEATURES = [
  {
    icon: Gift,
    title: 'Gifts',
    desc: 'Personalized and thoughtful gift options for every occasion.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping',
    desc: 'Get what you need, handpicked with care.',
  },
  {
    icon: Package,
    title: 'Sourcing',
    desc: 'We find the best products, just for you.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    desc: 'Safe, reliable and on time.',
  },
];

const TRUST_ITEMS = [
  {
    icon: Clock,
    title: 'Convenient',
    desc: 'You tell us what you need',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted',
    desc: 'We source from reliable vendors',
  },
  {
    icon: Wallet,
    title: 'Flexible',
    desc: 'For every budget and occasion',
  },
  {
    icon: MapPin,
    title: 'Nationwide',
    desc: 'Serving Abuja and beyond',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Send us the details of what you\'re looking for via WhatsApp or our enquiry form.',
  },
  {
    step: '02',
    title: 'We Source & Curate',
    desc: 'We find the best options based on your needs and budget, from our trusted vendor network.',
  },
  {
    step: '03',
    title: 'We Deliver',
    desc: 'Your items are carefully packaged and delivered to your door on schedule.',
  },
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
      {/* ─── WELCOMING HERO ─── */}
      <section className="relative bg-[#FEF7EF] pt-24 pb-14 lg:pt-32 lg:pb-16 overflow-hidden border-b border-cream-300/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Welcoming Brand Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 xl:col-span-6 text-left"
            >
              {/* Eyebrow with horizontal dash line */}
              <motion.div
                custom={0}
                variants={fadeUp}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-8 h-px bg-[#721C37]" />
                <span className="font-sans text-xs tracking-wider uppercase text-[#721C37] font-semibold">
                  Your Personal Shopping and Gifting Partner in Abuja
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                custom={0.1}
                variants={fadeUp}
                className="font-serif text-4xl sm:text-5xl lg:text-[50px] xl:text-[56px] text-charcoal-700 leading-[1.12] mb-6"
              >
                Thoughtful Gifts,<br />
                Premium Shopping,<br />
                Right to Your Doorstep.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={0.2}
                variants={fadeUp}
                className="font-sans text-base sm:text-lg text-charcoal-500 leading-relaxed mb-8 max-w-lg text-justify"
              >
                From curated gifts to everyday essentials, we handle your shopping, gifting, sourcing and delivery needs — so you don't have to.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                custom={0.3}
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-[#721C37] hover:bg-[#5E1730] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  id="hero-cta-services"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-charcoal-300 hover:border-charcoal-700 bg-white/50 hover:bg-white text-charcoal-700 font-sans font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
                  id="hero-cta-whatsapp"
                >
                  <MessageCircle size={18} className="text-[#721C37]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>

              {/* Trust Signals */}
              <motion.div
                custom={0.4}
                variants={fadeUp}
                className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2 text-xs sm:text-sm font-sans text-charcoal-600"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#721C37] flex-shrink-0" />
                  <span>Based in Abuja, trusted across Nigeria</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-cream-400" />
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#721C37] flex-shrink-0" />
                  <span>Every budget welcome</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Welcoming Hero Photograph */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 xl:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#721C37]/15">
                <img
                  src={heroWelcomingImg}
                  alt="Thoughtful Gifts, Premium Shopping, Right to Your Doorstep with Artmee Limited"
                  className="w-full h-auto object-cover rounded-3xl block"
                  fetchPriority="high"
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Floating 4-Feature Card Bar (overlapping bottom of Hero) */}
        <div className="container-custom relative z-20 mt-12 lg:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-[#721C37]/10 border border-cream-300/80 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-cream-200">
              {WELCOMING_FEATURES.map((feat, idx) => (
                <div
                  key={feat.title}
                  className={`flex flex-col items-center text-center px-4 ${
                    idx === 0 ? 'pt-0' : 'pt-5 sm:pt-0'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#FAF0F3] text-[#721C37] flex items-center justify-center mb-3.5">
                    <feat.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal-700 mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-charcoal-500 leading-relaxed max-w-[220px]">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 lg:py-28 bg-[#721C37] text-cream-100 relative overflow-hidden" id="services">
        {/* Subtle decorative curved gold lines */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold-DEFAULT/15 pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-gold-DEFAULT/15 pointer-events-none" />

        <div className="container-custom relative z-10">
          <SectionHeading
            eyebrow="Our Services"
            heading="Six Ways We Make Life Easier"
            subtext="From a quick grocery run to a full event setup, we have you covered."
            align="center"
            className="mb-14 [&_h2]:text-cream-100 [&_p]:text-cream-300 [&_.section-eyebrow]:text-gold-light"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-gold-light text-cream-100 hover:bg-gold-light hover:text-charcoal-800 font-sans font-medium px-8 py-3.5 rounded-full transition-all duration-300"
              id="home-services-cta"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-cream-200 border-y border-cream-300 py-10">
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
                <div className="w-11 h-11 rounded-xl border border-cream-400 bg-white flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-[#721C37]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-charcoal-700 leading-tight">
                    {item.title}
                  </p>
                  <p className="font-sans text-xs text-charcoal-400 mt-1 leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROMISE ─── */}
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
              <p className="font-script text-3xl text-[#721C37] mb-4 text-center lg:text-left">Our Promise</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-charcoal-700 leading-tight mb-6 text-center lg:text-left">
                We do the shopping, so you can focus on what really matters.
              </h2>
              <div className="divider mb-6 mx-auto lg:mx-0" />
              <p className="font-sans text-charcoal-500 text-base leading-relaxed mb-8 text-justify">
                Gifts, essentials, events, corporate orders. All in one place. We take the stress out of shopping so your time, energy, and focus stay where they belong.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Curated from trusted vendors',
                  'Delivered on your schedule',
                  'Every budget and occasion',
                  'White-glove service, always',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-sans text-charcoal-600">
                    <CheckCircle size={16} className="text-[#721C37] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-primary" id="promise-cta">
                Get Started
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-[4/5] shadow-xl shadow-[#721C37]/10">
                <img
                  src={promiseImg}
                  alt="Happy customer relaxing while Artmee Limited handles her shopping"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#721C37]/85 via-[#4A0E20]/35 to-transparent">
                  <p className="font-script text-white text-3xl leading-tight">Shopping &</p>
                  <p className="font-script text-white text-3xl leading-tight">Gifting Simplified</p>
                </div>
              </div>

              {/* Decorative blob */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cream-300 rounded-full blur-3xl opacity-60 -z-10" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FAF0F3] rounded-full blur-3xl opacity-40 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 lg:py-28 bg-cream-200">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How It Works"
            heading="Simple as 1, 2, 3"
            subtext="Getting started with Artmee Limited only takes a few minutes."
            align="center"
            className="mb-16"
          />

          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-px bg-cream-400 z-0" />

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
                  <div className="w-24 h-24 bg-white rounded-2xl border border-cream-300 shadow-sm flex items-center justify-center mb-6">
                    <span className="font-serif text-3xl font-bold text-[#721C37]">{step.step}</span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-700 mb-3">{step.title}</h3>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link to="/contact" className="btn-primary" id="how-it-works-cta">
              Place an Enquiry
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OCCASIONS ─── */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Every Occasion"
            heading="Whatever the Occasion, We've Got You."
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
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square"
              >
                <img
                  src={occasion.image}
                  alt={occasion.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#721C37]/85 via-[#721C37]/20 to-transparent transition-all duration-300 group-hover:from-[#721C37]/95" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
                  <p className="font-serif text-white text-base font-medium leading-tight">
                    {occasion.name}
                  </p>
                  <p className="font-sans text-cream-400 text-xs mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {occasion.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services/bespoke-box" className="btn-secondary" id="occasions-cta">
              Shop Bespoke Gifts
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CORPORATE ─── */}
      <section className="bg-[#721C37] py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-eyebrow text-[#D4B87A] mb-4 text-center lg:text-left">Corporate Services</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-cream-100 leading-tight mb-6 text-center lg:text-left">
                Make Corporate Gifting Effortless
              </h2>
              <div className="w-12 h-0.5 bg-gold-light mb-6 mx-auto lg:mx-0" />
              <p className="font-sans text-cream-400 text-base leading-relaxed mb-8 max-w-lg text-justify">
                From executive gifts to bulk procurement, we help businesses source, curate, and deliver with ease. We've handled orders for 10 to 500 recipients and always show up on time.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={getWhatsAppURL(WHATSAPP_MESSAGES.corporate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  id="corporate-whatsapp-cta"
                >
                  <MessageCircle size={16} />
                  Talk to Us About Corporate Orders
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
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-[#721C37]/30">
                <img
                  src={corporateImg}
                  alt="Corporate gift boxes arranged elegantly"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#721C37]/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Client Stories"
            heading="What Our Clients Say"
            subtext="Here's what some of the people we've served have to say."
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
      <section className="py-20 lg:py-24 bg-cream-200">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            heading="Frequently Asked Questions"
            align="center"
            className="mb-12"
          />

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-cream-300/60">
            <FAQAccordion faqs={FAQS} limit={5} />
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#721C37] hover:text-[#521226] transition-colors group"
              id="faq-preview-cta"
            >
              View All FAQs
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-4xl text-[#721C37] mb-4">Let's get started</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-700 leading-tight mb-5">
              Need Something? Let Us Handle It.
            </h2>
            <div className="w-12 h-0.5 bg-gold-DEFAULT mx-auto mb-6" />
            <p className="font-sans text-charcoal-500 text-base sm:text-lg leading-relaxed mb-10">
              Tell us what you need and we'll take care of the rest. Whether it's a single gift or a full corporate order, nothing is too small or too big for us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-10 py-4 text-base" id="final-cta-btn">
                Get Started
                <ArrowRight size={18} />
              </Link>
              <a
                href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-10 py-4 text-base"
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
