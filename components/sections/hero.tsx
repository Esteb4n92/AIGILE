"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CALENDLY_LINK } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import { FadeIn } from "@/components/animations";

/**
 * Hero Section
 * 
 * Main hero with large typography, subtitle, and CTA buttons.
 */
export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.1}>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest text-primary/80 mb-8">
              {t("hero.badge")}
            </span>
          </FadeIn>

          {/* Main Headline */}
          <FadeIn delay={0.2}>
            <h1 className="font-[family-name:var(--font-orbitron)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 uppercase">
              <span className="block text-foreground">{t("hero.title1")}</span>
              <span className="block text-gradient-gold">{t("hero.title2")}</span>
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
                >
                  {t("hero.cta.primary")}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border rounded-full font-medium hover:border-foreground transition-colors"
                >
                  {t("hero.cta.secondary")}
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
