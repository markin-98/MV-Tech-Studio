"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "scale";
type Target = Record<string, number>;

const variants: Record<Dir, { hidden: Target; show: Target }> = {
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
};

export default function Reveal({
  children,
  delay = 0,
  dir = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  dir?: Dir;
  className?: string;
}) {
  const v = variants[dir];
  return (
    <motion.div
      initial={v.hidden}
      whileInView={v.show}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
