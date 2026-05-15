"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CALENDLY_LINK, aboutContent } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import { FadeIn } from "@/components/animations";

/**
 * About Section
 * 
 * Two-column layout with text on left and image on right.
 */
export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="inline-block text-xs font-medium tracking-widest text-primary/80 mb-4">
                {t("about.badge")}
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                <span className="text-foreground">{t("about.title").split(" ").slice(0, -1).join(" ")} </span>
                <span className="text-gradient-gold">{t("about.title").split(" ").slice(-1)}.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.p1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.p2")}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  {t("about.cta")}
                  <ArrowRight 
                    size={16} 
                    className="group-hover:translate-x-1 transition-transform" 
                  />
                </Link>
              </motion.div>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <FadeIn direction="left" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative max-w-sm mx-auto lg:max-w-none"
              >
                {/* Ambient glow — gold tint matching brand */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent rounded-3xl blur-2xl" />

                {/* Outer ring border with gold shimmer */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-border to-primary/10" />

                {/*
                  * Image container — square ratio crops ~25% from bottom.
                  * object-[center_5%] anchors the head at the top with a small offset.
                  *
                  * TO ADJUST THE CROP:
                  *   - More crop (show less body): use aspect-[4/3] or aspect-[3/2]
                  *   - Less crop (show more body): use aspect-[4/5] or aspect-[3/4]
                  *   - Shift image up/down:  change object-[center_5%] percentage (higher % = lower in frame)
                  */}
                <div className="relative aspect-[1/1] rounded-2xl overflow-hidden">
                  <Image
                    src={aboutContent.image}
                    alt={aboutContent.imageAlt}
                    fill
                    className="object-cover object-[center_5%]"
                    sizes="(max-width: 768px) 90vw, 45vw"
                    priority
                    quality={90}
                  />

                  {/* Cinematic bottom fade — darkens background, subject stands out */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />

                  {/* Subtle left/right vignette */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
