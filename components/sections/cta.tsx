"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import { FadeIn } from "@/components/animations";

/**
 * CTA Section
 * 
 * Call-to-action section with gradient background.
 */
export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              <span className="text-gradient-gold">{t("cta.title")}</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10">
              {t("cta.subtitle")}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <MessageCircle size={20} />
                {t("cta.button")}
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
