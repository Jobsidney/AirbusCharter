"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const viewport = { once: true, margin: "-60px 0px -60px 0px" };
const viewportTight = { once: true, margin: "-80px 0px -80px 0px" };
const transition = { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const };
const transitionBounce = { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const };

type BaseRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: BaseRevealProps & { y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealScale({ children, className, delay = 0 }: BaseRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportTight}
      transition={{ ...transitionBounce, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealFromBottom({ children, className, delay = 0 }: BaseRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealSlideLeft({ children, className, delay = 0 }: BaseRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -64 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealSlideRight({ children, className, delay = 0 }: BaseRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 64 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealRotateX({ children, className, delay = 0 }: BaseRevealProps) {
  return (
    <div className={className} style={{ perspective: "1200px" }}>
      <motion.div
        initial={{ opacity: 0, rotateX: -16 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={viewportTight}
        transition={{ ...transition, delay }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

type ScrollRevealClipProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollRevealClip({ children, className }: ScrollRevealClipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <motion.div ref={ref} className={className} style={{ clipPath }}>
      {children}
    </motion.div>
  );
}

export function ScrollRevealBlur({ children, className }: ScrollRevealClipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const filter = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["blur(12px)", "blur(4px)", "blur(0px)"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.6, 1]);

  return (
    <motion.div ref={ref} className={className} style={{ filter, opacity }}>
      {children}
    </motion.div>
  );
}

export function ScrollRevealParallax({ children, className }: ScrollRevealClipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["-4%", "2%", "-4%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

  return (
    <motion.div ref={ref} className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

export function ScrollRevealBlurByPage({ children, className }: ScrollRevealClipProps) {
  const { scrollYProgress } = useScroll();
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"]
  );
  return (
    <motion.div className={className} style={{ filter }}>
      {children}
    </motion.div>
  );
}
