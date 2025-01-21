import { footerData, SocialMediaData } from "@/constans";
import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="h-full w-full font-poppins">
      <footer className="bg-btncolor w-full h-full text-whitetext rounded-t-2xl">
        <div className="container mx-auto px-6 md:px-10 py-12 z-10">
          {/* Üst kısım: LALACARS ve Footer item'ları */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* LALACARS yazısı */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-whitetext tracking-wide">
                LALACARS
              </h1>
            </div>

            {/* Footer item'ları */}
            <div className="font-semibold lg:col-span-8 grid grid-cols-2 ml-8 md:text-xl md:grid-cols-3 gap-6 md:gap-24 lg:ml-96 md:ml-40">
              {footerData.map((section, index) => (
                <FooterItem
                  items={section.items}
                  title={section.title}
                  key={index}
                />
              ))}
            </div>
          </div>

          {/* Alt çizgi */}
          <div className="border border-opacity-10 border-whitetext mt-12"></div>

          {/* Alt kısım: Copyright ve sosyal medya ikonları */}
          <div className="mt-8 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright yazısı */}
            <div className="font-medium text-sm md:text-base lg:text-xl text-footer text-center lg:text-left">
              © 2025 Efekanheper. All rights reserved.
            </div>

            {/* Sosyal medya ikonları */}
            <div className="flex space-x-4">
              {SocialMediaData.map((item, index) => (
                <div
                  key={index}
                  className="p-2 rounded-full bg-footericon hover:bg-opacity-80"
                >
                  <item.icon className="text-xl md:text-2xl"></item.icon>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
