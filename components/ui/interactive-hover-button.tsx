"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      ref={ref}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-full border border-btncolor bg-btncolor px-6 py-3 font-semibold text-white",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center gap-2">
        {/* Ana metin animasyonu */}
        <div className="overflow-hidden">
          <motion.span
            key="button-text"
            animate={{
              y: isHovered ? [0, 20, -24, 0] : 0,
              opacity: isHovered ? [1, 0, 0, 1] : 1,
              transition: {
                duration: isHovered ? 0.8 : 0.2,
                ease: "easeInOut",
                times: isHovered ? [0, 0.3, 0.31, 1] : [0, 1],
              },
            }}
            className="z-10 inline-block"
          >
            {text}
          </motion.span>
        </div>

        <div className="flex items-center gap-2">
          {/* Sabit circle */}
          <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green overflow-hidden">
            {/* Ok animasyonu */}
            <motion.div
              animate={{
                y: isHovered ? [0, 20, -24, 0] : 0,
                opacity: isHovered ? [1, 0, 0, 1] : 1,
                transition: {
                  duration: isHovered ? 0.8 : 0.2,
                  ease: "easeInOut",
                  times: isHovered ? [0, 0.3, 0.31, 1] : [0, 1],
                },
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
          className="absolute left-0 top-0 h-full "
        />
      </div>
    </motion.button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
export default InteractiveHoverButton;
