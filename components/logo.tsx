"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * AIGILE Logo Component
 * 
 * Uses the actual AIGILE logo image.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src="/images/logo.png"
        alt="AIGILE"
        width={120}
        height={32}
        style={{ height: '32px', width: 'auto' }}
        priority
      />
    </motion.div>
  );
}
