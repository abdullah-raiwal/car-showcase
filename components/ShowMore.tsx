"use client";
import { ShowMoreProps } from "@/types";
import CustomButtom from "./UI/CustomButtom";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    updateSearchParams("limit", `${newLimit}`);
  };

  const updateSearchParams = (type: string, filter: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, filter);
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="mx-auto flex justify-center my-4">
      {!isNext && (
        <CustomButtom
          title="show more"
          containerStyles="bg-blue-200"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
