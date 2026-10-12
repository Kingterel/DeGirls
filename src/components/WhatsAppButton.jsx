import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppURL, WHATSAPP_MESSAGES } from '../config/site.js';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppURL(WHATSAPP_MESSAGES.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      id="floating-whatsapp-btn"
      className="fixed bottom-6 right-5 z-40 flex items-center gap-2.5 bg-[#25D366] text-white rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:bg-[#1da851] transition-all duration-300 group overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon always visible */}
      <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
        <MessageCircle size={24} strokeWidth={1.8} />
      </div>
      {/* Label reveals on hover (desktop only) */}
      <div className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-300 ease-out pr-0 group-hover:pr-4 whitespace-nowrap hidden sm:block">
        <span className="font-sans text-sm font-medium">Chat on WhatsApp</span>
      </div>
    </motion.a>
  );
}
