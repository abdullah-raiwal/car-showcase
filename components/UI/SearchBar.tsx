"use client";
import SearchManufacturer from "../SearchManufacturer";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setmodel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("please enter some values");
    }
    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (make: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-row  gap-2">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />

        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Model"
            className="input w-40 sm:w-full max-w-xs"
            value={model}
            onChange={(e) => {
              setmodel(e.target.value);
            }}
          />
          <button className="-ml-6" type="submit">
            <FiSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
