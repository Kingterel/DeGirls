import heroImg from '../assets/hero.jpg';
import marketRunImg from '../assets/service_market_run.jpg';
import findItImg from '../assets/service_find_it.jpg';
import eventEditImg from '../assets/service_event_edit.jpg';
import bespokeBoxImg from '../assets/service_bespoke_box.jpg';
import corporateImg from '../assets/corporate_gift.jpg';
import { WHATSAPP_MESSAGES } from '../config/site.js';

export const SERVICES = [
  {
    id: 'market-run',
    number: '01',
    name: 'The Market Run',
    shortDescription: 'Groceries, household and office items delivered to you.',
    fullDescription:
      'Let us handle your grocery shopping and household supply runs so you can focus on what matters most. We source fresh produce, pantry staples, and household essentials from trusted markets and supermarkets.',
    image: marketRunImg,
    items: [
      'Fresh produce and groceries',
      'Pantry and cooking staples',
      'Household cleaning supplies',
      'Office stationery and essentials',
      'Personal care items',
      'Baby and family essentials',
    ],
    exampleRequests: [
      '"Get me a week\'s worth of groceries from the market."',
      '"I need office supplies for my team of 10."',
      '"Restock my kitchen pantry before the weekend."',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.marketRun,
    howItWorks: [
      'Send us your shopping list via WhatsApp or the enquiry form.',
      'We confirm pricing and expected delivery timeframe.',
      'We shop from trusted vendors and deliver to your door.',
    ],
  },
  {
    id: 'find-it-for-me',
    number: '02',
    name: 'Find It For Me',
    shortDescription: 'We locate any item from a photo, name, or description.',
    fullDescription:
      'Can\'t find that specific item? Share a photo, name, or description with us and we\'ll track it down. From rare ingredients to hard-to-find products, we locate, verify quality, and deliver.',
    image: findItImg,
    items: [
      'Specific branded products',
      'Rare or imported items',
      'Hard-to-find local goods',
      'Specific clothing or accessories',
      'Tech gadgets and electronics',
      'Specialty foods and ingredients',
    ],
    exampleRequests: [
      '"Find me this exact bag from the photo I sent."',
      '"I need this specific brand of olive oil, can\'t find it anywhere."',
      '"Track down a particular piece of ankara fabric for me."',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.findIt,
    howItWorks: [
      'Share a photo, name, link, or description of the item.',
      'We search our vendor network to locate the exact item.',
      'We confirm availability, price, and deliver to you.',
    ],
  },
  {
    id: 'event-edit',
    number: '03',
    name: 'The Event Edit',
    shortDescription: 'Sourcing for weddings, parties, showers and conferences.',
    fullDescription:
      'Planning an event? We handle all the sourcing so your occasion is perfectly outfitted. From decorations and catering supplies to custom favours and venue items, we take care of it all.',
    image: eventEditImg,
    items: [
      'Wedding and engagement decor items',
      'Baby shower and birthday supplies',
      'Conference and corporate event materials',
      'Custom event favours and packaging',
      'Floral arrangements and table decor',
      'Catering supplies and serveware',
    ],
    exampleRequests: [
      '"I need sourcing for a baby shower for 60 guests."',
      '"Help me find everything for a corporate conference."',
      '"I\'m planning a bridal shower and need a full supply list sourced."',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.eventEdit,
    howItWorks: [
      'Tell us about your event, the type, date, and guest count.',
      'We create a sourcing plan and share options with you.',
      'We procure and deliver all items ahead of your event.',
    ],
  },
  {
    id: 'bespoke-box',
    number: '04',
    name: 'The Bespoke Box',
    shortDescription: 'Curated gift hampers made for any occasion and budget.',
    fullDescription:
      'Our signature gift hampers are thoughtfully curated for any occasion. We handpick premium products, package them beautifully, and deliver with a personal touch every single time.',
    image: bespokeBoxImg,
    items: [
      'Birthday and anniversary hampers',
      'Corporate gift sets',
      'New baby and new home gifts',
      'Festive and holiday hampers',
      'Just-because gift boxes',
      'Luxury skin care and wellness sets',
    ],
    exampleRequests: [
      '"Create a birthday hamper for my mum, budget ₦30,000."',
      '"I need 20 corporate Christmas hampers."',
      '"A luxury box for a new mum, very special and premium."',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.bespokeBox,
    howItWorks: [
      'Tell us the occasion, recipient, and your budget.',
      'We curate options and share a preview for your approval.',
      'We package beautifully and deliver on your schedule.',
    ],
  },
  {
    id: 'home-office-sourcing',
    number: '05',
    name: 'Home and Office Sourcing',
    shortDescription: 'Full setup for kitchen, decor, pantry and office supplies.',
    fullDescription:
      'Moving into a new home or setting up an office? We handle the full sourcing and procurement so your space is perfectly stocked and styled from day one.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&fit=crop',
    items: [
      'Kitchen setup and pantry stocking',
      'Home decor and furnishing items',
      'Office supplies and stationery',
      'Smart home and tech accessories',
      'Cleaning and maintenance supplies',
      'Bathroom and bedroom essentials',
    ],
    exampleRequests: [
      '"I just moved into a new apartment, help me set up everything."',
      '"Stock my new office for 15 employees."',
      '"Help me source all kitchen items for my new home."',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.homeOffice,
    howItWorks: [
      'Share your space details and what you need sourced.',
      'We create a comprehensive sourcing list with pricing.',
      'We procure, organize, and deliver everything you need.',
    ],
  },
  {
    id: 'corporate-procurement',
    number: '06',
    name: 'Corporate Procurement',
    shortDescription: 'Bulk corporate gifts, branded items, and bulk purchasing.',
    fullDescription:
      'We partner with businesses to handle their gifting and procurement needs at scale. From branded gifts to bulk office supplies, we make corporate sourcing effortless and cost-effective.',
    image: corporateImg,
    items: [
      'Executive and employee gift sets',
      'Branded merchandise and apparel',
      'Bulk event and conference materials',
      'Client appreciation packages',
      'Seasonal corporate hampers',
      'Office supply bulk orders',
    ],
    exampleRequests: [
      '"We need 100 branded gift sets for our end-of-year party."',
      '"Source bulk stationery for our head office."',
      '"Help us plan executive gifts for our top clients."',
    ],
    whatsappMessage: WHATSAPP_MESSAGES.corporate,
    howItWorks: [
      'Share your requirements, quantity, and budget.',
      'We provide a tailored proposal and sourcing plan.',
      'We procure, brand if needed, and deliver on schedule.',
    ],
  },
];

export const getServiceById = (id) => SERVICES.find((s) => s.id === id);
