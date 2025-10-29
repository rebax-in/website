# REBAX - Real Estate Platform Website

A modern Vue.js website for REBAX real estate platform built with TypeScript, Pug templating, and Less CSS preprocessing.

## 🚀 Features

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Pug** templating engine for clean HTML
- **Less** CSS preprocessor with variables
- **Vue Router** for client-side routing
- **Responsive design** with mobile-first approach
- **Component-based architecture**

## 📱 Pages

### Home Page
- Hero sections with vision and app showcases
- Client testimonials and statistics  
- Promo video section
- Features carousel
- "Why it matters" section

### Pricing Page
- Tab-based pricing for Agents/Agencies/Builders
- Free and Pro package options
- FAQ section
- Client testimonials

### Product Page  
- Detailed REBAX platform information
- App screenshots gallery
- Pain points and solutions
- Key features showcase
- Comprehensive FAQ

### About Page
- Company overview and brief
- Vision and mission statements
- Team member profiles
- Core values and highlights

## 🛠️ Tech Stack

- **Framework**: Vue.js 3
- **Language**: TypeScript
- **Templating**: Pug
- **Styling**: Less
- **Build Tool**: Vite
- **Routing**: Vue Router

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website-1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── HeaderNav.vue    # Navigation header
│   └── FooterSection.vue # Footer component
├── views/               # Page components
│   ├── HomeView.vue     # Home page
│   ├── PricingView.vue  # Pricing page  
│   ├── ProductView.vue  # Product page
│   └── AboutView.vue    # About page
├── router/              # Vue Router configuration
│   └── index.ts         # Route definitions
├── styles/              # Global styles and variables
│   ├── variables.less   # Less variables
│   └── main.less        # Global styles
├── App.vue              # Root component
└── main.ts              # Application entry point
```

## 🎨 Design System

### Colors
- Primary: `#333` (Dark gray)
- Secondary: `#666` (Medium gray)  
- Background: `#f5f5f5` (Light gray)
- Black sections: `#000` for hero areas
- White: `#ffffff` for content areas

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Base Size: 16px
- Scale: 14px (small) to 32px (xxl)

### Spacing
- XS: 8px
- SM: 16px  
- MD: 24px
- LG: 32px
- XL: 48px

### Breakpoints
- Mobile: 576px
- Tablet: 768px
- Desktop: 992px
- Large Desktop: 1200px

## 🧩 Components

### HeaderNav
- Responsive navigation with mobile menu
- Active route highlighting
- Logo and authentication buttons

### FooterSection  
- Company information and links
- Social media links
- Copyright information

### Page Views
Each page is structured with semantic sections following the wireframe designs:
- Hero sections with clear calls-to-action
- Content sections with proper typography hierarchy
- Interactive elements like tabs and accordions
- Responsive grid layouts

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first CSS approach
- Flexible grid layouts using CSS Grid
- Responsive typography scaling
- Touch-friendly interactive elements
- Collapsible mobile navigation

## 🔧 Development

### Code Style
- TypeScript for type safety
- Pug for clean, semantic HTML
- Less with variables for maintainable CSS
- Composition API for reactive logic

### Build Process
- Vite for fast development and optimized builds
- TypeScript compilation
- Pug template processing  
- Less compilation with variable injection
- Asset optimization and bundling

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email info@rebax.com or create an issue in the repository.