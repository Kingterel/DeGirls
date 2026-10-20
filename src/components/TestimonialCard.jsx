import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-white rounded-2xl p-8 border border-cream-300/60 shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div className="w-10 h-10 bg-[#FAF0F3] rounded-xl flex items-center justify-center">
        <Quote size={18} className="text-[#721C37]" strokeWidth={1.5} />
      </div>

      {/* Quote Text */}
      <blockquote className="font-serif text-charcoal-600 text-base sm:text-lg leading-relaxed italic flex-1">
        "{testimonial.quote}"
      </blockquote>

      {/* Divider */}
      <div className="w-10 h-0.5 bg-gold-DEFAULT" />

      {/* Attribution */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#721C37] to-[#4A0E20] flex items-center justify-center flex-shrink-0">
          <span className="font-sans text-xs font-semibold text-cream-100">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-charcoal-700">
            {testimonial.name}
          </p>
          <p className="font-sans text-xs text-charcoal-400">
            {testimonial.title} · {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
