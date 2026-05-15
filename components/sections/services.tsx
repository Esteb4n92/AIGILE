"use client";

import { motion } from "framer-motion";
import { Layout, Zap, BarChart3, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animations";

/**
 * Services Section
 * 
 * Displays three service cards with icons and feature lists.
 */
export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Layout,
      titleKey: "services.landing.title",
      descKey: "services.landing.description",
      features: [
        "services.landing.f1",
        "services.landing.f2",
        "services.landing.f3",
        "services.landing.f4",
      ],
    },
    {
      icon: Zap,
      titleKey: "services.automation.title",
      descKey: "services.automation.description",
      features: [
        "services.automation.f1",
        "services.automation.f2",
        "services.automation.f3",
        "services.automation.f4",
      ],
    },
    {
      icon: BarChart3,
      titleKey: "services.dashboard.title",
      descKey: "services.dashboard.description",
      features: [
        "services.dashboard.f1",
        "services.dashboard.f2",
        "services.dashboard.f3",
        "services.dashboard.f4",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <span className="inline-block text-xs font-medium tracking-widest text-primary/80 mb-4">
              {t("services.badge")}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              {t("services.title")}
            </h2>
          </FadeIn>
        </div>

        {/* Service Cards Grid */}
        <FadeInStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <FadeInStaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-border/80 transition-all h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(service.descKey)}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((featureKey, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
