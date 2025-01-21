"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowRight } from "react-feather";

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  className?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex items-center">
        {children}
        <div className="ml-2">
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              times: isHovered ? [0, 0.3, 0.31, 1] : [0, 1],
            }}
          >
            <ArrowRight size={14} className="text-btncolor" />
          </motion.div>
        </div>
      </div>

      {/* Hover background efekti */}
      <motion.div
        animate={{
          width: isHovered ? "100%" : "0%",
        }}
        transition={{
          duration: 0.2,
          ease: [0.6, 0.01, -0.05, 0.9],
        }}
        className="absolute left-0 top-0 h-full bg-gray-200"
      />
    </motion.button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
