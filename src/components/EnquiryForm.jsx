import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, X, Upload, ChevronDown, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../data/services.js';
import { getWhatsAppURL, EMAILJS_CONFIG } from '../config/site.js';

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  description: '',
  budget: '',
  deliveryDate: '',
  deliveryLocation: '',
  notes: '',
  imageFile: null,
};

const ERRORS_INIT = {};

function validateForm(data) {
  const errors = {};
  if (!data.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!data.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(data.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email address.';
  if (!data.service) errors.service = 'Please select a service.';
  if (!data.description.trim()) errors.description = 'Please describe what you need.';
  if (!data.deliveryLocation.trim())
    errors.deliveryLocation = 'Please provide your delivery location.';
  return errors;
}

export default function EnquiryForm({ preselectedService = '' }) {
  const [form, setForm] = useState({ ...INITIAL_FORM, service: preselectedService });
  const [errors, setErrors] = useState(ERRORS_INIT);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (file) => {
    if (file && file.type.startsWith('image/')) {
      setForm((prev) => ({ ...prev, imageFile: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorEl = document.querySelector('[data-error="true"]');
      if (firstErrorEl) firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setLoading(true);
    setEmailError(false);
    const service = SERVICES.find((s) => s.id === form.service);
    const templateParams = {
      from_name:         form.fullName,
      from_phone:        form.phone,
      from_email:        form.email || 'Not provided',
      service_name:      service?.name || form.service,
      description:       form.description,
      budget:            form.budget || 'Not specified',
      delivery_date:     form.deliveryDate || 'Flexible',
      delivery_location: form.deliveryLocation,
      notes:             form.notes || 'None',
      image_uploaded:    form.imageFile
        ? `Yes — filename: ${form.imageFile.name}. Ask the customer to send it via WhatsApp.`
        : 'No',
    };
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      );
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setEmailError(true);
    } finally {
      setLoading(false);
    }
  };

  const buildWhatsAppMessage = () => {
    const service = SERVICES.find((s) => s.id === form.service);
    const imageNote = form.imageFile
      ? `\nReference Image: I have uploaded a reference image (${form.imageFile.name}). I will send it here now.`
      : '';
    return `Hello Artmee Limited,\n\nI would like to make an enquiry.\n\nName: ${form.fullName}\nPhone: ${form.phone}\nService: ${service?.name || form.service}\nDetails: ${form.description}\nBudget: ${form.budget || 'Not specified'}\nDelivery Date: ${form.deliveryDate || 'Flexible'}\nDelivery Location: ${form.deliveryLocation}\nNotes: ${form.notes || 'None'}${imageNote}`;
  };

  const resetForm = () => {
    setForm({ ...INITIAL_FORM, service: preselectedService });
    setErrors(ERRORS_INIT);
    setSubmitted(false);
    setEmailError(false);
  };

  const FieldError = ({ name }) =>
    errors[name] ? (
      <p className="mt-1.5 text-xs font-sans text-red-500" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-6" id="enquiry-form">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div data-error={!!errors.fullName || undefined}>
            <label htmlFor="fullName" className="label-text">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Adaeze Okonkwo"
              value={form.fullName}
              onChange={handleChange}
              className={`input-field ${errors.fullName ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
            />
            <FieldError name="fullName" />
          </div>

          <div data-error={!!errors.phone || undefined}>
            <label htmlFor="phone" className="label-text">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+234 901 234 5678"
              value={form.phone}
              onChange={handleChange}
              className={`input-field ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
            />
            <FieldError name="phone" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div data-error={!!errors.email || undefined}>
            <label htmlFor="email" className="label-text">
              Email Address <span className="text-charcoal-300 font-normal">(optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
            />
            <FieldError name="email" />
          </div>

          <div data-error={!!errors.service || undefined}>
            <label htmlFor="service" className="label-text">
              Service <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`select-field pr-10 ${errors.service ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
              >
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none"
              />
            </div>
            <FieldError name="service" />
          </div>
        </div>

        {/* Description */}
        <div data-error={!!errors.description || undefined}>
          <label htmlFor="description" className="label-text">
            What do you need? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Describe what you're looking for. The more detail you give us, the better!"
            value={form.description}
            onChange={handleChange}
            className={`input-field resize-none ${errors.description ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
          />
          <FieldError name="description" />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="budget" className="label-text">
              Budget <span className="text-charcoal-300 font-normal">(optional)</span>
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              placeholder="e.g. ₦50,000 – ₦100,000"
              value={form.budget}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="deliveryDate" className="label-text">
              Preferred Delivery Date <span className="text-charcoal-300 font-normal">(optional)</span>
            </label>
            <input
              id="deliveryDate"
              name="deliveryDate"
              type="date"
              value={form.deliveryDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="input-field"
            />
          </div>
        </div>

        {/* Delivery Location */}
        <div data-error={!!errors.deliveryLocation || undefined}>
          <label htmlFor="deliveryLocation" className="label-text">
            Delivery Location <span className="text-red-500">*</span>
          </label>
          <input
            id="deliveryLocation"
            name="deliveryLocation"
            type="text"
            placeholder="e.g. Maitama, Abuja"
            value={form.deliveryLocation}
            onChange={handleChange}
            className={`input-field ${errors.deliveryLocation ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
          />
          <FieldError name="deliveryLocation" />
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="label-text">
            Additional Notes <span className="text-charcoal-300 font-normal">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Any other details, special instructions, or preferences…"
            value={form.notes}
            onChange={handleChange}
            className="input-field resize-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="label-text">
            Reference Image <span className="text-charcoal-300 font-normal">(optional)</span>
          </label>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFileChange(e.dataTransfer.files[0]); }}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl px-6 py-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200 ${dragOver
              ? 'border-brand-coral bg-brand-coral-soft'
              : form.imageFile
                ? 'border-brand-coral-border bg-brand-coral-soft/50'
                : 'border-cream-300 hover:border-brand-coral hover:bg-cream-200/50'
              }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e.target.files[0])}
              id="image-upload"
            />
            {form.imageFile ? (
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-brand-coral" />
                <span className="font-sans text-sm text-brand-coral font-bold">
                  {form.imageFile.name}
                </span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setForm((p) => ({ ...p, imageFile: null })); }}
                  className="text-charcoal-400 hover:text-red-500 transition-colors"
                  aria-label="Remove image"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="w-10 h-10 bg-cream-300 rounded-xl flex items-center justify-center">
                  <Upload size={18} className="text-charcoal-400" />
                </div>
                <div className="text-center">
                  <p className="font-sans text-sm font-medium text-charcoal-600">
                    Drop an image here or click to upload
                  </p>
                  <p className="font-sans text-xs text-charcoal-400 mt-1">
                    Helpful if you're looking for a specific item (PNG, JPG, WEBP)
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Email error banner */}
        {emailError && (
          <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
            <p className="font-sans text-sm text-red-700">
              Sorry, we couldn't send your enquiry by email. Please try again or{' '}
              <a
                href={getWhatsAppURL(buildWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                reach us on WhatsApp
              </a>.
            </p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full sm:w-auto justify-center px-10 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
          id="enquiry-submit-btn"
        >
          {loading ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-cream-100/30 border-t-cream-100 rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            'Send Request →'
          )}
        </button>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="success-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-700/60 backdrop-blur-sm"
            onClick={resetForm}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl p-8 sm:p-12 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-brand-coral-soft border border-brand-coral-border/60 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-brand-coral" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-700 mb-3">
                Request Received!
              </h3>
              <p className="font-sans text-charcoal-500 text-sm sm:text-base leading-relaxed mb-8">
                Thank you, <strong>{form.fullName.split(' ')[0]}</strong>. We've received your enquiry and will be in touch shortly. For faster response, reach us on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppURL(buildWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center"
                  id="success-modal-whatsapp"
                >
                  Continue on WhatsApp
                </a>
                <button
                  onClick={resetForm}
                  className="btn-secondary justify-center"
                  id="success-modal-close"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
