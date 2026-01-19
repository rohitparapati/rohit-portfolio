// Keep projects in data so adding/editing is easy.
// Later, "View Details" will open an internal details view (route or modal).

export const projectsData = [
  {
    id: "triplanner",
    title: "Interactive Group Travel Planner",
    shortDescription:
      "Real-time collaborative trip planning with shared itineraries, proposals, and voting.",
    tech: ["React", "Node.js", "Express", "Socket.IO"],
    liveUrl: "", // add later (leave "" if none)
    repoUrl: "https://github.com/rohitparapati/TripPlanner", // optional
    details: {
      problem:
        "Group trip planning gets messy across chats and spreadsheets with no single source of truth.",
      solution:
        "Built a real-time app where users collaborate on an itinerary, propose activities, and vote together.",
      features: [
        "Create/join trip rooms with a unique trip ID",
        "Real-time itinerary updates with Socket.IO",
        "Activity proposals + voting workflow",
        "User-friendly layout optimized for fast group decisions",
      ],
      images: [], // add image paths later
    },
  },
  {
    id: "posease",
    title: "CrossEase POS (POS + Admin Panel)",
    shortDescription:
      "A web POS with an admin dashboard concept for inventory, employees, and sales tracking.",
    tech: ["React", "Node.js", "Express", "SQL"],
    liveUrl: "",
    repoUrl: "",
    details: {
      problem:
        "Small shops need a simple POS and inventory view without heavy enterprise tools.",
      solution:
        "Designed a POS workflow plus an admin panel structure for products, staff hours, and sales summary.",
      features: [
        "Fast cart workflow (search/add/remove items)",
        "Admin panel layout for products, employees, sales dashboard",
        "Database-ready structure (products, inventory, sales)",
        "Scalable architecture for multi-store expansion (future)",
      ],
      images: [],
    },
  },
  {
    id: "gas-station-site",
    title: "Gas Station Business Website",
    shortDescription:
      "A dark, modern website with sections like fuel prices, store info, and contact.",
    tech: ["React", "Vite", "HTML", "CSS"],
    liveUrl: "",
    repoUrl: "",
    details: {
      problem:
        "Local businesses often have outdated sites that don’t work well on mobile.",
      solution:
        "Built a responsive site with clear navigation, modern styling, and easy-to-update content sections.",
      features: [
        "Responsive layout with modern UI",
        "Reusable components for quick updates",
        "Optimized images and clean structure",
        "Smooth scrolling for section navigation",
      ],
      images: [],
    },
  },
  {
  id: "stock-analysis-tool",
  title: "Stock Analysis Tool",
  shortDescription:
    "Automated stock trading and analysis tool using technical indicators to identify optimal buy and sell points.",
  tech: ["Python", "Yahoo Finance API", "Data Analysis", "Technical Indicators"],
  liveUrl: "",
  repoUrl: "https://github.com/rohitparapati/Trading",
  details: {
    problem:
      "Manual stock trading decisions are time-consuming and prone to emotional bias, especially when analyzing intraday and closing price movements.",
    solution:
      "Built a Python-based stock analysis tool that automates technical analysis using moving averages and price trends to identify potential buy and sell opportunities.",
    features: [
      "Fetches real-time and historical stock data using Yahoo Finance",
      "Calculates and visualizes moving averages and price trends",
      "Automates buy/sell signals based on intraday price movements",
      "Detailed reporting of trades and performance outcomes",
      "User-defined capital and stock quantity inputs",
    ],
    images: [],
  },
},

  {
  id: "unity-web",
  title: "Unity Web",
  shortDescription:
    "A web platform that connects users with verified home appliance service providers through secure authentication and backend validation.",
  tech: ["Node.js", "MongoDB", "HTML", "CSS", "Authentication", "Docker"],
  liveUrl: "",
  repoUrl: "https://github.com/rohitparapati/Unity-Web",
  details: {
    problem:
      "Finding reliable home appliance service providers is difficult, especially for newcomers in unfamiliar areas, with risks of fraud and unverified listings.",
    solution:
      "Built a web platform that connects users with verified service providers while enforcing backend approval and authentication workflows.",
    features: [
      "Secure user signup and login system",
      "Service-based browsing and provider discovery",
      "Detailed provider profile pages",
      "Service provider registration with verification workflow",
      "Email notifications for verification status",
      "Dockerized application for easy deployment",
      "Automated testing support",
    ],
    images: [],
  },
},
  
];

/*
Missing project types you SHOULD consider adding:
- System Design case study (scalability, caching, tradeoffs)
- Cloud deployment mini-project (Docker + Nginx + VPS or AWS)
- Database design project (schemas, indexing, queries)
- Testing-focused project (Jest + component tests)
*/
