"use client";

import { motion } from "framer-motion";

/**
 * Reusable animation components using Framer Motion
 * 
 * These components provide consistent animations across the site:
 * - FadeIn: Basic fade and slide up animation
 * - FadeInStagger: Container for staggered children animations
 * - ScaleIn: Scale and fade animation
 * - SlideIn: Slide from direction with fade
 */

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.5,
  direction = "up"
}: FadeInProps) {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function FadeInStagger({ 
  children, 
  className = "",
  staggerDelay = 0.1
}: FadeInStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStaggerItem({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({ children, className = "", delay = 0 }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Hover animation wrapper for cards and interactive elements
 */
export function HoverScale({ 
  children, 
  className = "",
  scale = 1.02
}: { 
  children: React.ReactNode; 
  className?: string;
  scale?: number;
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Floating animation for decorative elements
 */
export function Float({ 
  children, 
  className = "",
  duration = 3
}: { 
  children: React.ReactNode; 
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Glow pulse animation for accent elements
 */
export function GlowPulse({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <motion.div
      animate={{ 
        boxShadow: [
          "0 0 20px rgba(234, 179, 8, 0.1)",
          "0 0 40px rgba(234, 179, 8, 0.2)",
          "0 0 20px rgba(234, 179, 8, 0.1)",
        ]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
