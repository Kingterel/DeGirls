import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { getServiceById, SERVICES } from '../data/services.js';
import { getWhatsAppURL } from '../config/site.js';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = getServiceById(serviceId);

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = SERVICES.findIndex((s) => s.id === serviceId);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <main className="overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="bg-cream-200 border-b border-cream-300 pt-20 lg:pt-[88px]">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-xs font-sans text-charcoal-400">
            <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-green-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-charcoal-600">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cream-200 pb-0">
        <div className="container-custom py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-600 text-cream-100 px-4 py-1.5 rounded-full text-xs font-sans font-semibold mb-6">
                Service {service.number}
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[50px] text-charcoal-700 leading-tight mb-5">
                {service.name}
              </h1>
              <div className="w-12 h-0.5 bg-gold-DEFAULT mb-6" />
              <p className="font-sans text-charcoal-500 text-base sm:text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary" id={`${service.id}-enquiry-cta`}>
                  Place an Enquiry
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={getWhatsAppURL(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  id={`${service.id}-whatsapp-cta`}
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-14">
              {/* What We Help With */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-700 mb-6">
                  What We Can Help With
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-cream-200 rounded-xl px-4 py-3.5"
                    >
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-charcoal-600 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* How It Works */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-700 mb-6">
                  How It Works
                </h2>
                <div className="space-y-5">
                  {service.howItWorks.map((step, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="w-9 h-9 rounded-xl bg-green-600 text-cream-100 flex items-center justify-center flex-shrink-0 font-serif font-semibold text-base">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="pt-1.5">
                        <p className="font-sans text-sm sm:text-base text-charcoal-600 leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Example Requests */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-700 mb-6">
                  Example Requests
                </h2>
                <div className="space-y-4">
                  {service.exampleRequests.map((req, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl px-5 py-4 border border-cream-300 shadow-sm"
                    >
                      <p className="font-serif text-base text-charcoal-600 italic">{req}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Enquiry CTA */}
                <div className="bg-green-600 rounded-3xl p-7 text-cream-100">
                  <h3 className="font-serif text-xl mb-3">Ready to get started?</h3>
                  <p className="font-sans text-sm text-cream-400 leading-relaxed mb-6">
                    Send us your request and we'll take it from there.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center btn-ghost justify-center mb-3"
                    id={`${service.id}-sidebar-cta`}
                  >
                    Send an Enquiry
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href={getWhatsAppURL(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#25D366] hover:bg-[#1da851] text-white py-3 px-5 rounded-full text-sm font-medium transition-colors"
                    id={`${service.id}-sidebar-whatsapp`}
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Next Service */}
                <div className="bg-cream-200 rounded-2xl p-5 border border-cream-300">
                  <p className="font-sans text-xs text-charcoal-400 font-medium uppercase tracking-wider mb-3">
                    Also Explore
                  </p>
                  <Link
                    to={`/services/${nextService.id}`}
                    className="flex items-start gap-4 group"
                    id={`${service.id}-next-service`}
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={nextService.image}
                        alt={nextService.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-charcoal-700 group-hover:text-green-600 transition-colors">
                        {nextService.name}
                      </p>
                      <p className="font-sans text-xs text-charcoal-400 mt-0.5 leading-snug">
                        {nextService.shortDescription}
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Back to Services */}
                <Link
                  to="/services"
                  className="flex items-center gap-2 font-sans text-sm text-charcoal-500 hover:text-green-600 transition-colors group"
                  id={`${service.id}-back-services`}
                >
                  <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                  Back to All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-cream-200 border-t border-cream-300">
        <div className="container-custom text-center max-w-xl">
          <h2 className="font-serif text-3xl text-charcoal-700 mb-4">
            Have a specific request?
          </h2>
          <p className="font-sans text-charcoal-500 text-sm leading-relaxed mb-8">
            No request is too specific. Tell us exactly what you need and we'll make it happen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary" id={`${service.id}-bottom-enquiry-cta`}>
              Place an Enquiry
              <ArrowRight size={16} />
            </Link>
            <a
              href={getWhatsAppURL(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              id={`${service.id}-bottom-whatsapp-cta`}
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
