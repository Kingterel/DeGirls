import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Heart, Star, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import promiseImg from '../assets/promise.jpg';
import aboutHeroEmblem from '../assets/about_hero_emblem.jpg';
import { getWhatsAppURL, WHATSAPP_MESSAGES, SITE_CONFIG } from '../config/site.js';

const VALUES = [
  {
    icon: Heart,
    title: 'Built on Care',
    desc: 'Every order is handled with personal attention and genuine care. We treat your requests as if they were our own.',
  },
  {
    icon: Star,
    title: 'Quality First',
    desc: 'We never compromise on quality. Every vendor is vetted, every product is inspected, every delivery is checked.',
  },
  {
    icon: Users,
    title: 'People-Centric',
    desc: 'You are not an order number. We remember your preferences, your occasions, and your style.',
  },
];

export default function About() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-[#FAF3EC] pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-cream-300/70 relative overflow-hidden">
        {/* Decorative subtle blush gradient corner */}
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr from-[#E8C5D0]/35 to-transparent blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#721C37]" />
                <span className="text-[#721C37] text-xs font-semibold tracking-[0.2em] uppercase">
                  ABOUT US
                </span>
                <span className="w-8 h-[2px] bg-[#721C37]" />
              </div>

              {/* Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-[#721C37] leading-[1.12] mb-6 font-bold text-center">
                We exist to make your<br className="hidden sm:inline" /> life easier.
              </h1>

              {/* Body Copy */}
              <p className="font-sans text-charcoal-600 text-base sm:text-lg leading-relaxed mb-5 max-w-xl text-justify">
                Artmee Limited was founded on a simple belief: busy people in Abuja deserve a trusted partner who can handle all their shopping and gifting so they can focus on what truly matters.
              </p>
              <p className="font-sans text-charcoal-600 text-base leading-relaxed mb-7 max-w-xl text-justify">
                We are not a generic online store. We are a personal service, attentive, responsive, and genuinely invested in getting it right every single time.
              </p>

              {/* Heart Divider: Gold rules flanking burgundy heart */}
              <div className="flex items-center justify-center gap-3 w-48 mx-auto">
                <div className="flex-1 h-[1.5px] bg-[#C6A15B]" />
                <Heart size={14} className="text-[#721C37] fill-[#721C37] flex-shrink-0" />
                <div className="flex-1 h-[1.5px] bg-[#C6A15B]" />
              </div>
            </motion.div>

            {/* Right Artwork: Authentic Brand Monogram & Motto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cream-300/80 bg-white/50 p-2 sm:p-3 max-w-lg w-full">
                <img
                  src={aboutHeroEmblem}
                  alt="Artmee Limited - We find it, We source it, We verify it, We negotiate it · We Curate it · We package it · We deliver it"
                  className="w-full h-auto object-contain rounded-2xl block"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl"
            >
              <img
                src={promiseImg}
                alt="A satisfied artmee limited Cart client"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="font-script text-3xl text-[#721C37] mb-4 text-center">Our Story</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-700 leading-tight mb-6 text-center">
                Started in Abuja, built for Abuja.
              </h2>
              <div className="space-y-4 font-sans text-charcoal-500 text-base leading-relaxed text-justify">
                <p>
                  We noticed a gap. People in Abuja were overwhelmed. Juggling demanding careers, families, and social obligations with barely enough time to think about shopping, let alone gifting or sourcing for events.
                </p>
                <p>
                  So we created Artmee Limited, a service built to handle all your shopping and gifting needs. From everyday essentials to milestone celebrations, we take it off your plate.
                </p>
                <p>
                  Since launching, we've helped hundreds of clients across Abuja. Executives, mothers, newlyweds, event planners, businesses. All getting exactly what they need, without the stress.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  'Hundreds of satisfied clients served',
                  'Same-day delivery within Abuja',
                  'Corporate partnerships across the FCT',
                  'Every budget and every occasion',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 font-sans text-sm text-charcoal-600">
                    <CheckCircle size={16} className="text-[#721C37] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-200">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3 text-center">Our Values</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-700 text-center">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-cream-300/60 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#FAF0F3] rounded-xl flex items-center justify-center mb-5 mx-auto">
                  <val.icon size={22} className="text-[#721C37]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-charcoal-700 mb-3 text-center">{val.title}</h3>
                <p className="font-sans text-sm text-charcoal-500 leading-relaxed text-justify">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#721C37] to-[#4A0E20] text-center">
        <div className="container-custom max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-100 leading-tight mb-5 text-center">
              Ready to experience the difference?
            </h2>
            <p className="font-sans text-cream-400 text-sm sm:text-base leading-relaxed mb-8 text-center sm:text-justify max-w-lg mx-auto">
              Join hundreds of clients across Abuja who trust Artmee Limited with their shopping and gifting needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services" className="btn-ghost" id="about-services-cta">
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="about-whatsapp-cta"
              >
                <MessageCircle size={16} />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
