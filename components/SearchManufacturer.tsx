"use client";
import { SearchManufacturerProps } from "@/types";
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: SearchManufacturerProps) => {
  const [query, setquery] = useState("");

  const Filteredmanufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(query.toLowerCase().replace(/\s/g, ""))
        );

  return (
    <div>
      <Combobox value={manufacturer} onChange={setmanufacturer}>
        <div className="relative w-full">
          <Combobox.Button>
            <Image
              src={"/images/car-logo.svg"}
              alt="car-logo"
              width={20}
              height={20}
              className="absolute top-[15px]"
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder="Fortuner"
            className="input input-bordered"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setquery("");
            }}
          >
            <Combobox.Options>
              {Filteredmanufacturer.length === 0 && query !== "" ? (
                <Combobox.Option value={query}></Combobox.Option>
              ) : (
                Filteredmanufacturer.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative ${
                        active ? `bg-blue-600 text-white` : `text-gray`
                      }`
                    }
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
