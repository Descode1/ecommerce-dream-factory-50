
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
  colors?: string[];
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Watch",
    price: 249.99,
    description: "A beautifully crafted timepiece with a clean, minimalist design. Features a premium leather strap and scratch-resistant sapphire crystal.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    featured: true,
    colors: ["Black", "Brown", "Navy"],
    sizes: ["One Size"]
  },
  {
    id: 2,
    name: "Acoustic Wooden Speakers",
    price: 399.99,
    description: "Hand-crafted wooden speakers delivering rich, warm sound in a stunning minimalist design. Made from sustainable walnut or maple wood.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true,
    colors: ["Walnut", "Maple"]
  },
  {
    id: 3,
    name: "Leather Card Holder",
    price: 79.99,
    description: "Ultra-slim leather card holder that elegantly stores your essentials. Made from full-grain Italian leather that patinas beautifully with time.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1607001363728-71f61fe22258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    colors: ["Black", "Tan", "Brown"]
  },
  {
    id: 4,
    name: "Ceramic Pour-Over Coffee Set",
    price: 129.99,
    description: "Precision-crafted ceramic pour-over coffee set designed for the perfect extraction. Includes ceramic dripper, server, and two cups.",
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true,
    colors: ["White", "Black", "Sand"]
  },
  {
    id: 5,
    name: "Wool Throw Blanket",
    price: 159.99,
    description: "Luxuriously soft merino wool blanket with a subtle pattern. Perfectly weighted for year-round comfort and timeless style.",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    colors: ["Gray", "Cream", "Charcoal"]
  },
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    price: 189.99,
    description: "Adjustable desk lamp with a sculptural design. Features warm dimmable LED light and precision-machined brass joints.",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    colors: ["Black", "Brass", "White"]
  },
  {
    id: 7,
    name: "Organic Cotton T-Shirt",
    price: 49.99,
    description: "Essential t-shirt crafted from 100% organic cotton. Features a modern fit and exceptional comfort for everyday wear.",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    colors: ["White", "Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Ceramic Plant Pot",
    price: 69.99,
    description: "Handmade ceramic plant pot with a minimalist design. Each piece has subtle variations that make it unique.",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    featured: true,
    colors: ["White", "Black", "Terracotta"]
  },
];

export const categories = [
  { id: 1, name: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80" },
  { id: 2, name: "Audio", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  { id: 3, name: "Kitchenware", image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  { id: 4, name: "Home Decor", image: "https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" },
  { id: 5, name: "Apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" },
];
