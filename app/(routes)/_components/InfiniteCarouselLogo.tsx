"use client";

import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Массив с логотипами
const allLogos = [
  { name: "Logo 1", id: 1, img: "/logo/l1.png" },
  { name: "Logo 2", id: 2, img: "/logo/l2.png" },
  { name: "Logo 3", id: 3, img: "/logo/l3.png" },
  { name: "Logo 4", id: 4, img: "/logo/l4.png" },
  { name: "Logo 5", id: 5, img: "/logo/l5.png" },
  { name: "Logo 6", id: 6, img: "/logo/l6.png" },
];

export function InfiniteCarouselLogo() {
  return (
    <div className="space-y-8 -mt-20 mb-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-12">
        <div className="text-center">
          <GradientHeading variant="secondary">
            Trusted by top car rental brands
          </GradientHeading>
          <GradientHeading
            variant="secondary"
            size="xl"
            className="text-btncolor"
          >
            Drive the best rent with confidence
          </GradientHeading>
        </div>

        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </div>
  );
}
