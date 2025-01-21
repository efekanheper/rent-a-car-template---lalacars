import React from "react";
import SectionBg from "../_components/SectionBg";
import HomeServices from "../_components/Sections/HomeServices";
import ServicesAccordion from "../_components/Sections/ServicesAccordion";

const ServicesPage = () => {
  return (
    <div>
      {/* Section Background */}

      <SectionBg source="Home" title="Service" />

      {/* Accordion Section */}
      <div className="flex justify-center items-center mt-10 mb-12">
        <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <ServicesAccordion />
          </div>
        </div>
      </div>

      {/* Home Services Section */}
      <div className="flex justify-center items-center mt-12 mb-16">
        <div className="max-w-full w-full px-4 sm:px-6 lg:px-8">
          <HomeServices />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
