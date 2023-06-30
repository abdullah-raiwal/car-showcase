import Hero from "@/components/Hero";
import SearchBar from "@/components/UI/SearchBar";
import { getCarsData } from "@/utils";
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/UI/CustomFilter";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";

export default async function Home({ searchParams }) {
  const allcars = await getCarsData({
    make: searchParams.make || "",
    model: searchParams.model || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;

  return (
    <main className="container mx-auto px-4  w-full">
      <Hero />
      <div className="">
        {/* text for car catalouge */}

        <div className="py-4 ">
          <h1 className="font-semibold text-3xl pb-4">Cars Catalouge</h1>
          <h2 className="font-thin">Explore the cars you might like</h2>
        </div>

        {/* filters like search, fuel, and year */}

        <div className="flex flex-col sm:flex-row justify-between items-center  gap-2 sm:gap-0">
          <SearchBar />
          <div className="flex flex-row gap-3 justify-between items-center">
            <CustomFilter name="Fuel" options={fuels} />
            <CustomFilter name="Year" options={yearsOfProduction} />
          </div>
        </div>
      </div>
      {/* renders cars card list */}
      {!isDataEmpty ? (
        <section className="w-full my-8 ">
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-y-6 ">
            {allcars.map((car) => (
              <CarCard key={"1"} Car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div>ops noting found</div>
      )}

      <ShowMore
        pageNumber={(searchParams.limit || 10) / 10}
        isNext={(searchParams.limit || 10) > allcars.length}
      />
    </main>
  );
}
