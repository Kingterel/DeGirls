import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-center items-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span
          className={`section-eyebrow ${
            light ? 'text-brand-gold-light' : 'text-brand-coral'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`section-heading text-3xl sm:text-4xl lg:text-[42px] max-w-2xl ${
          light ? 'text-white' : 'text-charcoal-900'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`section-subtext text-base sm:text-lg max-w-xl ${
            light ? 'text-cream-400' : 'text-charcoal-400'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
