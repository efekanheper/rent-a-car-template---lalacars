import React from "react";

// CarType türünü tanımlayın
type CarType = {
  pricePerDay: number;
  // Diğer car özelliklerini buraya ekleyin
};

const CardItem = ({ car }: { car: CarType }) => {
  return (
    <div className="bg-[#1A1F23] rounded-2xl p-4 flex flex-col">
      {/* ... existing car image and details ... */}

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">
            ${car.pricePerDay}
          </span>
          <span className="text-gray-400 ml-1">/day</span>
        </div>

        <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
