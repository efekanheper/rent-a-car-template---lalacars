"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionData } from "@/constans";
import {
  FaCarSide,
  FaTools,
  FaUserClock,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const getIconForService = (index: number) => {
  const icons = [
    <FaCarSide key="car" className="text-2xl text-green" />,
    <FaTools key="tools" className="text-2xl text-green" />,
    <FaUserClock key="clock" className="text-2xl text-green" />,
    <FaShieldAlt key="shield" className="text-2xl text-green" />,
  ];
  return icons[index % icons.length];
};

const ServicesAccordion = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      // GSAP animasyonu
      gsap.from(".service-image", {
        duration: 1,
        opacity: 0,
        y: 50,
        scale: 0.9,
        ease: "power3.out",
      });
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mt-8 font-poppins bg-[#eaede7]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center justify-center gap-12 rounded-3xl p-10 "
      >
        <div className="w-full md:w-1/2">
          <Image
            alt="Car services"
            src="/aboutus/aboutus.jpg"
            width={600}
            height={700}
            className="service-image object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        <div className="w-full md:w-1/2">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-btncolor mb-8"
            variants={itemVariants}
          >
            Our Premium Services
          </motion.h2>

          <Accordion type="single" collapsible className="w-full">
            {accordionData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={item.value}
                  className="  rounded-xl mb-4 hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 flex items-center gap-4 text-lg hover:no-underline">
                    <div className="flex items-center gap-3">
                      {getIconForService(index)}
                      <span className="font-medium text-btncolor">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-green text-lg mt-1 flex-shrink-0" />
                      <p className="text-base leading-relaxed text-footer">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesAccordion;
