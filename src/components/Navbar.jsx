import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, MessageCircle, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG, getWhatsAppURL, WHATSAPP_MESSAGES } from '../config/site.js';
import artmeeLogo from '../assets/artmee_logo_header.png';

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
            ? 'bg-[#FEF7EF]/95 backdrop-blur-md shadow-sm border-b border-cream-300/60'
            : 'bg-[#FEF7EF]'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-[74px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <img
                src={artmeeLogo}
                alt="Artmee Limited"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative font-sans text-sm font-medium px-3.5 py-2 transition-colors duration-200 ${isActive
                      ? 'text-[#721C37] font-semibold'
                      : 'text-charcoal-600 hover:text-[#721C37]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#721C37] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-charcoal-600 font-sans border border-cream-400 bg-white/70 rounded-full px-3.5 py-1.5 shadow-2xs">
                <MapPin size={13} className="text-[#721C37] flex-shrink-0" />
                <span>Abuja, Nigeria</span>
              </div>

              {/* Get in Touch CTA */}
              <a
                href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#721C37] hover:bg-[#5E1730] text-white font-sans text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                id="navbar-whatsapp-cta"
              >
                <MessageCircle size={14} />
                <span>Get in Touch</span>
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
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={artmeeLogo}
                    alt="Artmee Limited"
                    className="h-8 w-auto object-contain"
                  />
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
                        ? 'bg-[#721C37] text-cream-100'
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
                  <MapPin size={13} className="text-[#721C37]" />
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
