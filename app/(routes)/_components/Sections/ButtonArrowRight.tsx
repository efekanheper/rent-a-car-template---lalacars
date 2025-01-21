import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ButtonArrowProps {
  link?: string; // link opsiyonel hale getirildi
}

const ButtonArrowRight = ({ link = "/" }: ButtonArrowProps) => {
  return (
    <Link
      href={link}
      className="flex p-4 rounded-full text-2xl text-white bg-btncolor items-center justify-center"
    >
      <FiArrowUpRight className="transition-transform duration-500 transform  group-hover:rotate-45" />
    </Link>
  );
};

export default ButtonArrowRight;
