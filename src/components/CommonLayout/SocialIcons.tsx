import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
    return (
      <div className="fixed top-24 right-4 flex flex-col space-y-3 bg-transparent p-3 rounded-lg shadow-md z-50">
          <Link href="https://twitter.com" target="_blank" className="hover:text-darkestViolet text-lg transition">
              <FaLinkedin />
            </Link>
       <Link href="https://facebook.com" target="_blank" className="hover:text-darkestViolet text-lg transition">
              <FaFacebook />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-darkestViolet text-lg transition">
              <FaYoutube />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-darkestViolet text-lg transition">
              <FaInstagram />
            </Link>
      </div>
    );
  };
  
  export default SocialIcons;
  