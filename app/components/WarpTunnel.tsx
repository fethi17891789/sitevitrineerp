"use client";

import { motion } from "framer-motion";

interface WarpTunnelProps {
  isActive: boolean;
  onComplete: () => void;
}

export default function WarpTunnel({ isActive, onComplete }: WarpTunnelProps) {
  if (!isActive) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-surface"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    />
  );
}
