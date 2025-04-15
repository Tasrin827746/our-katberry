import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const services = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Logo & Card Design", path: "/services/logo-design" },
  { name: "Branding & Marketing", path: "/services/marketing" },
  { name: "UI/UX Design", path: "/services/ui-ux" },
  { name: "Motion & Animation", path: "/services/motion" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#faefbc] via-[#ddf9fe] to-[#faefbc] text-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
        
        {/* Brand Info */}
        <div className="mb-6 md:mb-0 relative">
  <img src="/Katberry.png" alt="Logo" className="h-14 w-20 absolute top-0 left-0" />
  <p className="text-sm text-gray-700 mt-16">
    We blend creativity with technology <br /> to build brands that shine online.
  </p>
</div>


        {/* Services Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 text-darkViolet">Our Services</h3>
          <ul className="space-y-2">
            {services.map(({ name, path }) => (
              <li key={name}>
                <Link href={path} className="hover:text-darkestViolet text-sm font-semibold transition">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow us on:</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/katberrystudiobd/" target="_blank" className="hover:text-darkestViolet text-lg transition">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-darkestViolet text-lg transition">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-darkestViolet text-lg transition">
              <FaLinkedin />
            </Link>
            <Link href="https://www.youtube.com/@katberrystudio" target="_blank" className="hover:text-darkestViolet text-lg transition">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-600 mt-8">
        © {new Date().getFullYear()} KatBerry. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
