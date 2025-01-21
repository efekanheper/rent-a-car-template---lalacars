import React from "react";

interface SectionTitleProps {
  title: string;
  titletwo: string;
  description?: string;
  titleColor?: string; // Title rengi için prop
  titletwoColor?: string; // titletwo rengi için prop
  descriptionColor?: string; // Açıklama metni rengi için prop
}

const SectionTitle = ({
  title,
  titletwo,
  description,
  titleColor = "text-btncolor", // Varsayılan renk
  titletwoColor = "text-btncolor", // Varsayılan renk
  descriptionColor = "text-footer", // Varsayılan renk
}: SectionTitleProps) => {
  return (
    <div className="container mt-8 mb-4 max-w-full">
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          className={`text-base md:text-lg mb-4 md:mb-2 font-bold font-poppins ${titleColor}`}
        >
          {title}
        </h1>
        <h1
          className={`text-xl md:text-4xl lg:text-6xl mb-4 font-bold font-poppins ${titletwoColor}`}
        >
          {titletwo}
        </h1>
        {description && (
          <p
            className={`font-light text-sm md:text-base font-poppins ${descriptionColor}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
