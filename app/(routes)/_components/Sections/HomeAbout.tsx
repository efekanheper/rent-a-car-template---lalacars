import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const HomeAbout = () => {
  return (
    <div className="container mx-auto py-20 px-4 font-poppins">
      {/* Services Section */}
      <div className="flex flex-col lg:flex-row items-start gap-16 mb-40">
        <div className="w-full lg:w-1/3">
          <h1 className="text-4xl lg:text-5xl font-bold text-btncolor leading-tight">
            Our Services <br />
            and Benefits
          </h1>
          <div className="mt-8"></div>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Maintenance & Support */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-btncolor pb-2 border-b border-gray-200">
              Maintenance & Support
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">Included Maintenance</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">Unlimited Mileage</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">24/7 Support Line</p>
              </div>
            </div>
          </div>

          {/* Financial Flexibility */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-btncolor pb-2 border-b border-gray-200">
              Financial Flexibility
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">Weekly Payments</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">Flexible Earnings</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">No Credit Check Required</p>
              </div>
            </div>
          </div>

          {/* Cost Control */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-btncolor pb-2 border-b border-gray-200">
              Cost Control
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">Fleet Fuel Card Discounts</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">100% Online Management</p>
              </div>
            </div>
          </div>

          {/* Insurance & Protection */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-btncolor pb-2 border-b border-gray-200">
              Insurance & Protection
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">Comprehensive Insurance</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-btncolor" />
                <p className="text-footer">Replacement Vehicle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-btncolor mb-6">
            How It Works?
          </h1>
          <p className="text-2xl text-footer max-w-3xl mx-auto">
            Work with us with flexibility and earning potential at your
            preferred time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">
          {/* Background Numbers */}
          <div className="absolute inset-0 flex justify-between items-center -z-10 opacity-10">
            <span className="text-[240px] font-bold text-btncolor">1</span>
            <span className="text-[240px] font-bold text-btncolor">2</span>
            <span className="text-[240px] font-bold text-btncolor">3</span>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-8">
              <Image
                src="/service/services1.svg"
                alt="Contact us"
                width={120}
                height={120}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-bold text-btncolor mb-4">
              Contact Us
            </h3>
            <p className="text-footer text-lg">
              Get in touch with our team to start your journey
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-8">
              <Image
                src="/service/services2.svg"
                alt="Send documents"
                width={120}
                height={120}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-bold text-btncolor mb-4">
              Send Required Documents
            </h3>
            <p className="text-footer text-lg">
              Complete your application with necessary documentation
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-8">
              <Image
                src="/service/services3.svg"
                alt="Get your car"
                width={120}
                height={120}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-bold text-btncolor mb-4">
              Get Your Car
            </h3>
            <p className="text-footer text-lg">
              Start driving with our premium vehicles
            </p>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <InteractiveHoverButton
            text="Apply Today"
            className="bg-btncolor  text-whitetext  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
