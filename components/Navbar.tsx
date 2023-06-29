import Image from "next/image";
import Link from "next/link";
import CustomButtom from "./UI/CustomButtom";
const Navbar = () => {
  return (
    <div className=" mx-auto container bg-base-200">
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link href={'/'}>
            <Image
              src={"/images/logo.svg"}
              alt="car-logo"
              height={18}
              width={118}
              className="object-contained"
            />
          </Link>
        </div>
        <div className="flex-none">
          <CustomButtom title="Sign In"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
