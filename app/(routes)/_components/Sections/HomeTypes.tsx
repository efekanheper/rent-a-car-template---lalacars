import { homeTypesData } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import ButtonArrowRight from "./ButtonArrowRight";

const HomeTypes = () => {
  return (
    <section className="flex justify-center items-center bgone p-4 mt-16">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {homeTypesData.map((car, index) => (
          <div
            className="relative w-full rounded-xl shadow-lg overflow-hidden group"
            key={index}
          >
            <Image
              src={car.image}
              alt={car.type}
              width={565}
              height={678}
              className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-btncolor opacity-55 group-hover:opacity-30 duration-500"></div>
            <div className="absolute top-4 left-4 text-whitetext text-lg font-poppins font-bold z-10">
              {" "}
              {car.type}{" "}
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <ButtonArrowRight link="/" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTypes;
