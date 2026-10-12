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
          <div className="absolute top-3 left-3 z-10 w-7 h-7 bg-green-600 text-cream-100 rounded-full flex items-center justify-center text-xs font-sans font-semibold">
            {index + 1}
          </div>

          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif text-[17px] font-semibold text-charcoal-700 mb-1.5 group-hover:text-green-600 transition-colors duration-200">
            {service.name}
          </h3>
          <p className="font-sans text-sm text-charcoal-400 leading-relaxed mb-4">
            {service.shortDescription}
          </p>
          <div className="flex items-center gap-1 text-green-600 group-hover:gap-2 transition-all duration-200">
            <ArrowRight size={16} strokeWidth={2} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
