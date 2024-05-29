import { Product } from '../interfaces/interfaces'

const products: Product[] = [
  {
    productName: "Wireless Bluetooth Speaker",
    price: 49.99,
    description: "Portable speaker with high-quality sound and long battery life.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.5
  },
  {
    productName: "Smartphone 12 Pro",
    price: 999.99,
    description: "Latest smartphone with advanced features and sleek design.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg",
    rating: 4.7
  },
  {
    productName: "Gaming Laptop",
    price: 1499.99,
    description: "High-performance laptop for gaming and productivity.",
    image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    rating: 4.8
  },
  {
    productName: "4K UHD TV",
    price: 799.99,
    description: "Ultra HD television with stunning picture quality.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtkgw1vQoVUfidDoPwZmTeu4CvJgHsueXP7GgD_E3eg&s",
    rating: 4.6
  },
  {
    productName: "Noise-Canceling Headphones",
    price: 199.99,
    description: "Headphones with superior sound and active noise cancellation.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.4
  },
  {
    productName: "Smartwatch Series 6",
    price: 399.99,
    description: "Smartwatch with health tracking and customizable watch faces.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.6
  },
  {
    productName: "Fitness Tracker",
    price: 129.99,
    description: "Track your daily activity and health metrics.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.2
  },
  {
    productName: "Digital Camera",
    price: 549.99,
    description: "Capture high-quality photos and videos with ease.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.5
  },
  {
    productName: "Portable Charger",
    price: 29.99,
    description: "Compact charger for on-the-go power.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.1
  },
  {
    productName: "Electric Toothbrush",
    price: 89.99,
    description: "Toothbrush with multiple cleaning modes and long battery life.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.3
  },
  {
    productName: "Blender",
    price: 59.99,
    description: "High-speed blender for smoothies and shakes.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.0
  },
  {
    productName: "Air Fryer",
    price: 129.99,
    description: "Cook healthy meals with less oil.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.6
  },
  {
    productName: "Espresso Machine",
    price: 249.99,
    description: "Make barista-quality coffee at home.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.7
  },
  {
    productName: "Vacuum Cleaner",
    price: 199.99,
    description: "Powerful vacuum cleaner for a spotless home.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.5
  },
  {
    productName: "Electric Kettle",
    price: 49.99,
    description: "Quickly boil water with this sleek kettle.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.3
  },
  {
    productName: "Yoga Mat",
    price: 29.99,
    description: "Comfortable and durable mat for yoga and exercise.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.4
  },
  {
    productName: "Office Chair",
    price: 159.99,
    description: "Ergonomic chair for comfortable working hours.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.5
  },
  {
    productName: "Desk Lamp",
    price: 39.99,
    description: "Adjustable lamp with multiple brightness settings.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.2
  },
  {
    productName: "Wireless Mouse",
    price: 29.99,
    description: "Smooth and responsive mouse for your computer.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.1
  },
  {
    productName: "Cookware Set",
    price: 199.99,
    description: "Complete set of pots and pans for your kitchen.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    rating: 4.6
  }
];

export default products;