"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Our Services",
      path: "/services",
      dropdown: [
        { name: "Web Development", path: "/services/web-development", icon: "/web-development.png" },
        { name: "Logo & Card Design", path: "/services/logo-design", icon: "/logo-design.png" },
        { name: "Branding & Marketing", path: "/services/marketing", icon: "/logo-design.png" },
        { name: "UI/UX Design", path: "/services/ui-ux", icon: "/ui-ux.png" },
        { name: "Motion & Animation", path: "/services/motion", icon: "/motion.png" },
      ],
    },
    { name: "Our Projects", path: "/projects" },
    { name: "Client Reviews", path: "/reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#faefbc] via-[#ddf9fe] to-[#faefbc] text-black shadow-md z-50 h-[4rem]">
      <div className="container mx-auto flex justify-between items-center p-2">
         {/* Logo */}
    <Link href="/" className="flex">
      <img src="/Katberry.png" alt="Logo" className="h-14 w-20" />
    </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map(({ name, path, dropdown }) => (
            <li key={name} className="relative group hover:text-darkViolet font-semibold">
              {dropdown ? (
                <>
                  <button
                    className="flex items-center hover:text-darkViolet transition"
                    onMouseEnter={() => setOpenDropdown(name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {name} <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {openDropdown === name && (
  <ul
    className="absolute left-0 w-64 p-4 bg-gradient-to-l from-purple to-highlight shadow-md shadow-white"
    onMouseEnter={() => setOpenDropdown(name)}
    onMouseLeave={() => setOpenDropdown(null)}
  >
    {dropdown.map(({ name, path, icon }) => (
      <li key={name} className="group">
        <Link
          href={path}
          className="flex items-center gap-3 px-3 py-1 my-3 rounded-full shadow-md bg-gradient-to-r shadow-gray-700 from-purple to-highlight text-[#fef8dd] hover:text-[#e4d48f] transition-all"
        >
          <img src={icon} alt={name} className="w-5 h-5 object-contain" />
          {name}
          <FaArrowRightLong className="w-4 h-4 ml-auto transition-all text-[#fef8dd] hover:text-[#e4d48f]" />
        </Link>
      </li>
    ))}
  </ul>
)}

                </>
              ) : (
                <Link
                  href={path}
                  className={`hover:text-darkViolet transition ${
                    pathname === path ? "text-darkViolet font-semibold" : ""
                  }`}
                >
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-gradient-to-r from-purple to-highlight text-[#fef8dd] font-semibold px-4 py-2 rounded-lg transition hover:bg-gradient-to-r hover:from-red-700 hover:to-red-700"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-primary to-secondary text-black shadow-md absolute w-full">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map(({ name, path, dropdown }) => (
              <li key={name} className="relative w-full text-center">
                {dropdown ? (
                  <>
                    <button
                      className="flex justify-center items-center w-full px-4 py-2 hover:text-darkViolet transition"
                      onClick={() =>
                        setOpenDropdown(openDropdown === name ? null : name)
                      }
                    >
                      {name} <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {openDropdown === name && (
                      <ul className="bg-gradient-to-l from-purple to-highlight shadow-md shadow-white rounded-md overflow-hidden w-full">
                        {dropdown.map(({ name, path, icon }) => (
                          <li key={name}>
                            <Link
                              href={path}
                              className="flex items-center gap-3 px-3 py-1 my-2 rounded-full shadow-md bg-gradient-to-r shadow-gray-700 from-purple to-highlight text-[#fef8dd] hover:text-[#e4d48f] transition-all"
                              onClick={() => setIsOpen(false)}
                            >
                              <img src={icon} alt={name} className="w-6 h-6 object-contain" />
                              {name}
                              <FaArrowRightLong className="ml-auto w-4 h-4 transition-all text-[#fef8dd] hover:text-[#e4d48f]" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={path}
                    className={`block px-4 py-2 hover:text-darkViolet transition ${
                      pathname === path ? "text-darkViolet font-bold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                )}
              </li>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple to-highlight text-white px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-red-700 hover:to-red-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
