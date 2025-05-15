import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-4 ${
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-atolla-seagrass hover:text-atolla-coral transition-all p-2 -mr-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-sidebar"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
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

          {/* Desktop Contact Button */}
          <a 
            href="mailto:info@atolla.ngo" 
            className="hidden md:block bg-gradient-to-r from-atolla-coral to-atolla-blue hover:from-atolla-blue hover:to-atolla-coral text-white px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Dimming Overlay for background click */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <div
        id="mobile-sidebar"
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-atolla-sand/95 text-atolla-seagrass shadow-xl z-40 
                  transition-transform duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-title"
      >
        <div className="relative flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b border-atolla-coral/20">
            <h2 id="sidebar-title" className="font-playfair text-xl font-semibold text-atolla-coral">
              Menu
            </h2>
            <button
              className="text-atolla-seagrass hover:text-atolla-coral bg-transparent rounded-full p-1"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            <a href="#about" className="block text-lg hover:text-atolla-coral transition-all" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#what-we-do" className="block text-lg hover:text-atolla-coral transition-all" onClick={() => setIsMobileMenuOpen(false)}>What We Do</a>
            <a href="#principles" className="block text-lg hover:text-atolla-purple transition-all" onClick={() => setIsMobileMenuOpen(false)}>Principles</a>
            <a href="#team" className="block text-lg hover:text-atolla-purple transition-all" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
            <a href="#collaborate" className="block text-lg hover:text-atolla-blue transition-all" onClick={() => setIsMobileMenuOpen(false)}>Collaborate</a>
            <a 
              href="mailto:info@atolla.ngo" 
              className="mt-6 block w-full text-center bg-gradient-to-r from-atolla-coral to-atolla-blue hover:from-atolla-blue hover:to-atolla-coral text-white px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
          
          {/* Optional: Sidebar Footer */}
          <div className="p-4 mt-auto border-t border-atolla-coral/20 text-center text-xs text-atolla-seagrass/80">
            <p>&copy; {new Date().getFullYear()} Atolla</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
