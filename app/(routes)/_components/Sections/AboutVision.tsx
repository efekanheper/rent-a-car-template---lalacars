import React from "react";
import SectionTitle from "../SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { missionData } from "@/constans";
import Image from "next/image";
import { FaCarAlt, FaHandsHelping, FaRoute } from "react-icons/fa";

const AboutVision = () => {
  return (
    <div className="w-full">
      <SectionTitle
        title="Vision Mission"
        titletwo="Driving excellence and innovation in car rental services"
      />
      {/* Kapsayıcı div'e justify-center ve items-center eklendi */}
      <div className="flex justify-center items-center w-full mb-20 font-poppins">
        <div className="w-full max-w-screen-lg">
          <Tabs defaultValue="vision" className="w-full">
            <TabsList className="flex justify-center mx-auto font-poppins space-x-4">
              <TabsTrigger
                value="vision"
                className="text-sm px-4 py-2 rounded-full"
              >
                Our Vision
              </TabsTrigger>
              <TabsTrigger
                value="mission"
                className="text-sm px-4 py-2 rounded-full"
              >
                Our Mission
              </TabsTrigger>
              <TabsTrigger
                value="approach"
                className="text-sm px-4 py-2 rounded-full"
              >
                Our Approach
              </TabsTrigger>
            </TabsList>
            {missionData.map((item, index) => (
              <TabsContent
                value={item.keys}
                key={index}
                className="w-full relative mx-auto"
              >
                <div className="w-full flex flex-col md:flex-row items-center justify-center rounded-4xl space-y-6 md:space-y-0 md:space-x-6">
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-col space-y-5 p-4 font-poppins">
                      <h1 className="text-btncolor text-lg md:text-xl mb-2 font-bold font-poppins flex items-center space-x-2">
                        {index === 0 ? (
                          <FaCarAlt />
                        ) : index === 1 ? (
                          <FaHandsHelping />
                        ) : (
                          <FaRoute />
                        )}
                        <span>{item.title}</span>
                      </h1>
                      <h1 className="text-4xl font-bold text-btncolor">
                        {index === 0
                          ? "Redefining Car Rental Standards"
                          : index === 1
                          ? "Committed to Exceptional Service"
                          : "A Customer-Centric Approach"}
                      </h1>
                      <p className="text-sm md:text-lg font-light text-footer">
                        {index === 0
                          ? "Our vision is to lead the car rental industry by providing reliable, convenient, and innovative services tailored to meet the evolving needs of our customers."
                          : index === 1
                          ? "Our mission is to deliver top-notch car rental experiences by focusing on safety, customer satisfaction, and continuous improvement."
                          : "Our approach centers around understanding our customers' unique requirements, ensuring seamless booking, and maintaining a diverse fleet of well-maintained vehicles."}
                      </p>
                      <p className="text-sm md:text-lg font-poppins text-footer">
                        {index === 0
                          ? "By embracing technology and sustainability, we aim to set new benchmarks in the car rental sector."
                          : index === 1
                          ? "We strive to offer flexible rental options, transparent pricing, and outstanding customer support."
                          : "We believe in building lasting relationships by offering personalized services and unparalleled convenience."}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 relative rounded-3xl shadow-lg overflow-hidden group">
                    <Image
                      src={item.image}
                      alt=""
                      width={565}
                      height={678}
                      className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-btncolor opacity-55 group-hover:opacity-30 duration-500"></div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
