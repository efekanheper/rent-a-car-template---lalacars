import { HeaderDataProps } from "@/constans";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

// Poppins fontunu tanımlıyoruz
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const HeaderText = ({ href, label }: HeaderDataProps) => {
  return (
    <Link
      className={`${poppins.className} relative space-x-12 font-medium text-black 
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                 after:w-0 after:bg-textbg after:transition-all after:duration-300 
                 hover:after:w-full`}
      href={href}
    >
      {label}
    </Link>
  );
};

export default HeaderText;
