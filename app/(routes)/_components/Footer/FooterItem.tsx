import { FooterItemDataProps } from "@/constans";
import Link from "next/link";
import React from "react";

const FooterItem = ({ items, title }: FooterItemDataProps) => {
  return (
    <div className="w-full mt-10">
      <h3 className="font-semibold text-lg md:text-2xl text-whitetext font-poppins">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-footer font-poppins ">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="text-xl">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
