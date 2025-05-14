import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? "bg-atolla-sand/90 backdrop-blur-md shadow-sm border-b border-atolla-coral/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/images/logo.png" 
            alt="Atolla Logo" 
            className="h-8 w-auto transition-all duration-300 group-hover:opacity-80" 
          />
          <span className="font-playfair text-2xl font-semibold text-atolla-coral">
            Atolla
          </span>
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-atolla-seagrass/95 hover:text-atolla-coral transition-all border-b-2 border-transparent hover:border-atolla-coral">
            About
          </a>
          <a href="#what-we-do" className="text-atolla-seagrass/95 hover:text-atolla-coral transition-all border-b-2 border-transparent hover:border-atolla-coral">
            What We Do
          </a>
          <a href="#principles" className="text-atolla-seagrass/95 hover:text-atolla-purple transition-all border-b-2 border-transparent hover:border-atolla-purple">
            Principles
          </a>
          <a href="#team" className="text-atolla-seagrass/95 hover:text-atolla-purple transition-all border-b-2 border-transparent hover:border-atolla-purple">
            Team
          </a>
          <a href="#collaborate" className="text-atolla-seagrass/95 hover:text-atolla-blue transition-all border-b-2 border-transparent hover:border-atolla-blue">
            Collaborate
          </a>
        </div>
        <a 
          href="mailto:info@atolla.ngo" 
          className="bg-gradient-to-r from-atolla-coral to-atolla-blue hover:from-atolla-blue hover:to-atolla-coral text-white px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
