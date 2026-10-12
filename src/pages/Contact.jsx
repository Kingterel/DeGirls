import { MapPin, MessageCircle, Mail, Clock } from 'lucide-react';

// Inline SVG social icons
const InstagramIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>);
const TwitterIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
const FacebookIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>);
import { motion } from 'framer-motion';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { SITE_CONFIG, getWhatsAppURL, WHATSAPP_MESSAGES } from '../config/site.js';

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Location',
    value: SITE_CONFIG.location,
    href: null,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    href: getWhatsAppURL(WHATSAPP_MESSAGES.default),
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sun: 7am – 7pm',
    href: null,
  },
];

export default function Contact() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-cream-200 border-b border-cream-300 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="container-custom text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow mb-4">Contact Us</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-700 leading-tight mb-5">
              Tell Us What You Need
            </h1>
            <div className="w-12 h-0.5 bg-gold-DEFAULT mx-auto mb-5" />
            <p className="font-sans text-charcoal-500 text-base leading-relaxed">
              Fill out the form below and we'll get back to you shortly. For the fastest response, send us a message on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left — Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-charcoal-700 mb-6">Get in Touch</h2>
                  <div className="space-y-5">
                    {CONTACT_INFO.map((item) => {
                      const Content = (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                            <item.icon size={18} className="text-green-600" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="font-sans text-xs text-charcoal-400 font-medium uppercase tracking-wider mb-0.5">
                              {item.label}
                            </p>
                            <p className="font-sans text-sm text-charcoal-700">{item.value}</p>
                          </div>
                        </div>
                      );

                      return item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block hover:opacity-80 transition-opacity"
                          id={`contact-${item.label.toLowerCase()}`}
                        >
                          {Content}
                        </a>
                      ) : (
                        <div key={item.label}>{Content}</div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="font-sans text-xs text-charcoal-400 font-medium uppercase tracking-wider mb-4">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: InstagramIcon, href: SITE_CONFIG.instagram, label: 'Instagram' },
                      { icon: TwitterIcon, href: SITE_CONFIG.twitter, label: 'Twitter' },
                      { icon: FacebookIcon, href: SITE_CONFIG.facebook, label: 'Facebook' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        id={`contact-${label.toLowerCase()}`}
                        className="w-10 h-10 rounded-xl border border-cream-400 bg-white flex items-center justify-center text-charcoal-500 hover:bg-green-600 hover:text-cream-100 hover:border-green-600 transition-all duration-200"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp direct */}
                <a
                  href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                  id="contact-whatsapp-direct"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-cream-300/60">
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-700 mb-2">
                  Send an Enquiry
                </h2>
                <p className="font-sans text-sm text-charcoal-400 mb-8">
                  Fields marked with <span className="text-red-500">*</span> are required.
                </p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
