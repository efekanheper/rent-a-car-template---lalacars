"use client";

import { motion } from "framer-motion";
import HeroMain from "../_components/Hero/HeroMain";

import OurFleets from "../_components/Sections/OurFleets";

import HomeAbout from "../_components/Sections/HomeAbout";
import HomeServices from "../_components/Sections/HomeServices";

export default function Home() {
  return (
    <div>
      <HeroMain />
      <div className="h-[550px] md:h-[250px] lg:h-[150px] xl:h-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <OurFleets />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HomeAbout />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <HomeServices />
      </motion.div>
    </div>
  );
}
