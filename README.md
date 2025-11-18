📋 Overview
A sleek, modern landing page for CodaBlock - an AI-powered developer tools platform. Built with React and Tailwind CSS, featuring smooth animations, responsive design, and a beautiful gradient aesthetic.
This is a frontend-only landing page designed to showcase features, pricing, and product information.

✨ Features

🎨 Design

Modern UI/UX - Clean, professional interface with gradient accents
Fully Responsive - Works perfectly on mobile, tablet, and desktop
Smooth Animations - Subtle hover effects and transitions
Dark Theme - Sleek dark mode design with blue/cyan gradients

📄 Sections

Hero Section - Eye-catching header with CTA
Features Showcase - 5+ AI-powered features with code examples
Pricing Plans - 3-tier pricing (Starter, Professional, Enterprise)
Footer - Social links, navigation, and legal links

🛠️ Technical

React Components - Modular, reusable component architecture
Tailwind CSS - Utility-first styling for rapid development
Lucide Icons - Modern, consistent icon set
SVG Logo - Custom animated logo
SEO Ready - Semantic HTML structure

🚀 Tech Stack

React 18.x - JavaScript library for UI
Tailwind CSS - Utility-first CSS framework
Lucide React - Icon library
React Router - Client-side routing (if needed)

📦 Installation
Prerequisites

Node.js 16.x or higher
npm or yarn

Setup
bash# Clone the repository
git clone https://github.com/AGpeter2018/codablock-landing.git
cd codablock-landing

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
The app will open at http://localhost:3000

📁 Project Structure
codablock-landing/
├── public/
│   ├── favicon.svg          # App logo/icon
│   ├── index.html           # HTML template
│   └── manifest.json        # PWA manifest
│
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Features.jsx     # Features showcase
│   │   ├── Pricing.jsx      # Pricing plans
│   │   ├── Footer.jsx       # Footer component
│   │   └── Navbar.jsx       # Navigation bar (if any)
│   │
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
│
├── tailwind.config.js       # Tailwind configuration
├── package.json
└── README.md