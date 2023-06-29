import { CarProps } from "@/types";
import { FilterProps } from "@/types";
import { fuels } from "@/constants";
import { yearsOfProduction } from "@/constants";

export async function getCarsData(filters: FilterProps) {
  const { make, model, fuel, limit, year } = filters;
  const headers = {
    "X-RapidAPI-Key": "e33b1be06bmsh84f23f710bdd2c4p130464jsn37f4d7702a48",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${make}&year=${year}&limit=${limit}&fuel=${fuel}`,
    { headers: headers }
  );
  const result = await response.json();
  return result;
}

export function calculateCarRent(cityMpg: number, year: number): number {
  const baseRent = 100; // Base rent price

  // Calculate rent based on city_mpg and year
  let rent = baseRent;

  // Adjust rent based on city_mpg
  if (cityMpg < 20) {
    rent += 50; // Add $50 if city_mpg is less than 20
  } else if (cityMpg >= 30) {
    rent -= 50; // Subtract $50 if city_mpg is greater than or equal to 30
  }

  // Adjust rent based on year
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 10) {
    rent -= 100; // Subtract $100 if car is 10 years or older
  } else if (age < 5) {
    rent += 50; // Add $50 if car is less than 5 years old
  }

  return rent;
}

export function generateCarImageURL(car: CarProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("modelFamily", model?.split(" ")[0]);
  url.searchParams.append("make", make);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
}
