import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, MessageCircle, X, Menu, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG, getWhatsAppURL } from '../config/site.js';

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
            ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-cream-300/60'
            : 'bg-cream-100'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:scale-105">
                <Gift size={18} className="text-cream-100" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-serif text-base font-semibold text-green-600 leading-tight">
                  Artmee Limited
                </div>
                <div className="hidden sm:block font-sans text-[9px] tracking-[0.15em] text-charcoal-400 uppercase leading-none">
                  Shop · Gift · Source · Deliver
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative font-sans text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${isActive
                      ? 'text-green-600'
                      : 'text-charcoal-600 hover:text-green-600 hover:bg-green-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-green-600 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-sans border border-cream-400 rounded-full px-3 py-1.5">
                <MapPin size={13} className="text-green-600 flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 text-xs"
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
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <Gift size={16} className="text-cream-100" strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-sm font-semibold text-green-600">Artmee Limited</span>
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
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center font-sans text-base font-medium px-4 py-3.5 rounded-xl transition-all duration-200 ${isActive
                        ? 'bg-green-600 text-cream-100'
                        : 'text-charcoal-600 hover:bg-cream-300'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-6 border-t border-cream-300 space-y-3">
                <div className="flex items-center gap-2 text-xs text-charcoal-500 font-sans mb-4">
                  <MapPin size={13} className="text-green-600" />
                  <span>{SITE_CONFIG.location}</span>
                </div>
                <a
                  href={getWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                  id="mobile-whatsapp-cta"
                >
                  <MessageCircle size={16} />
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
