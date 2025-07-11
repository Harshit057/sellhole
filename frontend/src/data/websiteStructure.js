// Website Structure and Data Analysis for SellHole Migration
// Extracted from HTML/CSS analysis for MERN conversion

export const websiteStructure = {
  // Brand Information
  brand: {
    name: "SellHole",
    tagline: "Connecting Vendors Across Cities",
    subtitle: "Bridging the Gap Between Rural and Urban Markets",
    description: "Connecting vendors from all over the country for a seamless shopping experience."
  },

  // Navigation Structure
  navigation: {
    mainMenu: [
      { name: "Home", path: "/", file: "home.html" },
      { name: "Categories", path: "/categories", file: "categories.html" },
      { name: "Deals", path: "/deals", file: "deals.html" },
      { name: "About Us", path: "/about", file: "about.html" },
      { name: "Contact", path: "/contact", file: "contact.html" },
      { name: "Cart", path: "/cart", file: "cart.html" }
    ],
    authMenu: [
      { name: "Login", path: "/login", file: "login.html" },
      { name: "Sign Up", path: "/signup", file: "signup.html" }
    ]
  },

  // Categories
  categories: [
    {
      id: "agriculture",
      name: "Agriculture",
      slug: "agriculture",
      description: "Fresh produce and agricultural products from rural farmers",
      images: [
        "agri.jpg",
        "agri2.webp",
        "agri3.webp", 
        "agri4.webp"
      ],
      page: "agriculture.html"
    },
    {
      id: "handicrafts",
      name: "Handicrafts",
      slug: "handicrafts", 
      description: "Handmade crafts and artistic products from skilled artisans",
      images: [
        "Handicraft.jpg",
        "Handicraft2.webp",
        "Handicraft3.webp",
        "Handicraft4.webp"
      ],
      page: "handicrafts.html"
    }
  ],

  // Featured Products (from home.html)
  featuredProducts: [
    {
      id: "fresh-corn-cob",
      name: "Fresh Produce",
      price: 45,
      image: "fresh-corn-cob.webp",
      category: "agriculture",
      description: "Fresh corn cob directly from farmers"
    },
    {
      id: "organic-wheat",
      name: "Organic Wheat",
      price: 30,
      image: "wheat.webp",
      category: "agriculture",
      description: "Premium quality organic wheat"
    },
    {
      id: "handcrafted-pottery",
      name: "Handcrafted Pottery",
      price: 50,
      image: "potrry.webp",
      category: "handicrafts",
      description: "Beautiful handcrafted pottery"
    },
    {
      id: "wooden-sculpture",
      name: "Wooden Sculpture",
      price: 60,
      image: "sclupture.webp",
      category: "handicrafts",
      description: "Artistic wooden sculpture"
    },
    {
      id: "ceramic-vase",
      name: "Ceramic Vase",
      price: 35,
      image: "vase.webp",
      category: "handicrafts",
      description: "Elegant ceramic vase"
    },
    {
      id: "organic-rice",
      name: "Organic Rice",
      price: 40,
      image: "rice.webp",
      category: "agriculture",
      description: "Premium organic rice"
    },
    {
      id: "bamboo-crafts",
      name: "Bamboo Crafts",
      price: 25,
      image: "bamboocft.webp",
      category: "handicrafts",
      description: "Eco-friendly bamboo crafts"
    },
    {
      id: "herbal-tea",
      name: "Herbal Tea",
      price: 20,
      image: "herbal-tea.webp",
      category: "agriculture",
      description: "Natural herbal tea blend"
    }
  ],

  // Color Scheme and Theme
  theme: {
    colors: {
      primary: "#007bff",
      primaryHover: "#0056b3",
      background: "linear-gradient(to bottom, #e0f7fa 50%, #e1bee7 100%)",
      dark: "#212529",
      text: "#333",
      lightText: "#bbb"
    },
    fonts: {
      primary: "Arial, sans-serif",
      headings: "'Times New Roman', Times, serif"
    }
  },

  // Layout Sections
  sections: {
    hero: {
      backgroundImage: "imgleave.jpg",
      title: "Welcome to SellHole",
      subtitle: "Bridging the Gap Between Rural and Urban Markets",
      cta: "Shop Now"
    },
    categories: {
      title: "Explore Categories",
      type: "grid",
      columns: 2,
      cardStyle: "image-slider"
    },
    featuredProducts: {
      title: "Featured Products",
      type: "grid",
      columns: 4,
      cardStyle: "product-card"
    },
    newsletter: {
      title: "Subscribe for Updates",
      subtitle: "Get the latest deals and updates on new arrivals!",
      backgroundColor: "primary"
    }
  },

  // Footer Information
  footer: {
    sections: [
      {
        title: "About SellHole",
        content: "Connecting vendors from all over the country for a seamless shopping experience."
      },
      {
        title: "Quick Links",
        links: [
          { name: "Home", path: "/" },
          { name: "Categories", path: "/categories" },
          { name: "Contact Us", path: "/contact" }
        ]
      },
      {
        title: "Contact",
        content: [
          "Email: support@sellhole.com",
          "Phone: +91 89576 88223"
        ]
      }
    ]
  },

  // Image Assets Mapping
  imageAssets: {
    home: [
      "DSC_2629.svg",
      "favicon.webp", 
      "imgleave.jpg"
    ],
    agriculture: [
      "agri.jpg",
      "agri2.webp",
      "agri3.webp",
      "agri4.webp",
      "fresh-corn-cob.webp",
      "herbal-tea.webp",
      "rice.webp",
      "wheat.webp"
    ],
    handicrafts: [
      "bamboocft.webp",
      "Handicraft.jpg",
      "Handicraft2.webp", 
      "Handicraft3.webp",
      "Handicraft4.webp",
      "potrry.webp",
      "sclupture.webp",
      "vase.webp"
    ]
  },

  // Features and Functionality
  features: {
    imageSliders: true,
    cartFunctionality: true,
    quantityControls: true,
    responsiveDesign: true,
    newsletterSubscription: true,
    userAuthentication: true,
    categoryFiltering: true
  },

  // CSS Animations and Effects
  animations: {
    imageSliders: {
      agriculture: "slideImagesCategory1",
      handicrafts: "slideImagesCategory2"
    },
    hoverEffects: {
      cards: "transform scale(1.05)",
      buttons: "color and background transitions"
    },
    transitions: "transform 0.3s ease"
  }
};

export default websiteStructure;
