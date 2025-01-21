import React from "react";
import { CarProps } from "@/constans";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaUser } from "react-icons/fa";
import { GiCarDoor, GiDiscGolfBag } from "react-icons/gi";
import { TbAutomaticGearbox } from "react-icons/tb";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface CardItemProps {
  car: CarProps;
}
const CardItem = ({ car }: CardItemProps) => {
  return (
    <Card className="w-full rounded-3xl text-whitetext bg-btncolor">
      <CardHeader>
        <Image width={500} height={300} alt={car.name} src={car.imageUrl} />
      </CardHeader>
      <CardContent>
        <div>
          <Badge
            variant="secondary"
            className="px-6 py-3 bg-whitetext text-btncolor font-poppins"
          >
            {car.type}{" "}
          </Badge>
          <div className="mt-4  ">
            <h2 className="line-clamp-1 font-semibold font-poppins text-xl">
              {car.name} {car.year}{" "}
            </h2>
            <div className="grid grid-cols-2 mt-8 gap-y-2 gap-x-4">
              <div className="flex items-center text-whitetext gap-1 font-poppins">
                <FaUser />
                <span>{car.passengers} Pass</span>
              </div>
              <div className="flex items-center text-whitetext gap-1 font-poppins">
                <GiCarDoor />
                <span>{car.doors} Doors</span>
              </div>
              <div className="flex items-center text-whitetext gap-1 font-poppins">
                <GiDiscGolfBag />
                <span>{car.bags}</span>
              </div>
              <div className="flex items-center text-whitetext gap-1 font-poppins">
                <TbAutomaticGearbox />
                <span>{car.transmission}</span>
              </div>
            </div>
          </div>
          <div className="border-b mt-8 border-whitetext"></div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="font-semibold text-xl font-poppins">
          <span className="font-semibold text-3xl font-poppins">
            ${car.pricePerDay} /
          </span>
          day
        </p>
        <Link
          className="flex p-4 rounded-full text-2xl text-btncolor bg-whitetext items-center justify-center"
          href="/"
        >
          <FiArrowUpRight />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
