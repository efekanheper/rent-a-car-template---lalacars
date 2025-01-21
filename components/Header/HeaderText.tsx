import React from "react";

interface HeaderTextProps {
  href: string;
  label: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ href, label }) => {
  return (
    <a href={href} className="text-white hover:text-gray-300 transition">
      {label}
    </a>
  );
};

export default HeaderText;
