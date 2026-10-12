// Site-wide configuration
export const SITE_CONFIG = {
  name: 'Artmee Limited',
  tagline: 'Your personal concierge for shopping and gifting in Nigeria.',
  location: 'Abuja, Nigeria',
  whatsappNumber: '+2349012345678', // Replace with actual number
  email: 'hello@conciergecart.ng',
  instagram: 'https://instagram.com/conciergecart',
  tiktok: 'https://tiktok.com/@conciergecart',
  twitter: 'https://twitter.com/conciergecart',
  facebook: 'https://facebook.com/conciergecart',
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
