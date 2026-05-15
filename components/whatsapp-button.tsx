"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site-config";

/**
 * Floating WhatsApp Button
 * 
 * Fixed position button that appears in the bottom-right corner.
 * Links to WhatsApp for quick contact.
 * 
 * ============================================
 * EDIT WHATSAPP LINK HERE
 * ============================================
 * Change the link in lib/site-config.ts (WHATSAPP_LINK)
 */
export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-40" />
          
          {/* Button */}
          <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#22c55e] rounded-full shadow-lg transition-colors">
            <MessageCircle className="w-6 h-6 text-white" fill="white" />
          </div>
          
          {/* Pulse animation ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 border-2 border-[#25D366] rounded-full"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
