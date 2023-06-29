import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  disabled?: boolean;
  title?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
}

export interface SearchManufacturerProps {
  manufacturer?: string;
  setmanufacturer?: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg?: number;
  class_?: string;
  combination_mpg?: number;
  cylinders?: number;
  displacement?: number;
  drive?: string;
  fuel_type?: string;
  highway_mpg?: number;
  make?: string;
  model?: string;
  transmission?: string;
  year?: number;
}

export interface CarDetailProps {
  isOpen?: boolean;
  closeModal?: () => void;
  Car: CarProps;
}

export interface FilterProps {
  make?: string;
  model?: string;
  year?: number;
  fuel?: string;
  limit?: number;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
