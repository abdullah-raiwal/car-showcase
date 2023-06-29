import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <Image
            src={"/images/logo.svg"}
            alt="car-logo"
            height={18}
            width={118}
            className="object-contained"
          />
          <a className="text-base text-gray-400">Cars Hub</a>
          <a className="text-base text-gray-400">All Rights Reserved </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
