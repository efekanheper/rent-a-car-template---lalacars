import Link from "next/link";
import React from "react";

interface SectionBgProps {
  title: string;
  source: string;
}
const SectionBg = ({ source, title }: SectionBgProps) => {
  return (
    <div className="px-4 md:px-16 rounded-4xl ">
      <div className="relative">
        <div className="px-4 md:px-16 rounded-4xl absolute inset-0 bg-section-bg bg-cover bg-center"></div>
        <div className="absolute inset-0 rounded-4xl flex items-center justify-center text-center bg-black bg-opacity-30"></div>
        <div className="relative z-10 p-8 md:p-16 lg:p-24 text-whitetext">
          <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            {" "}
            {title}{" "}
          </h1>
          <nav className="text-sm md:text-base lg:text-2xl">
            <ul className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="text-whitetext font-poppins font-bold"
                >
                  {source}
                </Link>
              </li>
              <li>/</li>
              <li className="text-green font-poppins font-bold"> {title} </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SectionBg;
