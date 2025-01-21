"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionBg from "../_components/SectionBg";
import HomeAbout from "../_components/Sections/HomeAbout";
import { InfiniteCarouselLogo } from "../_components/InfiniteCarouselLogo";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* SectionBg - Efekt eklenmedi */}
      <SectionBg source="Home" title="About Us" />

      {/* HomeAbout Section */}
      <motion.section
        className="container mx-auto px-4 py-12 md:py-16"
        initial="hidden"
        whileInView="visible" // Scroll ile tetikleme
        viewport={{ once: true, amount: 0.2 }} // %20 görünür olduğunda başlasın
        variants={fadeInUp}
      >
        <HomeAbout />
      </motion.section>

      {/* Logo Carousel Section */}
      <motion.section
        className="py-12 md:py-16"
        initial="hidden"
        whileInView="visible" // Scroll ile tetikleme
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <InfiniteCarouselLogo />
      </motion.section>
    </div>
  );
};

export default AboutPage;
