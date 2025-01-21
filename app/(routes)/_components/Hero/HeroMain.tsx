"use client";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliderData } from "@/constans";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import HeroForm from "./HeroForm";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import gsap from "gsap";
import { motion } from "framer-motion";

const HeroMain = () => {
  useEffect(() => {
    // GSAP animasyonu - yazılar için
    gsap.from(".hero-content", {
      duration: 1.5,
      y: 120,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.3,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative px-4 md:px-16 rounded-4xl"
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {sliderData.map((slider, index) => (
            <CarouselItem
              key={index}
              className="relative h-[600px] md:h-[800px] bg-center rounded-4xl"
              style={{
                backgroundImage: `url(${slider.image})`,
                backgroundSize: "cover",
                backgroundPosition: "cover",
              }}
            >
              <div className="absolute inset-0 rounded-4xl flex items-center justify-center text-center bg-black bg-opacity-30">
                <div className="p-6 max-w-5xl">
                  <motion.h1
                    className="hero-content text-whitetext text-2xl md:text-4xl lg:text-6xl mb-24 font-semibold font-poppins flex items-center justify-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  >
                    {slider.label}
                  </motion.h1>

                  <motion.div
                    className="hero-content flex flex-row justify-center items-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  >
                    <div className="">
                      <Link href={slider.href}></Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: "easeOut",
        }}
        transformTemplate={({ y }) => `translate3d(0, ${y}px, 0)`}
      >
        <HeroForm />
      </motion.div>
    </motion.div>
  );
};

export default HeroMain;
