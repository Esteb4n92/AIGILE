"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ============================================
// TRANSLATIONS
// ============================================
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.why": "Why AIGILE",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.cta": "Talk Now",

    // Hero
    "hero.badge": "AUTOMATION AND DEVELOPMENT AGENCY",
    "hero.title1": "Design that sells.",
    "hero.title2": "Technology that scales.",
    "hero.subtitle": "We build custom landing pages, automations, and dashboards for businesses that want to grow faster.",
    "hero.cta.primary": "Start Project",
    "hero.cta.secondary": "View Work",

    // Services
    "services.badge": "SERVICES",
    "services.title": "Everything you need, nothing you don't.",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Fast, modern landing pages optimized to convert visits into customers.",
    "services.landing.f1": "Custom premium design",
    "services.landing.f2": "SEO optimized",
    "services.landing.f3": "Ultra-fast loading",
    "services.landing.f4": "Integrations & analytics",
    "services.automation.title": "Automations",
    "services.automation.description": "Smart workflows that save hours every week.",
    "services.automation.f1": "n8n, Make, Zapier",
    "services.automation.f2": "AI integrations",
    "services.automation.f3": "CRM & sales",
    "services.automation.f4": "Automated reports",
    "services.dashboard.title": "Dashboards",
    "services.dashboard.description": "Visualize your business with real-time data.",
    "services.dashboard.f1": "Custom KPIs",
    "services.dashboard.f2": "Connect your data sources",
    "services.dashboard.f3": "Responsive design",
    "services.dashboard.f4": "Multi-user access",

    // Why AIGILE
    "why.badge": "WHY AIGILE",
    "why.title": "An agile agency. Product mindset.",
    "why.agile.title": "Agile Delivery",
    "why.agile.description": "Projects in days, not months. Speed without sacrificing quality.",
    "why.design.title": "Premium Design",
    "why.design.description": "Every pixel crafted. Luxury aesthetic that highlights your brand.",
    "why.tech.title": "Solid Technology",
    "why.tech.description": "Modern stack, clean code, solutions that scale with you.",
    "why.communication.title": "Direct Communication",
    "why.communication.description": "No intermediaries. Clear communication and measurable results.",

    // About
    "about.badge": "ABOUT ME",
    "about.title": "Elegant technology Real results",
    "about.p1": "I'm Esteban, a developer focused on creating modern, fast, and visually memorable digital experiences.",
    "about.p2": "I'm not interested in filling the internet with generic websites. Every project at AIGILE is built with intention: clean design, solid technology, and an experience that truly connects with people.",
    "about.cta": "Let's build something",

    // Projects
    "projects.badge": "PROJECTS",
    "projects.title": "Demos and recent projects.",
    "projects.view": "View Project",
    "projects.p1.category": "LANDING PAGE",
    "projects.p1.title": "Creative Studio",
    "projects.p1.description": "Premium landing page for a creative agency with smooth animations and modern design.",
    "projects.p2.category": "AUTOMATION",
    "projects.p2.title": "AI + CRM Flow",
    "projects.p2.description": "Automated workflow integrating AI with CRM for lead qualification and follow-up.",
    "projects.p3.category": "DASHBOARD",
    "projects.p3.title": "Live Analytics",
    "projects.p3.description": "Real-time business analytics dashboard with custom KPIs and data visualization.",

    // CTA
    "cta.title": "Ready to take off?",
    "cta.subtitle": "Let's talk about your project. Response in less than 24h.",
    "cta.button": "Write on WhatsApp",

    // Footer
    "footer.copyright": "All rights reserved.",
  },
  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.why": "Por qué AIGILE",
    "nav.about": "Sobre mí",
    "nav.projects": "Trabajos",
    "nav.cta": "Hablemos",

    // Hero
    "hero.badge": "AGENCIA DE AUTOMATIZACIÓN Y DESARROLLO",
    "hero.title1": "Diseño que vende.",
    "hero.title2": "Tecnología que escala.",
    "hero.subtitle": "Creamos landing pages, automatizaciones y dashboards para negocios que quieren vender más y operar mejor.",
    "hero.cta.primary": "Iniciar Proyecto",
    "hero.cta.secondary": "Ver Trabajos",

    // Services
    "services.badge": "SERVICIOS",
    "services.title": "Todo lo que necesitas, nada que no.",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Landing pages rápidas, modernas y optimizadas para convertir visitas en clientes.",
    "services.landing.f1": "Diseño premium personalizado",
    "services.landing.f2": "Optimizado para SEO",
    "services.landing.f3": "Carga ultra rápida",
    "services.landing.f4": "Integraciones y analytics",
    "services.automation.title": "Automatizaciones",
    "services.automation.description": "Flujos inteligentes que ahorran horas cada semana.",
    "services.automation.f1": "n8n, Make, Zapier",
    "services.automation.f2": "Integraciones con IA",
    "services.automation.f3": "CRM y ventas",
    "services.automation.f4": "Reportes automáticos",
    "services.dashboard.title": "Dashboards",
    "services.dashboard.description": "Visualiza tu negocio con datos en tiempo real.",
    "services.dashboard.f1": "KPIs personalizados",
    "services.dashboard.f2": "Conecta tus fuentes de datos",
    "services.dashboard.f3": "Diseño responsivo",
    "services.dashboard.f4": "Acceso multi-usuario",

    // Why AIGILE
    "why.badge": "POR QUÉ AIGILE",
    "why.title": "Una agencia ágil. Mentalidad de producto.",
    "why.agile.title": "Entrega Ágil",
    "why.agile.description": "Proyectos en días, no meses. Velocidad sin sacrificar calidad.",
    "why.design.title": "Diseño Premium",
    "why.design.description": "Cada pixel cuidado. Estética de lujo que destaca tu marca.",
    "why.tech.title": "Tecnología Sólida",
    "why.tech.description": "Stack moderno, código limpio, soluciones que escalan contigo.",
    "why.communication.title": "Comunicación Directa",
    "why.communication.description": "Sin intermediarios. Comunicación clara y resultados medibles.",

    // About
    "about.badge": "SOBRE MÍ",
    "about.title": "Tecnología elegante Resultados reales",
    "about.p1": "Soy Esteban, desarrollador enfocado en crear experiencias digitales modernas, rápidas y visualmente memorables.",
    "about.p2": "No me interesa llenar internet de páginas genéricas. Cada proyecto en AIGILE se construye con intención: diseño limpio, tecnología sólida y una experiencia que realmente conecte con las personas.",
    "about.cta": "Construyamos algo",

    // Projects
    "projects.badge": "TRABAJOS",
    "projects.title": "Demos y proyectos recientes.",
    "projects.view": "Ver Proyecto",
    "projects.p1.category": "LANDING PAGE",
    "projects.p1.title": "Estudio Creativo",
    "projects.p1.description": "Landing premium para agencia creativa con animaciones fluidas y diseño moderno.",
    "projects.p2.category": "AUTOMATIZACIÓN",
    "projects.p2.title": "IA + CRM Flow",
    "projects.p2.description": "Flujo automatizado integrando IA con CRM para calificación de leads y seguimiento.",
    "projects.p3.category": "DASHBOARD",
    "projects.p3.title": "Analytics en Vivo",
    "projects.p3.description": "Dashboard de analytics de negocio en tiempo real con KPIs personalizados.",

    // CTA
    "cta.title": "¿Listo para despegar?",
    "cta.subtitle": "Hablemos de tu proyecto. Respuesta en menos de 24h.",
    "cta.button": "Escribir por WhatsApp",

    // Footer
    "footer.copyright": "Todos los derechos reservados.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("aigile-language") as Language;
    if (saved && (saved === "en" || saved === "es")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("aigile-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-primary/50 transition-all duration-200 text-xs font-medium text-muted-foreground hover:text-foreground"
      aria-label="Toggle language"
    >
      <span className={language === "es" ? "text-primary" : ""}>ES</span>
      <span className="text-border">/</span>
      <span className={language === "en" ? "text-primary" : ""}>EN</span>
    </button>
  );
}
