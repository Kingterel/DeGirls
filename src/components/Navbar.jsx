import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, MessageCircle, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG, getWhatsAppURL } from '../config/site.js';
import artmeeBrandImg from '../assets/artmee_brand.jpg';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Our Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-cream-300/70'
            : 'bg-cream-100/90 backdrop-blur-sm'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-[76px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-brand-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-[#F6EFE6]">
                <img
                  src={artmeeBrandImg}
                  alt="Artmee Limited Crest"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <div className="font-serif text-lg font-bold tracking-tight text-brand-navy leading-tight">
                  Artmee Limited
                </div>
                <div className="hidden sm:block font-sans text-[9px] tracking-[0.2em] text-brand-coral font-bold uppercase leading-none mt-0.5">
                  Bespoke Shopping & Gifting
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative font-sans text-sm px-4 py-2 rounded-full transition-all duration-200 ${isActive
                      ? 'text-brand-coral bg-brand-coral-soft font-bold shadow-2xs'
                      : 'text-charcoal-700 font-medium hover:text-brand-coral hover:bg-cream-200/60'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-coral rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3.5">
              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-charcoal-600 font-sans border border-cream-300 bg-white/80 rounded-full px-3.5 py-1.5 shadow-2xs">
                <MapPin size={13} className="text-brand-coral flex-shrink-0" />
                <span className="font-medium">{SITE_CONFIG.location}</span>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 px-5 text-xs shadow-md shadow-brand-coral/20"
                id="navbar-whatsapp-cta"
              >
                <MessageCircle size={14} />
                Get in Touch
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-charcoal-600 hover:bg-cream-300 transition-colors"
              aria-label="Open navigation menu"
              id="mobile-menu-open"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-charcoal-700/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-xs bg-cream-100 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300">
                <Link to="/" className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-brand-gold/40 shadow-sm bg-[#F6EFE6]">
                    <img
                      src={artmeeBrandImg}
                      alt="Artmee Limited Crest"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold text-brand-navy block leading-tight">Artmee Limited</span>
                    <span className="font-sans text-[8px] uppercase tracking-wider text-brand-coral font-bold">Bespoke Concierge</span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-cream-300 transition-colors"
                  aria-label="Close navigation menu"
                  id="mobile-menu-close"
                >
                  <X size={20} className="text-charcoal-600" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1.5 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center font-sans text-base font-medium px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                        ? 'bg-brand-navy text-white font-semibold shadow-sm'
                        : 'text-charcoal-700 hover:bg-cream-200'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-6 border-t border-cream-300 space-y-3 bg-cream-50">
                <div className="flex items-center gap-2 text-xs text-charcoal-500 font-sans mb-3">
                  <MapPin size={13} className="text-brand-coral" />
                  <span>{SITE_CONFIG.location}</span>
                </div>
                <a
                  href={getWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center shadow-md shadow-green-500/20"
                  id="mobile-whatsapp-cta"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
