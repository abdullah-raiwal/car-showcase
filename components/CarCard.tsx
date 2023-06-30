"use client";

import Image from "next/image";
import { useState } from "react";
import { CarProps } from "@/types";
import CustomButtom from "./UI/CustomButtom";
import CarDetails from "./CarDetails";
import { generateCarImageURL } from "@/utils";

interface CarCardProps {
  Car: CarProps;
}

const CarCard = ({ Car }: CarCardProps) => {
  const [isOpen, setisOpen] = useState(false);


  const {
    city_mpg,
    class_,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = Car;

  return (
    <div className="mx-auto">
      <div className="card w-72 sm:w-60 md:w-56 h-80 md:mx-auto bg-base-100 shadow-xl">
        <figure className="">
          <Image
            src={generateCarImageURL(Car)}
            alt="car-image"
            width={150}
            height={150}
            priority
            className="object-contain pt-3"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base md:text-sm">
            {make} {model}
          </h2>

          <div className="">
            <div className="flex justify-center items-center w-full text-gray-500 gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"/images/steering-wheel.svg"}
                  alt="streering wheel"
                  width={20}
                  height={20}
                />
                <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src={"/images/tire.svg"}
                  alt="streering wheel"
                  width={20}
                  height={20}
                />
                <p>{drive?.toUpperCase()}</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src={"/images/gas.svg"}
                  alt="streering wheel"
                  width={20}
                  height={20}
                />
                <p>{city_mpg} MPG</p>
              </div>
            </div>
            <div>
              <CustomButtom
                containerStyles="bg-blue-200"
                title="view more"
                handleClick={() => {
                  setisOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <CarDetails
        Car={Car}
        isOpen={isOpen}
        closeModal={() => {
          setisOpen(false);
        }}
      />
    </div>
  );
};

export default CarCard;
