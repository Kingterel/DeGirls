import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
    >
      <Link
        to={`/services/${service.id}`}
        className="card-service group block h-full"
        id={`service-card-${service.id}`}
        aria-label={`Learn more about ${service.name}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          {/* Number Badge */}
          <div className="absolute top-3 left-3 z-10 w-7 h-7 bg-brand-navy text-white rounded-full flex items-center justify-center text-xs font-sans font-bold shadow-md">
            {index + 1}
          </div>

          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 bg-white">
          <h3 className="font-serif text-[18px] font-bold text-charcoal-900 mb-2 group-hover:text-brand-coral transition-colors duration-200">
            {service.name}
          </h3>
          <p className="font-sans text-sm text-charcoal-600 leading-relaxed mb-4">
            {service.shortDescription}
          </p>
          <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-brand-coral group-hover:gap-2.5 transition-all duration-200">
            <span>Explore Service</span>
            <ArrowRight size={14} strokeWidth={2.5} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
