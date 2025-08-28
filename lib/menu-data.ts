// Menu data structure with categories and items
export interface MenuItem {
  id: string;
  name: string;
  image: string;
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
    id: "steam-classics",
    title: "STEAM CLASSICS",
    items: [
      {
        id: "veg-steamed",
        name: "VEG STEAMED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description:
          "Fresh vegetables wrapped in soft dough, steamed to perfection",
        quantity: "6 pcs",
        price: "₹80",
      },
      {
        id: "paneer-steamed",
        name: "PANEER STEAMED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Cottage cheese filling with aromatic spices",
        quantity: "6 pcs",
        price: "₹100",
      },
      {
        id: "cheese-steamed",
        name: "CHEESE STEAMED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Melted cheese goodness in every bite",
        quantity: "6 pcs",
        price: "₹120",
      },
      {
        id: "chicken-steamed",
        name: "CHICKEN STEAMED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Tender chicken with traditional spices",
        quantity: "6 pcs",
        price: "₹140",
      },
    ],
  },
  {
    id: "fried-favourites",
    title: "FRIED FAVOURITES",
    items: [
      {
        id: "veg-fried",
        name: "VEG FRIED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy golden exterior with fresh vegetable filling",
        quantity: "8 pcs",
        price: "₹100",
      },
      {
        id: "paneer-fried",
        name: "PANEER FRIED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy fried momos with cottage cheese filling",
        quantity: "8 pcs",
        price: "₹120",
      },
      {
        id: "cheese-fried",
        name: "CHEESE FRIED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Fried to perfection with melted cheese inside",
        quantity: "8 pcs",
        price: "₹140",
      },
      {
        id: "chicken-fried",
        name: "CHICKEN FRIED MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Crispy chicken momos with special dipping sauce",
        quantity: "8 pcs",
        price: "₹160",
      },
    ],
  },
  {
    id: "tandoori-momos",
    title: "TANDOORI MOMOS",
    items: [
      {
        id: "veg-tandoori",
        name: "VEG TANDOORI MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Smoky tandoori flavors with fresh vegetables",
        quantity: "6 pcs",
        price: "₹110",
      },
      {
        id: "paneer-tandoori",
        name: "PANEER TANDOORI MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Tandoori spiced paneer in soft dough",
        quantity: "6 pcs",
        price: "₹130",
      },
      {
        id: "cheese-tandoori",
        name: "CHEESE TANDOORI MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Tandoori cheese momos with mint chutney",
        quantity: "6 pcs",
        price: "₹150",
      },
      {
        id: "chicken-tandoori",
        name: "CHICKEN TANDOORI MOMOS",
        image: "/placeholder.svg?height=300&width=300",
        description: "Tandoori chicken with authentic spices",
        quantity: "6 pcs",
        price: "₹170",
      },
    ],
  },
  {
    id: "bubble-tea",
    title: "BUBBLE TEA",
    items: [
      {
        id: "taro-bubble",
        name: "TARO BUBBLE TEA",
        image: "/placeholder.svg?height=300&width=300",
        description: "Creamy taro flavored milk tea with chewy pearls",
        quantity: "500ml",
        price: "₹150",
      },
      {
        id: "matcha-bubble",
        name: "MATCHA BUBBLE TEA",
        image: "/placeholder.svg?height=300&width=300",
        description: "Premium matcha with tapioca pearls",
        quantity: "500ml",
        price: "₹160",
      },
      {
        id: "classic-bubble",
        name: "CLASSIC BUBBLE TEA",
        image: "/placeholder.svg?height=300&width=300",
        description: "Traditional milk tea with black tapioca pearls",
        quantity: "500ml",
        price: "₹140",
      },
      {
        id: "coffee-frappe",
        name: "COFFEE FRAPPE BUBBLE TEA",
        image: "/placeholder.svg?height=300&width=300",
        description: "Rich coffee frappe with bubble tea twist",
        quantity: "500ml",
        price: "₹170",
      },
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
