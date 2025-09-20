import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // ✅ react-icons
import Logo from "../assets/image.png"; // Ensure you have a logo image in the specified path
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const scrollToId = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};
  // common nav link styles
  const navLink =
    "relative text-gray-600 font-medium transition-colors duration-200 hover:text-[#ff712c] " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#ff712c] " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ease-in-out
      ${
        isScrolled
          ? "fixed top-0 bg-white/90 backdrop-blur-sm shadow-md"
          : "absolute bg-transparent"
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="GOFORSYS Logo"
            className="w-[210px] transition-all duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-[18px] items-center space-x-6">
          <a onClick={() => scrollToId("about")} href="#" className={navLink}>
            About
          </a>
          <a onClick={() => scrollToId("services")} href="#" className={navLink}>
            Services
          </a>
          <a onClick={() => scrollToId("process")} href="#" className={navLink}>
            Process
          </a>
          <a onClick={() => scrollToId("portfolio")} href="#" className={navLink}>
            Portfolio
          </a>
          <a onClick={() => scrollToId("testimonials")} href="#" className={navLink}>
            Testimonials
          </a>
          <a onClick={() => scrollToId("contact-section")} href="#" className={navLink}>
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 bg-white/90">
          <li onClick={() => scrollToId("about")}>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              About
            </a>
          </li>
          <li onClick={() => scrollToId("services")}>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              Services
            </a>
          </li>
          <li onClick={() => scrollToId("process")}>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              Process
            </a>
          </li>
          <li onClick={() => scrollToId("portfolio")}>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              Portfolio
            </a>
          </li>
          <li onClick={() => scrollToId("testimonials")}>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              Testimonials
            </a>
          </li>
          <li onClick={() => scrollToId("contact-section")}>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
