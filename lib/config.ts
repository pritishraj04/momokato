// Global configuration for external links and app settings
export const APP_CONFIG = {
  // Restaurant Profile Links
  DELIVERY_LINKS: {
    SWIGGY:
      "https://www.swiggy.com/restaurants/momo-kato-noida-sector-18-noida-123456",
    ZOMATO: "https://www.zomato.com/ncr/momo-kato-sector-18-noida/order",
  },

  // Contact Information
  CONTACT: {
    PHONE: "+91 9876543210",
    EMAIL: "hello@momokato.com",
    WHATSAPP: "919876543210",
  },

  // Social Media Links
  SOCIAL: {
    INSTAGRAM: "https://www.instagram.com/momokato_official",
    FACEBOOK: "https://www.facebook.com/momokatoofficial",
    TWITTER: "https://www.twitter.com/momokato",
    YOUTUBE: "https://www.youtube.com/@momokato",
  },

  // Business Information
  BUSINESS: {
    NAME: "Momo Kato",
    TAGLINE: "Fresh Momos & Bubble Tea",
    DESCRIPTION:
      "Born in Patna, Loved Everywhere. Quality momos and bubble tea served with a smile!",
    LOCATIONS: [
      {
        name: "Momo Kato - Patna Central",
        address: "123 Food Street, Patna, Bihar 800001",
        phone: "+91 9876543210",
        hours: "11 AM - 10 PM",
      },
      {
        name: "Momo Kato - Gandhi Maidan",
        address: "45 Flavor Avenue, Gandhi Maidan, Patna, Bihar 800004",
        phone: "+91 9876543211",
        hours: "11 AM - 11 PM",
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
export const getContactInfo = () => APP_CONFIG.CONTACT;
export const getSocialLinks = () => APP_CONFIG.SOCIAL;
export const getBusinessInfo = () => APP_CONFIG.BUSINESS;

// Type definitions for better TypeScript support
export type DeliveryPlatform = keyof typeof APP_CONFIG.DELIVERY_LINKS;
export type SocialPlatform = keyof typeof APP_CONFIG.SOCIAL;
export type ContactMethod = keyof typeof APP_CONFIG.CONTACT;
