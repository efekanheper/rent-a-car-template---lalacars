"use client";
import React, { useEffect, useState } from "react";
import SectionBg from "../_components/SectionBg";
import { carsData } from "@/constans";
import { Checkbox } from "@/components/ui/checkbox";
import CardItem from "../_components/CardItem";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LuCar } from "react-icons/lu";
import { PiGearFineBold } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";

const CarsPage = () => {
  const [filters, setFilters] = useState<{
    categories: string[];
    transmission: string[];
    priceRange: [number, number];
  }>({
    categories: [],
    transmission: [],
    priceRange: [0, 100],
  });

  const [currentPage, SetCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    SetCurrentPage(1);
  }, [filters]);

  const handleFilterChange = (
    filterType: "categories" | "transmission",
    value: string
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const handlePriceRangeChange = (newRange: [number, number]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newRange,
    }));
  };

  const filteredCars = carsData.filter((car) => {
    if (
      filters.categories.length === 0 &&
      filters.transmission.length === 0 &&
      filters.priceRange[0] === 0 &&
      filters.priceRange[1] === 100
    ) {
      return true;
    }

    const isCategoryMatch =
      filters.categories.length === 0 || filters.categories.includes(car.type);

    const isTransmissionMatch =
      filters.transmission.length === 0 ||
      filters.transmission.includes(car.transmission);

    const isPriceMatch =
      car.pricePerDay >= filters.priceRange[0] &&
      car.pricePerDay <= filters.priceRange[1];

    return isCategoryMatch && isTransmissionMatch && isPriceMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      SetCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <SectionBg source="Home" title="Cars" />
      <div className="flex flex-col md:flex-row container mx-auto mb-20 mt-5 px-4 gap-6">
        <aside className="w-full md:w-[300px] px-4 py-6 border rounded-xl mb-6 md:mb-0 bg-btncolor shadow-lg">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <LuCar className="w-6 h-6 text-primary text-green" />
              <h2 className="font-bold font-poppins text-xl text-whitetext">
                Categories
              </h2>
            </div>
            <div className="text-footer font-poppins grid grid-cols-1 gap-2">
              {[
                "Compact Car",
                "Crossover",
                "Luxury Car",
                "Sports",
                "Wagon",
                "Electric",
                "SUV",
                "Coupe",
                "Sedan",
              ].map((category) => (
                <div
                  key={category}
                  className="flex items-center hover:bg-black/10 rounded-md p-1.5 transition-colors"
                >
                  <Checkbox
                    id={category}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("categories", category)
                    }
                    className="mr-2"
                  />
                  <label
                    htmlFor={category}
                    className="text-sm cursor-pointer select-none"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <PiGearFineBold className="w-6 h-6 text-primary text-green" />
              <h2 className="font-bold font-poppins text-xl text-whitetext">
                Transmission
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {["Auto", "Manual"].map((transmission) => (
                <div
                  key={transmission}
                  className="flex items-center hover:bg-black/10 rounded-md p-1.5 transition-colors"
                >
                  <Checkbox
                    id={transmission}
                    checked={filters.transmission.includes(transmission)}
                    onCheckedChange={() =>
                      handleFilterChange("transmission", transmission)
                    }
                  />
                  <label
                    htmlFor={transmission}
                    className="ml-2 text-sm cursor-pointer select-none"
                  >
                    {transmission}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <IoWalletOutline className="w-6 h-6 text-primary text-green" />
              <h2 className="font-bold font-poppins text-xl text-whitetext">
                Price Range
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm text-whitetext">Min Price ($)</Label>
                <Input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    handlePriceRangeChange([
                      Number(e.target.value),
                      filters.priceRange[1],
                    ])
                  }
                  className="w-full p-2 rounded-md border-gray-300 focus:ring-primary focus:border-primary bg-white/90"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm text-whitetext">Max Price ($)</Label>
                <Input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handlePriceRangeChange([
                      filters.priceRange[0],
                      Number(e.target.value),
                    ])
                  }
                  className="w-full p-2 rounded-md border-gray-300 focus:ring-primary focus:border-primary bg-white/90"
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCars.map((car, index) => (
              <CardItem car={car} key={index} />
            ))}
          </div>

          <div className="w-full flex justify-center mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  {currentPage === 1 ? (
                    <PaginationPrevious className="pointer-events-none opacity-50" />
                  ) : (
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                    />
                  )}
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                <PaginationItem>
                  {currentPage === totalPages ? (
                    <PaginationNext className="pointer-events-none opacity-50" />
                  ) : (
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                    />
                  )}
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
