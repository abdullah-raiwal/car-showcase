import React from "react";
import { CarDetailProps } from "@/types";
import Image from "next/image";
import { generateCarImageURL } from "@/utils";

const CarDetails = ({ isOpen, closeModal, Car }: CarDetailProps) => {
  const {
    make,
    city_mpg,
    drive,
    class_,
    combination_mpg,
    cylinders,
    displacement,
    fuel_type,
    highway_mpg,
    model,
    transmission,
  } = Car;

  const tableRows = [
    { label: "City MPG", value: city_mpg },
    { label: "Drive", value: drive },
    { label: "Class", value: class_ },
    { label: "Combination MPG", value: combination_mpg },
    { label: "Cylinders", value: cylinders },
    { label: "Displacement", value: displacement },
    { label: "Fuel Type", value: fuel_type },
    { label: "Highway MPG", value: highway_mpg },
    { label: "Transmission", value: transmission },
  ];

  return (
    <div className="">
      {/* Add a dark overlay to the background */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}
      <dialog id="my_modal_1" className="modal" open={isOpen}>
        <form method="dialog" className="modal-box">
          <div className="relative w-full h-40 bg-cover bg-center bg-p ">
            <Image
              src={"/images/pattern.png"}
              width={200}
              height={10}
              className="object-cover w-full h-full"
              alt="car"
            />

            <Image
              src={generateCarImageURL(Car)}
              width={200}
              height={10}
              className="object-contain absolute top-8 left-12 sm:left-24"
              alt="car"
            />
          </div>
          {/* car images show case */}
          <div className="grid grid-cols-3 pt-4 justify-center">
            <div className="flex justify-center items-center">
              <Image
                src={generateCarImageURL(Car, '29')}
                width={100}
                height={100}
                className=""
                alt="car"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={generateCarImageURL(Car, '33')}
                width={100}
                height={100}
                className=""
                alt="car"
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={generateCarImageURL(Car, '13')}
                width={100}
                height={100}
                className=""
                alt="car"
              />
            </div>
          </div>
          {/* car make model */}
          <div>
            <p className="pt-4 font-semibold">
              {make} {model}
            </p>
          </div>

          {/* cars details table */}

          <div className="overflow-x-auto pt-4">
            <table className="table">
              <tbody>
                {/* Use map to generate table rows dynamically */}
                {tableRows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CarDetails;
