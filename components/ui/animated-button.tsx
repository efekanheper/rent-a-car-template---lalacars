"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface AnimatedButtonProps {
  text: string;
  className?: string;
}

const AnimatedButton = ({ text, className }: AnimatedButtonProps) => {
  return (
    <motion.button
      whileHover="hover"
      className={`relative overflow-hidden rounded-full bg-[#1B1B1B] px-8 py-4 group ${className}`}
    >
      {/* Ana içerik */}
      <div className="relative flex items-center gap-3">
        {/* Text container */}
        <div className="relative overflow-hidden">
          <motion.span
            className="inline-block text-white"
            variants={{
              hover: {
                y: "-100%",
                transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
              },
            }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-white"
            variants={{
              initial: { y: "100%" },
              hover: {
                y: 0,
                transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
              },
            }}
          >
            {text}
          </motion.span>
        </div>

        {/* Icon container */}
        <div className="relative w-7 h-7">
          <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center">
            <motion.div
              variants={{
                hover: {
                  rotate: 360,
                  transition: { duration: 0.6, ease: [0.7, 0, 0.3, 1] },
                },
              }}
            >
              <FiArrowUpRight className="text-black text-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default AnimatedButton;
