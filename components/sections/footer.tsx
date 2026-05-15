"use client";

import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";
import { Logo } from "@/components/logo";
import { socialLinks } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import { FadeIn } from "@/components/animations";

/**
 * Footer Section
 * 
 * Contains logo, navigation links, social links, and copyright.
 */
export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.why"), href: "#why" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/">
              <Logo />
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>

              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>

              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              {`© ${new Date().getFullYear()} AIGILE. ${t("footer.copyright")}`}
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
