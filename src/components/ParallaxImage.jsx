import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ParallaxImage({ src, alt, className }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={reduceMotion ? undefined : { y, scale: 1.15 }}
    />
  );
}
