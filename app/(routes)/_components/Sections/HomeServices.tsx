import React from "react";
import SectionTitle from "../SectionTitle";
import { servicesData } from "@/constans";
import Image from "next/image";
import ButtonArrowRight from "./ButtonArrowRight";

const HomeServices = () => {
  return (
    <div className="relative px-4 md:px-12 lg:px-20 xl:px-28 mt-12">
      {/* Arka plan efekti */}
      <div className="absolute inset-0 bg-center bg-no-repeat bg-service-bg opacity-10 rounded-4xl"></div>

      <div className="serviceBg relative rounded-4xl pt-10 pb-20 z-10 mb-8">
        {/* Bölüm başlığı */}
        <SectionTitle
          title=""
          titletwo="Explore our wide range of rental services"
          description="Discover how our services can make your experience seamless."
          titleColor="text-whitetext"
          titletwoColor="text-whitetext"
          descriptionColor="text-footer"
        />

        {/* Hizmet kartları */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bgone group p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 bg-whitetext"
            >
              <div className="flex items-center justify-between">
                <Image
                  alt={service.title}
                  src={service.image}
                  width={70}
                  height={70}
                  className="object-contain"
                />
                <div className="flex-shrink-0 ml-auto">
                  <ButtonArrowRight link="/" />
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <h2 className="font-bold text-lg md:text-xl font-poppins text-btncolor">
                  {service.title}
                </h2>
                <p className="text-sm text-footer font-poppins">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buton */}
      </div>
    </div>
  );
};

export default HomeServices;
