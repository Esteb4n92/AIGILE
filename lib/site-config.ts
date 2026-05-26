/**
 * ============================================
 * AIGILE - Site Configuration
 * ============================================
 * 
 * This file contains all editable content for the AIGILE landing page.
 * Edit the values below to customize your site.
 * 
 * STRUCTURE:
 * - siteConfig: General site info, links, social media
 * - heroContent: Hero section text and CTAs
 * - servicesContent: Services section cards
 * - whyContent: "Why AIGILE" section features
 * - aboutContent: About section text
 * - projectsContent: Demo projects / portfolio items
 * - ctaContent: Call-to-action section
 * - footerContent: Footer links and copyright
 */

// ============================================
// EDIT WHATSAPP LINK HERE
// ============================================
export const WHATSAPP_LINK = "https://wa.me/573004788251"; // Replace with your WhatsApp number
// ============================================
// EDIT CALENDLY LINK HERE
// ============================================
export const CALENDLY_LINK = "https://calendly.com/estebanvillawolk/reunion-con-aigile"; // Replace with your Calendly link

// ============================================
// SOCIAL LINKS - EDIT HERE
// ============================================
export const socialLinks = {
  instagram: "https://www.instagram.com/esteb4n.v/", // Edit Instagram link
  linkedin: "https://www.linkedin.com/in/estebanvillalo", // Edit LinkedIn link
  github: "https://github.com/Esteb4n92", // Edit GitHub link
};

// ============================================
// SITE CONFIGURATION
// ============================================
export const siteConfig = {
  name: "AIGILE",
  tagline: "MICRO-AGENCIA TECNOLÓGICA",
  description: "Premium landing pages, automations, and dashboards. Built with precision for brands that don't settle.",
};

// ============================================
// HERO SECTION - EDIT TEXT HERE
// ============================================
export const heroContent = {
  badge: "MICRO-AGENCIA TECNOLÓGICA",
  // Edit the main title (supports line breaks)
  titleLine1: "Design that sells.",
  titleLine2: "Technology that scales.",
  // Edit subtitle/description
  subtitle: "Landing pages, automations, and custom dashboards. Built with precision for brands that don't settle.",
  // Edit CTA buttons
  primaryCTA: {
    text: "Start Project",
    link: CALENDLY_LINK,
  },
  secondaryCTA: {
    text: "View Work",
    link: "#projects",
  },
};

// ============================================
// SERVICES SECTION - EDIT CARDS HERE
// ============================================
export const servicesContent = {
  badge: "SERVICES",
  title: "Everything you need, nothing you don't.",
  services: [
    {
      icon: "layout", // Options: "layout", "zap", "barChart"
      title: "Landing Pages",
      description: "High-impact sites that convert visitors into customers.",
      features: [
        "Custom premium design",
        "SEO optimized",
        "Ultra-fast loading",
        "Integrations & analytics",
      ],
    },
    {
      icon: "zap",
      title: "Automations",
      description: "Smart workflows that save hours every week.",
      features: [
        "n8n, Make, Zapier",
        "AI integrations",
        "CRM & sales",
        "Automated reports",
      ],
    },
    {
      icon: "barChart",
      title: "Dashboards",
      description: "Visualize your business with real-time data.",
      features: [
        "Custom KPIs",
        "Connect your data sources",
        "Responsive design",
        "Multi-user access",
      ],
    },
  ],
};

// ============================================
// WHY AIGILE SECTION - EDIT FEATURES HERE
// ============================================
export const whyContent = {
  badge: "WHY AIGILE",
  title: "An agile agency. Product mindset.",
  features: [
    {
      icon: "rocket",
      title: "Agile Delivery",
      description: "Projects in days, not months. Speed without sacrificing quality.",
    },
    {
      icon: "sparkles",
      title: "Premium Design",
      description: "Every pixel crafted. Luxury aesthetic that highlights your brand.",
    },
    {
      icon: "code",
      title: "Solid Technology",
      description: "Modern stack, clean code, solutions that scale with you.",
    },
    {
      icon: "users",
      title: "Direct Communication",
      description: "No intermediaries. Clear communication and measurable results.",
    },
  ],
};

// ============================================
// ABOUT SECTION - EDIT TEXT AND IMAGE HERE
// ============================================
export const aboutContent = {
  badge: "ABOUT ME",
  title: "I build what you imagine.",
  // Edit the about paragraphs
  paragraphs: [
    "I'm a developer and designer passionate about creating digital experiences that combine minimalist aesthetics with robust technology. Behind AIGILE is an obsession: making every project feel handcrafted and work like a machine.",
    "I work directly with each client. No huge teams, no slow processes. Just precise solutions, delivered on time.",
  ],
  ctaText: "Learn more",
  ctaLink: CALENDLY_LINK,
  // ============================================
  // CHANGE ABOUT IMAGE HERE
  // ============================================
  // Place your image in /public/images/ and update the path below
  // The image will automatically fit using object-cover styling
  // ============================================
  // TO REPLACE THE PROFILE IMAGE IN THE FUTURE:
  // 1. Place your new image in /public/
  // 2. Update the path below (e.g. "/your-new-photo.jpg")
  // ============================================
  image: "/foto-perfil-esteban.jpeg",
  imageAlt: "Esteban Villalo — AIGILE Founder",
};

// ============================================
// PROJECTS SECTION - ADD DEMO PROJECTS HERE
// ============================================
export const projectsContent = {
  badge: "PROJECTS",
  title: "Demos and recent projects.",
  // ============================================
  // ADD DEMO PROJECT HERE
  // ============================================
  // Copy the template below and paste it to add more projects
  // Each project needs: category, title, image, link, technologies
  projects: [
    {
      category: "LANDING PAGE",
      title: "Creative Studio",
      description: "Premium landing page for a creative agency with smooth animations and modern design.",
      // Place project images in /public/images/projects/
      image: "/images/projects/project-1.jpg",
      // Add link to live demo or leave empty
      link: "https://example.com/demo-1",
      technologies: ["React", "Tailwind", "Framer Motion"],
    },
    {
      category: "AUTOMATION",
      title: "AI + CRM Flow",
      description: "Automated workflow integrating AI with CRM for lead qualification and follow-up.",
      image: "/images/projects/project-2.jpg",
      link: "https://example.com/demo-2",
      technologies: ["n8n", "OpenAI", "HubSpot"],
    },
    {
      category: "DASHBOARD",
      title: "Live Analytics",
      description: "Real-time business analytics dashboard with custom KPIs and data visualization.",
      image: "/images/projects/project-3.jpg",
      link: "https://github.com/Esteb4n92/Portafolio-de-analitica.git",
      technologies: ["Next.js", "Chart.js", "Supabase"],
    },
    // ============================================
    // ADD MORE PROJECTS BELOW (copy template above)
    // ============================================
  ],
};

// ============================================
// CTA SECTION - EDIT TEXT HERE
// ============================================
export const ctaContent = {
  title: "Ready to take off?",
  subtitle: "Let's talk about your project. Response in less than 24h.",
  buttonText: "Write on WhatsApp",
  buttonLink: WHATSAPP_LINK,
};

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why AIGILE", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

// ============================================
// FOOTER CONTENT
// ============================================
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} AIGILE. All rights reserved.`,
};
