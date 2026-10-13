// Site-wide configuration

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Sign up at https://emailjs.com, then fill in your credentials below.
export const EMAILJS_CONFIG = {
  serviceId:  'service_o61ro0i',
  templateId: 'template_4afjo1c',
  publicKey:  'SbwjKMxKi4fJME0Vs',
};
// ─────────────────────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: 'Artmee Limited',
  tagline: 'Your personal artmee limited for shopping and gifting in Nigeria.',
  location: 'Abuja, Nigeria',
  whatsappNumber: '+2348037648122',
  email: 'kyeluwa.terungwa@gmail.com',
  instagram: 'https://instagram.com/artmeelimited',
  tiktok: 'https://tiktok.com/@artmeelimited',
  twitter: 'https://twitter.com/artmeelimited',
  facebook: 'https://facebook.com/artmeelimited',
};

export const WHATSAPP_MESSAGES = {
  default: `Hello Artmee Limited, I would like to make an enquiry about your services.`,
  marketRun: `Hello Artmee Limited, I would like to place a Market Run order.`,
  findIt: `Hello Artmee Limited, I need help finding a specific item.`,
  eventEdit: `Hello Artmee Limited, I need sourcing assistance for an event.`,
  bespokeBox: `Hello Artmee Limited, I would like to order a Bespoke Gift Box.`,
  homeOffice: `Hello Artmee Limited, I need Home & Office Sourcing assistance.`,
  corporate: `Hello Artmee Limited, I would like to discuss Corporate Procurement.`,
};

export const getWhatsAppURL = (message = WHATSAPP_MESSAGES.default) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encoded}`;
};
