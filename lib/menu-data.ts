// Menu data structure with categories and items
export interface MenuItem {
  id: string;
  name: string;
  image: string;
  tag?: "bestseller" | "new" | "popular";
  description?: string;
  quantity?: string;
  price?: string;
  featured?: boolean;
  customerFavorite?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "veg-momo",
    title: "VEG MOMO",
    items: [
      {
        id: "veg-fried",
        name: "VEG FRIED MOMO",
        image: "/images/menu/food/veg-fried-momo.jpg",
        description: "Crispy golden momos with a spiced vegetable filling",
        quantity: "6 pcs",
        price: "₹90",
      },
      {
        id: "veg-steamed",
        name: "VEG STEAMED MOMO",
        tag: "popular",
        image: "/images/menu/food/veg-steamed-momo.jpg",
        description:
          "Fresh vegetables wrapped in soft dough, steamed to perfection",
        quantity: "6 pcs",
        price: "₹80",
        featured: true,
      },
      {
        id: "veg-tandoori",
        name: "VEG TANDOORI MOMO",
        tag: "bestseller",
        // image: "/images/menu/food/veg-tandoori-momo.jpg",
        image: "",
        description: "Smoky tandoor-grilled momos with spicy vegetable filling",
        quantity: "6 pcs",
        price: "₹150",
      },
      {
        id: "veg-kurkure",
        name: "VEG KURKURE MOMO",
        image: "/images/menu/food/veg-kurkure-momo.jpg",
        description: "Crispy coated momos with a crunchy twist",
        quantity: "6 pcs",
        price: "₹140",
      },
      {
        id: "veg-schezwan",
        name: "VEG SCHEZWAN MOMO",
        image: "/images/menu/food/veg-schezwan-momo.jpg",
        description: "Fiery momos tossed in tangy schezwan sauce",
        quantity: "6 pcs",
        price: "₹140",
      },
      {
        id: "veg-peri-peri-fried",
        name: "VEG PERI PERI FRIED MOMO",
        image: "/images/menu/food/veg-peri-peri-fried-momo.jpg",
        description: "Crispy momos coated with spicy peri peri seasoning",
        quantity: "6 pcs",
        price: "₹120",
      },
      {
        id: "veg-afgani",
        name: "VEG AFGANI MOMO",
        tag: "bestseller",
        image: "/images/menu/food/veg-afgani-momo.jpg",
        description: "Richly flavored momos tossed in creamy Afghani sauce",
        quantity: "6 pcs",
        price: "₹160",
        customerFavorite: true,
      },
    ],
  },
  {
    id: "paneer-momo",
    title: "PANEER MOMO",
    items: [
      {
        id: "paneer-fried",
        name: "PANEER FRIED MOMO",
        image: "/images/menu/food/paneer-fried-momo.jpg",
        description:
          "Crispy fried momos stuffed with spiced cottage cheese filling",
        quantity: "6 pcs",
        price: "₹100",
      },
      {
        id: "paneer-steamed",
        name: "PANEER STEAMED MOMO",
        image: "/images/menu/food/paneer-steamed-momo.jpg",
        description: "Soft steamed momos filled with fresh paneer and herbs",
        quantity: "6 pcs",
        price: "₹100",
      },
      {
        id: "paneer-tandoori",
        name: "PANEER TANDOORI MOMO",
        tag: "bestseller",
        image: "/images/menu/food/paneer-tandoori-momo.jpg",
        description: "Tandoor-grilled paneer momos infused with smoky spices",
        quantity: "6 pcs",
        price: "₹170",
        customerFavorite: true,
      },
      {
        id: "paneer-kurkure",
        name: "PANEER KURKURE MOMO",
        image: "/images/menu/food/paneer-kurkure-momo.jpg",
        description: "Crispy coated momos with delicious paneer filling",
        quantity: "6 pcs",
        price: "₹150",
        featured: true,
      },
      {
        id: "paneer-schezwan",
        name: "PANEER SCHEZWAN MOMO",
        image: "/images/menu/food/paneer-schezwan-momo.jpg",
        description: "Paneer momos tossed in spicy schezwan sauce",
        quantity: "6 pcs",
        price: "₹140",
      },
      {
        id: "paneer-peri-peri-fried",
        name: "PANEER PERI PERI FRIED MOMO",
        image: "/images/menu/food/paneer-peri-peri-fried-momo.jpg",
        description: "Fried paneer momos coated with peri peri spice mix",
        quantity: "6 pcs",
        price: "₹140",
      },
      {
        id: "paneer-afgani",
        name: "PANEER AFGANI MOMO",
        tag: "bestseller",
        image: "/images/menu/food/paneer-afgani-momo.jpg",
        description: "Creamy Afghani-style paneer momos rich in flavor",
        quantity: "6 pcs",
        price: "₹180",
      },
    ],
  },
  {
    id: "cheese-corn-momos",
    title: "CHEESE CORN MOMO",
    items: [
      {
        id: "cheese-corn-fried",
        name: "CHEESE CORN FRIED MOMO",
        image: "/images/menu/food/cheese-corn-fried-momo.jpg",
        description: "Crispy momos filled with melted cheese and sweet corn",
        quantity: "6 pcs",
        price: "₹120",
      },
      {
        id: "cheese-steamed",
        name: "CHEESE CORN STEAMED MOMO",
        image: "/images/menu/food/cheese-steamed-momo.jpg",
        description: "Soft steamed momos with rich and creamy cheese filling",
        quantity: "6 pcs",
        price: "₹110",
      },
      {
        id: "cheese-tandoori",
        name: "CHEESE CORN TANDOORI MOMO",
        tag: "bestseller",
        // image: "/images/menu/food/cheese-tandoori-momo.jpg",
        image: "",
        description: "Tandoor-grilled momos with smoky cheese flavor",
        quantity: "6 pcs",
        price: "₹180",
      },
      {
        id: "cheese-kurkure",
        name: "CHEESE CORN KURKURE MOMO",
        image: "/images/menu/food/cheese-kurkure-momo.jpg",
        description: "Crunchy momos with gooey cheese filling inside",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "cheese-schezwan",
        name: "CHEESE CORN SCHEZWAN MOMO",
        image: "/images/menu/food/cheese-schezwan-momo.jpg",
        description: "Cheesy momos tossed in spicy schezwan sauce",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "cheese-peri-peri-fried",
        name: "CHEESE CORN PERI PERI FRIED MOMO",
        image: "/images/menu/food/cheese-peri-peri-fried-momo.jpg",
        description: "Fried momos with a zesty peri peri cheese flavor",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "cheese-afgani",
        name: "CHEESE CORN AFGANI MOMO",
        image: "/images/menu/food/cheese-afgani-momo.jpg",
        description: "Rich Afghani-style creamy cheese momos",
        quantity: "6 pcs",
        price: "₹190",
      },
    ],
  },
  {
    id: "non-veg-momo",
    title: "NON-VEG MOMO",
    items: [
      {
        id: "chicken-fried",
        name: "CHICKEN FRIED MOMO",
        image: "/images/menu/food/chicken-fried-momo.jpg",
        description: "Golden fried momos stuffed with spicy minced chicken",
        quantity: "6 pcs",
        price: "₹120",
        featured: true,
      },
      {
        id: "chicken-steamed",
        name: "CHICKEN STEAMED MOMO",
        image: "/images/menu/food/chicken-steamed-momo.jpg",
        description: "Juicy chicken filling wrapped in soft steamed dough",
        quantity: "6 pcs",
        price: "₹110",
      },
      {
        id: "chicken-tandoori",
        name: "CHICKEN TANDOORI MOMO",
        tag: "bestseller",
        image: "/images/menu/food/chicken-tandoori-momo.jpg",
        description: "Smoky tandoor-grilled momos with spiced chicken filling",
        quantity: "6 pcs",
        price: "₹180",
        customerFavorite: true,
      },
      {
        id: "chicken-kurkure",
        name: "CHICKEN KURKURE MOMOS",
        image: "/images/menu/food/chicken-kurkure-momo.jpg",
        description:
          "Crispy coated momos packed with flavorful chicken filling",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "chicken-schezwan",
        name: "CHICKEN SCHEZWAN MOMO",
        // image: "/images/menu/food/chicken-schezwan-momo.jpg",
        image: "/images/menu/food/chicken-schezwan-momo.jpg",
        description: "Spicy and tangy momos tossed in signature schezwan sauce",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "chicken-peri-peri-fried",
        name: "CHICKEN PERI PERI FRIED MOMO",
        image: "/images/menu/food/chicken-peri-peri-fried-momo.jpg",
        description: "Crispy fried momos coated with peri peri spice mix",
        quantity: "6 pcs",
        price: "₹150",
      },
      {
        id: "chicken-afgani",
        name: "CHICKEN AFGANI MOMO",
        // image: "/images/menu/food/chicken-afgani-momo.jpg",
        image: "/images/menu/food/chicken-afgani-momo.jpg",
        description: "Creamy Afghani-style chicken momos rich in flavor",
        quantity: "6 pcs",
        price: "₹190",
      },
    ],
  },
  {
    id: "noodles",
    title: "NOODLES",
    items: [
      {
        id: "veg-noodles",
        name: "VEG NOODLES",
        image: "/images/menu/food/veg-noodles.jpg",
        description:
          "Stir-fried noodles loaded with fresh vegetables and savory sauces",
        quantity: "1 plate",
        price: "₹100",
      },
      {
        id: "egg-noodles",
        name: "EGG NOODLES",
        image: "/images/menu/food/egg-noodles.jpg",
        description:
          "Classic noodles tossed with egg, veggies, and aromatic spices",
        quantity: "1 plate",
        price: "₹110",
      },
      {
        id: "chicken-noodles",
        name: "CHICKEN NOODLES",
        image: "/images/menu/food/chicken-noodles.jpg",
        description:
          "Flavorful noodles stir-fried with tender chicken and veggies",
        quantity: "1 plate",
        price: "₹140",
      },
    ],
  },
  {
    id: "mocktails",
    title: "MOCKTAILS",
    items: [
      {
        id: "mint-mojito",
        name: "MINT MOJITO",
        image: "/images/menu/drinks/mint-mojito.jpg",
        description: "Refreshing mojito with mint leaves, lime, and soda",
        quantity: "Glass",
        price: "₹115",
        customerFavorite: true,
      },
      {
        id: "green-apple",
        name: "GREEN APPLE",
        image: "/images/menu/drinks/green-apple.jpg",
        description: "Zesty and sweet green apple mocktail",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "blue-lagoon",
        name: "BLUE LAGOON",
        image: "",
        description: "Vibrant blue lemonade with a tropical twist",
        quantity: "Glass",
        price: "₹115",
      },
      {
        id: "spicy-mango",
        name: "SPICY MANGO",
        image: "",
        description: "Tangy mango mocktail with a hint of spice",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "kala-khata",
        name: "KALA KHATA",
        image: "/images/menu/drinks/kala-khatta.jpg",
        description: "Classic tangy street-style kala khata mocktail",
        quantity: "Glass",
        price: "₹135",
        customerFavorite: true,
      },
    ],
  },
  {
    id: "shakes",
    title: "SHAKES",
    items: [
      {
        id: "vanilla-shake",
        name: "VANILLA SHAKE",
        image: "/images/menu/drinks/vanilla-shake.jpg",
        description: "Classic creamy vanilla milkshake",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "chocolate-shake",
        name: "CHOCOLATE SHAKE",
        image: "/images/menu/drinks/chocolate-shake.jpg",
        description: "Rich and indulgent chocolate milkshake",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "mango-shake",
        name: "MANGO SHAKE",
        image: "/images/menu/drinks/mango-shake.jpg",
        description: "Sweet mango shake blended with ice cream",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "oreo-shake",
        name: "OREO SHAKE",
        image: "/images/menu/drinks/oreo-shake.jpg",
        description: "Creamy Oreo shake with crushed cookies",
        quantity: "Glass",
        price: "₹135",
        customerFavorite: true,
      },
      {
        id: "strawberry-shake",
        name: "STRAWBERRY SHAKE",
        image: "/images/menu/drinks/strawberry-shake.jpg",
        description: "Fruity strawberry shake blended to perfection",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "dry-fruit-shake",
        name: "DRY FRUIT SHAKE",
        image: "/images/menu/drinks/dry-fruit-shake.jpg",
        description: "Nutty and rich shake made with premium dry fruits",
        quantity: "Glass",
        price: "₹135",
      },
    ],
  },
  {
    id: "bubble-teas",
    title: "BUBBLE TEAS",
    items: [
      {
        id: "taro-boba-tea",
        name: "TARO BOBA TEA",
        tag: "bestseller",
        image: "/images/menu/drinks/boba/taro-boba-tea.jpg",
        description:
          "Creamy taro-flavored bubble tea with chewy tapioca pearls",
        quantity: "Glass",
        price: "₹169",
        customerFavorite: true,
      },
      {
        id: "matcha-boba-tea",
        name: "MATCHA BOBA TEA",
        image: "/images/menu/drinks/boba/matcha-boba-tea.jpg",
        description: "Japanese matcha green tea bubble tea blend",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "coffee-frappe-boba",
        name: "COFFEE FRAPPE BOBA",
        image: "/images/menu/drinks/boba/coffee-frappe-tea.jpg",
        description: "Rich coffee-based boba with a creamy frappe texture",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "pinacolada-boba",
        name: "PINACOLADA BOBA",
        image: "/images/menu/drinks/boba/pinacolada-boba-tea.jpg",
        description:
          "Tropical blend of pineapple and coconut milk tea with boba",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "passion-n-ginger",
        name: "PASSION N GINGER",
        image: "/images/menu/drinks/boba/popping/passion-and-ginger.jpg",
        description: "Zesty mix of passion fruit and ginger with popping boba",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "green-apple-hibiscus",
        name: "GREEN APPLE & HIBISCOUS",
        image: "/images/menu/drinks/boba/popping/green-apple-hibiscous.jpg",
        description:
          "Refreshing fruit tea infused with green apple and hibiscus",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "berrylicious",
        name: "BERRYLICIOUS",
        image: "",
        description: "Sweet mixed berry fruit tea with popping boba",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "coconut-rose",
        name: "COCONUT ROSE",
        image: "/images/menu/drinks/boba/popping/coconut-rose.jpg",
        description: "Delicate coconut and rose fusion with popping boba",
        quantity: "Glass",
        price: "₹169",
      },
    ],
  },
  {
    id: "combos",
    title: "COMBOS",
    items: [
      {
        id: "momo-shake-combo",
        name: "MOMO & SHAKE COMBO",
        image: "/images/menu/food/momo-shake-combo.jpg",
        description: "Add any Shake or Mocktail with Momos/Noodles",
        price: "+₹80",
      },
      {
        id: "momo-bubble-tea-combo",
        name: "MOMO & BUBBLE TEA COMBO",
        image: "/images/menu/food/momo-bubble-tea-combo.jpg",
        description: "Add any Bubble Tea with Momos/Noodles",
        price: "+₹100",
      },
      {
        id: "noodle-shake-combo",
        name: "NOODLE & SHAKE COMBO",
        image: "/images/menu/food/noodles-shake-combo.jpg",
        description: "Add any Noodle with Shake or Mocktail",
        price: "+₹100",
      },
      {
        id: "noodle-bubble-tea-combo",
        name: "NOODLE & BUBBLE TEA COMBO",
        image: "/images/menu/food/noodles-bubble-tea-combo.jpg",
        description: "Add any Noodle with Bubble Tea",
        price: "+₹100",
      },
      // {
      //   id: "meal-combo",
      //   name: "MEAL COMBO",
      //   image: "",
      //   description: "Add Paneer Chilli + Drinks with Momos/Noodles",
      //   price: "+₹100",
      // },
    ],
  },
];

// Get featured items for home page
export const getFeaturedItems = (): MenuItem[] => {
  const allItems = menuData.flatMap((category) => category.items);
  const featured = allItems.filter((item) => item.featured);

  // If no explicitly featured items, return first 6 items
  if (featured.length === 0) {
    return allItems.slice(0, 6);
  }
  return featured;
};

// Get customer favorite items
export const getCustomerFavorites = (): MenuItem[] => {
  const allItems = menuData.flatMap((category) => category.items);
  const favorites = allItems.filter((item) => item.customerFavorite);

  // If no explicitly marked favorites, return bestsellers or popular items
  if (favorites.length === 0) {
    return allItems.filter(
      (item) => item.tag === "bestseller" || item.tag === "popular"
    );
  }
  return favorites;
};

