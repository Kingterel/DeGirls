import { Link } from 'react-router-dom';
import { Gift, MapPin, Mail, MessageCircle, ArrowRight } from 'lucide-react';

// Simple inline SVG social icons
const InstagramIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.001 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 17.001 22 12z" />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2v6.5a3.5 3.5 0 1 0 0 7V22a10 10 0 1 1 0-20z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.52 3.48A11.99 11.99 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.5 5.89L0 24l6.28-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12a11.99 11.99 0 0 0-3.48-8.52z" />
  </svg>
);

import { SITE_CONFIG, getWhatsAppURL } from '../config/site.js';


const FOOTER_SERVICES = [
  { label: 'The Market Run', path: '/services/market-run' },
  { label: 'Find It For Me', path: '/services/find-it-for-me' },
  { label: 'The Event Edit', path: '/services/event-edit' },
  { label: 'The Bespoke Box', path: '/services/bespoke-box' },
  { label: 'Home & Office', path: '/services/home-office-sourcing' },
  { label: 'Corporate Procurement', path: '/services/corporate-procurement' },
];

const FOOTER_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#7A1F3D] text-cream-200">
      {/* Main Footer Grid */}
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-10 h-10 bg-cream-100/10 border border-cream-200/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-cream-100/20">
                <Gift size={20} className="text-cream-100" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-serif text-base font-semibold text-cream-100 leading-tight">
                  Artmee Limited
                </div>
              </div>
            </Link>
            <p className="font-sans text-sm text-cream-400 leading-relaxed mb-6">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream-200/20 rounded-lg flex items-center justify-center text-cream-400 hover:text-cream-100 hover:border-cream-200/50 transition-all duration-200"
                aria-label="Instagram"
                id="footer-instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE_CONFIG.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream-200/20 rounded-lg flex items-center justify-center text-cream-400 hover:text-cream-100 hover:border-cream-200/50 transition-all duration-200"
                aria-label="TikTok"
                id="footer-tiktok"
              >
                <TikTokIcon />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream-200/20 rounded-lg flex items-center justify-center text-cream-400 hover:text-cream-100 hover:border-cream-200/50 transition-all duration-200"
                aria-label="Facebook"
                id="footer-facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-cream-100 mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-cream-400 hover:text-cream-100 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-cream-100 mb-5 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="font-sans text-sm text-cream-400 hover:text-cream-100 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-cream-100 mb-5 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream-400 font-sans">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold-light" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li>
                <a
                  href={getWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-cream-400 hover:text-cream-100 transition-colors font-sans"
                  id="footer-whatsapp"
                >
                  <MessageCircle size={15} className="flex-shrink-0 text-gold-light" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-cream-400 hover:text-cream-100 transition-colors font-sans"
                  id="footer-email"
                >
                  <Mail size={15} className="flex-shrink-0 text-gold-light" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

            <a
              href={getWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 btn-ghost text-sm py-2.5 px-5"
              id="footer-cta-whatsapp"
            >
              <MessageCircle size={15} />
              Start an Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-200/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-cream-500 text-center sm:text-left">
            Artmee Limited © {year}. All rights reserved.
          </p>
          <p className="font-script text-base text-gold-light">
            We're here for you ♡
          </p>
        </div>
      </div>
    </footer>
  );
}
