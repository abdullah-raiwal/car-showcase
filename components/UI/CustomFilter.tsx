"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface Option {
  title: string;
  value: string;
}

interface CustomFilterProps {
  options: Option[];
  name: string;
}

const CustomFilter = ({ options, name }: CustomFilterProps) => {
  const router = useRouter();
  const [selectedValue, setselectedValue] = useState("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setselectedValue(selectedValue);
    updateSearchParams(name.toLowerCase(), selectedValue.toLowerCase());
  };
  

  const updateSearchParams = (type: string, filter: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, filter);
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <div>
      <select

        className="select w-full max-w-xs"
        value={selectedValue}
        onChange={handleSelect}
      >
        <option disabled selected value={name}>
          {name}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomFilter;
