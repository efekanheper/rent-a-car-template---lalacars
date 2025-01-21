"use client";
import React from "react";
import SectionTitle from "../SectionTitle";
import { carsData } from "@/constans";

import CardItem from "../CardItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const OurFleets = () => {
  return (
    <div>
      <SectionTitle
        title="Our Fleets"
        titletwo="Explore our perfect and extensive feet"
      />
      <div className="px-4 md:px-6 lg:px-12 2xl:px-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {carsData.slice(10, 20).map((car, index) => (
              <CarouselItem
                key={car.id || index} // Benzersiz bir `id` varsa onu kullan, yoksa `index`
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <CardItem car={car} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default OurFleets;
