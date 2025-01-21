"use client";
import { Input } from "@/components/ui/input";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const ContactSection = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "#" },
    { icon: <Github size={20} />, url: "#" },
    { icon: <Twitter size={20} />, url: "#" },
    { icon: <Instagram size={20} />, url: "#" },
  ];

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-b from-background to-background/80"
    >
      <div className="container mx-auto">
        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-bold text-center mb-16 font-poppins text-btncolor"
        >
          Lets Connect
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {/* Contact Form Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-btncolor p-8 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-semibold mb-8 text-whitetext font-poppins">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="bg-white/10 border-none text-whitetext placeholder:text-white/60 rounded-xl"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white/10 border-none text-whitetext placeholder:text-white/60 rounded-xl"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-none text-whitetext placeholder:text-white/60 rounded-xl"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-white/10 border-none rounded-xl p-3 text-whitetext placeholder:text-white/60 resize-none"
              />
              <InteractiveHoverButton
                text="Send Message"
                className=" py-3 text-lg font-poppins font-semibold bg-whitetext text-btncolor"
              >
                send
              </InteractiveHoverButton>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-btncolor p-8 rounded-3xl shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-whitetext font-poppins">
                Contact Information
              </h2>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="bg-white/10 p-3 rounded-xl mr-4">
                    <Phone className="text-whitetext" size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call Us</p>
                    <p className="text-whitetext">+90 553 458 9684</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="bg-white/10 p-3 rounded-xl mr-4">
                    <Mail className="text-whitetext" size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email Us</p>
                    <p className="text-whitetext">efekanheper@icloud.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="bg-white/10 p-3 rounded-xl mr-4">
                    <MapPin className="text-whitetext" size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-whitetext">Izmır, Turkey</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-white/60 mb-4">Follow Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 p-3 rounded-xl text-whitetext hover:bg-white/20 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
