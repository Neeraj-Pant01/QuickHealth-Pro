import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <nav className="bg-[white] z-[999] text-[gray] shadow-lg sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Side Menu Button */}
            <button
              onClick={toggleSideMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-xl font-bold text-[#1fc4b4]">
                MyLogo
              </a>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex md:items-center md:space-x-4 ml-6">
              <a href="/home" className="text-[gray] hover:text-[lightgrey] px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-[gray] hover:text-[lightgrey] px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/services" className="text-[gray] hover:text-[lightgrey] px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="/contact" className="text-[gray] hover:text-[lightgrey] px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search..."
                className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966"
                >
                  <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      {isSideMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/home" className="text-[gray] hover:text-[lightgrey] block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/about" className="text-[gray] hover:text-[lightgrey] block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/services" className="text-[gray] hover:text-[lightgrey] block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="/contact" className="text-[gray] hover:text-[lightgrey] block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;