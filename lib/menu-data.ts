// Menu data structure with categories and items
export interface MenuItem {
  id: string;
  name: string;
  image: string;
  tag?: "bestseller" | "new" | "popular";
  description?: string;
  quantity?: string;
  price?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "veg-momos",
    title: "VEG MOMOS",
    items: [
      {
        id: "veg-fried",
        name: "VEG FRIED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy golden momos with a spiced vegetable filling",
        quantity: "6 pcs",
        price: "₹90",
      },
      {
        id: "veg-steamed",
        name: "VEG STEAMED MOMOS",
        tag: "popular",
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Fresh vegetables wrapped in soft dough, steamed to perfection",
        quantity: "6 pcs",
        price: "₹80",
      },
      {
        id: "veg-tandoori",
        name: "VEG TANDOORI MOMOS",
        tag: "bestseller",
        image: "/placeholder.svg?height=300&width=300",
        description: "Smoky tandoor-grilled momos with spicy vegetable filling",
        quantity: "6 pcs",
        price: "₹150",
      },
      {
        id: "veg-kurkure",
        name: "VEG KURKURE MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy coated momos with a crunchy twist",
        quantity: "6 pcs",
        price: "₹140",
      },
      {
        id: "veg-schezwan",
        name: "VEG SCHEZWAN MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Fiery momos tossed in tangy schezwan sauce",
        quantity: "6 pcs",
        price: "₹140",
      },
      {
        id: "veg-peri-peri-fried",
        name: "VEG PERI PERI FRIED MOMO",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy momos coated with spicy peri peri seasoning",
        quantity: "6 pcs",
        price: "₹120",
      },
      {
        id: "veg-afgani",
        name: "VEG AFGANI MOMO",
        tag: "bestseller",
        image: "/placeholder.svg?height=300&width=300",
        description: "Richly flavored momos tossed in creamy Afghani sauce",
        quantity: "6 pcs",
        price: "₹160",
      },
    ],
  },
  {
    id: "paneer-momos",
    title: "PANEER MOMOS",
    items: [
      {
        id: "paneer-fried",
        name: "PANEER FRIED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Crispy fried momos stuffed with spiced cottage cheese filling",
        quantity: "6 pcs",
        price: "₹100",
      },
      {
        id: "paneer-steamed",
        name: "PANEER STEAMED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Soft steamed momos filled with fresh paneer and herbs",
        quantity: "6 pcs",
        price: "₹100",
      },
      {
        id: "paneer-tandoori",
        name: "PANEER TANDOORI MOMOS",
        tag: "bestseller",
        image: "/placeholder.svg?height=300&width=300",
        description: "Tandoor-grilled paneer momos infused with smoky spices",
        quantity: "6 pcs",
        price: "₹170",
      },
      {
        id: "paneer-kurkure",
        name: "PANEER KURKURE MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy coated momos with delicious paneer filling",
        quantity: "6 pcs",
        price: "₹150",
      },
      {
        id: "paneer-schezwan",
        name: "PANEER SCHEZWAN MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Paneer momos tossed in spicy schezwan sauce",
        quantity: "6 pcs",
        price: "₹140",
      },
      {
        id: "paneer-peri-peri-fried",
        name: "PANEER PERI PERI FRIED MOMO",
        image: "/placeholder.svg?height=300&width=300",
        description: "Fried paneer momos coated with peri peri spice mix",
        quantity: "6 pcs",
        price: "₹140",
      },
      {
        id: "paneer-afgani",
        name: "PANEER AFGANI MOMO",
        tag: "bestseller",
        image: "/placeholder.svg?height=300&width=300",
        description: "Creamy Afghani-style paneer momos rich in flavor",
        quantity: "6 pcs",
        price: "₹180",
      },
    ],
  },
  {
    id: "cheese-corn-momos",
    title: "CHEESE CORN MOMOS",
    items: [
      {
        id: "cheese-corn-fried",
        name: "CHEESE CORN FRIED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy momos filled with melted cheese and sweet corn",
        quantity: "6 pcs",
        price: "₹120",
      },
      {
        id: "cheese-steamed",
        name: "CHEESE CORN STEAMED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Soft steamed momos with rich and creamy cheese filling",
        quantity: "6 pcs",
        price: "₹110",
      },
      {
        id: "cheese-tandoori",
        name: "CHEESE CORN TANDOORI MOMOS",
        tag: "bestseller",
        image: "/placeholder.svg?height=300&width=300",
        description: "Tandoor-grilled momos with smoky cheese flavor",
        quantity: "6 pcs",
        price: "₹180",
      },
      {
        id: "cheese-kurkure",
        name: "CHEESE CORN KURKURE MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crunchy momos with gooey cheese filling inside",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "cheese-schezwan",
        name: "CHEESE CORN SCHEZWAN MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Cheesy momos tossed in spicy schezwan sauce",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "cheese-peri-peri-fried",
        name: "CHEESE CORN PERI PERI FRIED MOMO",
        image: "/placeholder.svg?height=300&width=300",
        description: "Fried momos with a zesty peri peri cheese flavor",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "cheese-afgani",
        name: "CHEESE CORN AFGANI MOMO",
        image: "/placeholder.svg?height=300&width=300",
        description: "Rich Afghani-style creamy cheese momos",
        quantity: "6 pcs",
        price: "₹190",
      },
    ],
  },
  {
    id: "non-veg-momos",
    title: "NON-VEG MOMOS",
    items: [
      {
        id: "chicken-fried",
        name: "CHICKEN FRIED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Golden fried momos stuffed with spicy minced chicken",
        quantity: "6 pcs",
        price: "₹120",
      },
      {
        id: "chicken-steamed",
        name: "CHICKEN STEAMED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Juicy chicken filling wrapped in soft steamed dough",
        quantity: "6 pcs",
        price: "₹110",
      },
      {
        id: "chicken-tandoori",
        name: "CHICKEN TANDOORI MOMOS",
        tag: "bestseller",
        image: "/placeholder.svg?height=300&width=300",
        description: "Smoky tandoor-grilled momos with spiced chicken filling",
        quantity: "6 pcs",
        price: "₹180",
      },
      {
        id: "chicken-kurkure",
        name: "CHICKEN KURKURE MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Crispy coated momos packed with flavorful chicken filling",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "chicken-schezwan",
        name: "CHICKEN SCHEZWAN MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Spicy and tangy momos tossed in signature schezwan sauce",
        quantity: "6 pcs",
        price: "₹160",
      },
      {
        id: "chicken-peri-peri-fried",
        name: "CHICKEN PERI PERI FRIED MOMO",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy fried momos coated with peri peri spice mix",
        quantity: "6 pcs",
        price: "₹150",
      },
      {
        id: "chicken-afgani",
        name: "CHICKEN AFGANI MOMO",
        image: "/placeholder.svg?height=300&width=300",
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
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Stir-fried noodles loaded with fresh vegetables and savory sauces",
        quantity: "1 plate",
        price: "₹100",
      },
      {
        id: "egg-noodles",
        name: "EGG NOODLES",
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Classic noodles tossed with egg, veggies, and aromatic spices",
        quantity: "1 plate",
        price: "₹110",
      },
      {
        id: "chicken-noodles",
        name: "CHICKEN NOODLES",
        image: "/placeholder.svg?height=300&width=300",
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
        image: "/placeholder.svg?height=300&width=300",
        description: "Refreshing mojito with mint leaves, lime, and soda",
        quantity: "Glass",
        price: "₹115",
      },
      {
        id: "green-apple",
        name: "GREEN APPLE",
        image: "/placeholder.svg?height=300&width=300",
        description: "Zesty and sweet green apple mocktail",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "blue-lagoon",
        name: "BLUE LAGOON",
        image: "/placeholder.svg?height=300&width=300",
        description: "Vibrant blue lemonade with a tropical twist",
        quantity: "Glass",
        price: "₹115",
      },
      {
        id: "spicy-mango",
        name: "SPICY MANGO",
        image: "/placeholder.svg?height=300&width=300",
        description: "Tangy mango mocktail with a hint of spice",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "kala-khata",
        name: "KALA KHATA",
        image: "/placeholder.svg?height=300&width=300",
        description: "Classic tangy street-style kala khata mocktail",
        quantity: "Glass",
        price: "₹135",
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
        image: "/placeholder.svg?height=300&width=300",
        description: "Classic creamy vanilla milkshake",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "chocolate-shake",
        name: "CHOCOLATE SHAKE",
        image: "/placeholder.svg?height=300&width=300",
        description: "Rich and indulgent chocolate milkshake",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "mango-shake",
        name: "MANGO SHAKE",
        image: "/placeholder.svg?height=300&width=300",
        description: "Sweet mango shake blended with ice cream",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "oreo-shake",
        name: "OREO SHAKE",
        image: "/placeholder.svg?height=300&width=300",
        description: "Creamy Oreo shake with crushed cookies",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "strawberry-shake",
        name: "STRAWBERRY SHAKE",
        image: "/placeholder.svg?height=300&width=300",
        description: "Fruity strawberry shake blended to perfection",
        quantity: "Glass",
        price: "₹135",
      },
      {
        id: "dry-fruit-shake",
        name: "DRY FRUIT SHAKE",
        image: "/placeholder.svg?height=300&width=300",
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
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Creamy taro-flavored bubble tea with chewy tapioca pearls",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "matcha-boba-tea",
        name: "MATCHA BOBA TEA",
        image: "/placeholder.svg?height=300&width=300",
        description: "Japanese matcha green tea bubble tea blend",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "coffee-frappe-boba",
        name: "COFFEE FRAPPE BOBA",
        image: "/placeholder.svg?height=300&width=300",
        description: "Rich coffee-based boba with a creamy frappe texture",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "pinacolada-boba",
        name: "PINACOLADA BOBA",
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Tropical blend of pineapple and coconut milk tea with boba",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "passion-n-ginger",
        name: "PASSION N GINGER",
        image: "/placeholder.svg?height=300&width=300",
        description: "Zesty mix of passion fruit and ginger with popping boba",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "green-apple-hibiscus",
        name: "GREEN APPLE & HIBISCOUS",
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Refreshing fruit tea infused with green apple and hibiscus",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "berrylicious",
        name: "BERRYLICIOUS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Sweet mixed berry fruit tea with popping boba",
        quantity: "Glass",
        price: "₹169",
      },
      {
        id: "coconut-rose",
        name: "COCONUT ROSE",
        image: "/placeholder.svg?height=300&width=300",
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
        id: "shake-combo",
        name: "SHAKE COMBO",
        image: "/placeholder.svg?height=300&width=300",
        description: "Add any Shake or Mocktail with Momos/Noodles",
        price: "+₹80",
      },
      {
        id: "bubble-tea-combo",
        name: "BUBBLE TEA COMBO",
        image: "/placeholder.svg?height=300&width=300",
        description: "Add any Bubble Tea with Momos/Noodles",
        price: "+₹100",
      },
      // {
      //   id: "meal-combo",
      //   name: "MEAL COMBO",
      //   image: "/placeholder.svg?height=300&width=300",
      //   description: "Add Paneer Chilli + Drinks with Momos/Noodles",
      //   price: "+₹100",
      // },
    ],
  },
];

// Get featured items for home page
export const getFeaturedItems = (): MenuItem[] => {
  return [
    menuData[0].items[0], // VEG STEAMED MOMOS
    menuData[1].items[3], // CHICKEN FRIED MOMOS
    menuData[3].items[0], // TARO BUBBLE TEA
  ];
};
