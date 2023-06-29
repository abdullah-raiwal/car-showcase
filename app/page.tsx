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
        <div className="flex flex-row justify-between items-center px-6">
          <SearchBar />
          <div className="flex flex-row gap-3">
            <CustomFilter name="Fuel" options={fuels} />
            <CustomFilter name="Year" options={yearsOfProduction} />
          </div>
        </div>
      </div>

      {!isDataEmpty ? (
        <section className="container mx-auto w-full my-8 flex justify-center items-center ">
          <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-4">
            {allcars.map((car) => (
              <CarCard Car={car} />
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
