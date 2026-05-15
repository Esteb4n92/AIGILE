"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, Code, Users } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animations";

/**
 * Why AIGILE Section
 * 
 * Displays four feature cards highlighting agency benefits.
 */
export function WhyAigile() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Rocket,
      titleKey: "why.agile.title",
      descKey: "why.agile.description",
    },
    {
      icon: Sparkles,
      titleKey: "why.design.title",
      descKey: "why.design.description",
    },
    {
      icon: Code,
      titleKey: "why.tech.title",
      descKey: "why.tech.description",
    },
    {
      icon: Users,
      titleKey: "why.communication.title",
      descKey: "why.communication.description",
    },
  ];

  return (
    <section id="why" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="inline-block text-xs font-medium tracking-widest text-primary/80 mb-4">
              {t("why.badge")}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              {t("why.title")}
            </h2>
          </FadeIn>
        </div>

        {/* Feature Cards Grid */}
        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <FadeInStaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all h-full"
                >
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    {/* Icon with gradient background */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mb-5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {t(feature.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(feature.descKey)}
                    </p>
                  </div>
                </motion.div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
