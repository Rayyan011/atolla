import React from "react";

const Footer = () => {
  return (
    <footer className="bg-atolla-sand/50 border-t border-atolla-coral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img 
                src="/images/logo.png" 
                alt="Atolla Logo" 
                className="h-8 sm:h-10 w-auto" 
              />
              <span className="font-playfair text-xl sm:text-2xl font-semibold text-atolla-coral">
                Atolla
              </span>
            </div>
            <p className="text-atolla-seagrass/95 text-sm sm:text-base max-w-md">
              A collective of scientists, designers, and storytellers transforming ocean data into action.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-atolla-coral text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#about" className="text-atolla-seagrass hover:text-atolla-coral transition-all text-sm sm:text-base">About</a></li>
              <li><a href="#what-we-do" className="text-atolla-seagrass hover:text-atolla-coral transition-all text-sm sm:text-base">What We Do</a></li>
              <li><a href="#principles" className="text-atolla-seagrass hover:text-atolla-coral transition-all text-sm sm:text-base">Principles</a></li>
              <li><a href="#team" className="text-atolla-seagrass hover:text-atolla-coral transition-all text-sm sm:text-base">Team</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-atolla-coral text-sm sm:text-base mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="mailto:contact@atolla.org" className="text-atolla-seagrass hover:text-atolla-coral transition-all text-sm sm:text-base">info@atolla.ngo</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-atolla-coral/10 text-center text-atolla-seagrass/95 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} Atolla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
