"use client";
import { headerData } from "@/constans";
import React, { useState, useEffect } from "react";
import HeaderText from "./HeaderText";
import StaggeredDropDown from "./StaggeredDropDown";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Throttle scroll eventi
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const currentScrollPos = window.scrollY;

        // Scroll yönünü kontrol et
        const isScrollingDown = currentScrollPos > prevScrollPos;

        // En üstteyken her zaman göster
        if (currentScrollPos < 10) {
          setIsVisible(true);
        } else {
          setIsVisible(!isScrollingDown);
        }

        setPrevScrollPos(currentScrollPos);
      }, 100);
    };

    // Scroll event listener ekle
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`sticky top-0 z-50 bg-white/10 backdrop-blur-sm py-2 md:py-3 font-poppins 
        transform transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-1 md:py-2 flex items-center justify-between">
        {/* Logo - Sol tarafa yaslanmış */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold bg-gradient-to-r from-btncolor to-green bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            LALACARS
          </h1>
        </div>

        {/* Navigation ve Button Container - Sağa yaslanmış */}
        <div className="flex items-center gap-4 md:gap-10">
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {headerData.map((item, index) => (
              <HeaderText key={index} href={item.href} label={item.label} />
            ))}
          </div>

          {/* Button ve Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            <InteractiveHoverButton
              text="Book A Rental"
              className="hidden sm:inline-flex border-btncolor text-whitetext hover:border-opacity-75 py-1.5 md:py-2"
            />
            <div className="lg:hidden">
              <StaggeredDropDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
