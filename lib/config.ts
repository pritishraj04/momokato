// Global configuration for external links and app settings
export const APP_CONFIG = {
  // Restaurant Profile Links
  DELIVERY_LINKS: {
    SWIGGY: "https://www.swiggy.com/city/gaya/momo-kato-gaya-city-rest940360",
    ZOMATO: "https://www.zomato.com/gaya/momo-kato-gaya-locality/order",
  },

  // Social Media Links
  SOCIAL: {
    INSTAGRAM: "https://www.instagram.com/momokato.eats",
    FACEBOOK: "https://www.facebook.com/profile.php?id=61573731577484#",
  },

  // Business Information
  BUSINESS: {
    NAME: "Momo Kato",
    TAGLINE: "Fresh Momos & Bubble Tea",
    DESCRIPTION:
      "Born in Patna, Loved Everywhere. Quality momos and bubble tea served with a smile!",
    OFFICE_ADDRESS: "Shyam Bhavan, Ground Floor, Behind Lalita Hotel East Boring Canal Road, Patna, Bihar, India - 800001",
    OFFICE_PHONES: ["+91 8877005900", "+91 8877009800", "+91 8877009300"], 
    OFFICE_PRIMARY_EMAIL: "hello@momokato.in",
    OFFICE_WHATSAPP: "8877005900",
    OFFICE_FRANCHISE_EMAIL: "franchise@momokato.in (For franchise inquiries)",
    OFFICE_TIMINGS: "Monday - Sunday: 10:00AM - 6:00PM",
    LOCATIONS: [
      {
        name: "Momo Kato - Iconic Tower, Gola Road",
        address: "Bhavya Iconic Tower Gola Road, Bailey Rd, Patna, Bihar 801503",
        phone: "+91 8877005900",
        hours: "3 PM - 10 PM",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.7757873421765!2d85.05418017539542!3d25.61236567744612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzQ0LjUiTiA4NcKwMDMnMjQuMyJF!5e0!3m2!1sen!2sin!4v1762845267739!5m2!1sen!2sin",
        homepage: false,
      },
      {
        name: "Momo Kato - Pulwari Sharif",
        address: "Shanti Kunj Rd, B Sector, Haroon Colony Sector -II, Phulwari Sharif, Patna, Bihar 800002",
        phone: "+91 8877009800",
        hours: "11 AM - 11 PM",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7506860153217!2d85.0824279!3d25.579960099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed579adf16c317%3A0x1e6debdbc4ff6ab5!2sMomo%20Kato%20Cart!5e0!3m2!1sen!2sin!4v1762845737924!5m2!1sen!2sin",
        homepage: true,
      },
      {
        name: "Momo Kato - APR Mall, Gaya",
        address: "Nagmatia Colony, Gaya, Bihar 823001",
        phone: "+91 8877009300",
        hours: "11 AM - 11 PM",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.078957784124!2d84.9986559!3d24.792749699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bce25c50c0f%3A0x22f736b8a314dc91!2sMomo%20Kato!5e0!3m2!1sen!2sin!4v1762845800950!5m2!1sen!2sin",
        homepage: true,
      },
    ],
  },

  // App Settings
  SETTINGS: {
    THEME: "light",
    CURRENCY: "₹",
    TIMEZONE: "Asia/Kolkata",
  },
} as const;

// Helper functions for easy access
export const getDeliveryLinks = () => APP_CONFIG.DELIVERY_LINKS;
export const getSwiggyLink = () => APP_CONFIG.DELIVERY_LINKS.SWIGGY;
export const getZomatoLink = () => APP_CONFIG.DELIVERY_LINKS.ZOMATO;
export const getContactInfo = () => {
  return {EMAIL: APP_CONFIG.BUSINESS.OFFICE_PRIMARY_EMAIL, PHONE: APP_CONFIG.BUSINESS.OFFICE_PHONES[0], WHATSAPP: APP_CONFIG.BUSINESS.OFFICE_WHATSAPP}};
export const getSocialLinks = () => APP_CONFIG.SOCIAL;
export const getBusinessInfo = () => APP_CONFIG.BUSINESS;

// Type definitions for better TypeScript support
export type DeliveryPlatform = keyof typeof APP_CONFIG.DELIVERY_LINKS;
export type SocialPlatform = keyof typeof APP_CONFIG.SOCIAL;