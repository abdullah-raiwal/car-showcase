"use client";
import Image from "next/image";
import CustomButtom from "./UI/CustomButtom";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen bg-base-200 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative sm:w-[700px]">
            <Image
              src="/images/hero-bg.png"
              alt="hero-bg"
              width={800}
              height={800}
            />

            <Image
              src="/images/hero.png"
              alt="hero"
              width={500}
              height={500}
              className="object-contain absolute top-9 left-0 "
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              Find, Book and rent a car - quickly and easily
            </h1>
            <p className="py-6">
              Streamline your car rental experience with our effortless booking
              process.
            </p>
            <CustomButtom
              title="Explore"
              handleClick={handleScroll}
              containerStyles="btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
