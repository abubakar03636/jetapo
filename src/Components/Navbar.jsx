import React, { useState } from 'react';
import logo from '../assets/logo-blue.webp';

import bgImage from '../assets/bg_home_v3.png';
import brand1 from '../assets/brand-1.webp'
import brand2 from '../assets/brand-2.webp'
import brand3 from '../assets/brand-3.webp'
import brand4 from '../assets/brand-4.webp'
import brand5 from '../assets/brand-5.webp'
import brand6 from '../assets/brand-6.webp'
import { FiChevronDown, FiChevronRight, FiUser, FiLogIn } from 'react-icons/fi';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      name: "Home",
      submenu: [
        { name: "Home Version 1" },
        { name: "Home Version 2" },
        { name: "Home Version 3" },
        { name: "Home Version 4" }
      ]
    },
    {
      name: "Jobs",
      submenu: [
        { name: "Job Listing" },
        { name: "Jobs With Map" },
        { 
          name: "Job Details", 
          submenu: [
            { name: "Job Details v1" },
            { name: "Job Details v2" }
          ] 
        }
      ]
    },
    {
      name: "Candidates",
      submenu: [
        { name: "Candidate Listing" },
        { 
          name: "Candidate Details", 
          submenu: [
            { name: "Candidate Listing" },
            { name: "Candidate Details" }
          ] 
        }
      ]
    },
    {
      name: "Employers",
      submenu: [
        { name: "Employer Listing" },
        { 
          name: "Employer Details", 
          submenu: [
            { name: "Employer Detail v1" },
            { name: "Employer Detail v2" }
          ] 
        }
      ]
    },
    {
      name: "Blog",
      submenu: [
        { name: "Single Post" }
      ]
    },
    {
      name: "Pages",
      submenu: [
        { name: "About Us" },
        { name: "Contact Us" },
        { name: "FAQs" },
        { name: "Pricing & Plans" },
        { name: "Log In & Register" },
        { name: "Dashboard" },
        { name: "Error 404" },
        { name: "Shop",
          submenu: [
        { name: "Shop"},
        { name: "Product Details",}
      ]
          
         }
      ]
    }
  ];

  return (
    <div>
      <nav 
        className="relative shadow-md"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          overflow:"inherit",
          backgroundRepeat: 'no-repeat',
          height: '1000px',
          
        }}
      >
        {/* Dark overlay to improve text readability */}
        <div className="absolute bg-opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navbar content */}
          <div className="flex justify-between items-center h-16 py-4">
            {/* Logo */}
            <div className="flex-shrink-0 flex-col">
              <a href="#" className="flex items-center">
                <img 
                  src={logo}
                  alt="JobPortal Logo"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-black focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Main Menu Items - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-black hover:text-blue-300 transition-colors duration-200"
                  >
                    <span className="hover:underline hover:underline-offset-8 hover:decoration-blue-200">
                      {item.name}
                    </span>
                    <FiChevronDown className="ml-1" />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === item.name && (
                    <div 
                      className="absolute mt-2 w-56 bg-white rounded-md shadow-lg z-10 py-1"
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative">
                          <a 
                            href="#" 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex justify-between items-center"
                          >
                            <span>{subItem.name}</span>
                            {subItem.submenu && <FiChevronRight size={14} />}
                          </a>

                          {/* Nested Dropdown */}
                          {subItem.submenu && (
                            <div className="absolute left-full ml-1 w-56 bg-white rounded-md shadow-lg z-20 py-1">
                              {subItem.submenu.map((nestedItem, nestedIndex) => (
                                <a 
                                  key={nestedIndex}
                                  href="#" 
                                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                  {nestedItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Items */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="#" 
                className="flex items-center text-black hover:text-blue-300 transition-colors duration-200"
              >
                <FiLogIn className="mr-1" />
                <span className="hover:underline hover:underline-offset-8 hover:decoration-blue-200">Login</span>
              </a>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Post a Job
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white py-2 px-4 rounded-lg shadow-lg">
              {menuItems.map((item, index) => (
                <div key={index} className="mb-2">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-black py-2"
                  >
                    <span>{item.name}</span>
                    <FiChevronDown className={`transition-transform ${openDropdown === item.name ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {openDropdown === item.name && (
                    <div className="pl-4 py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="mb-2">
                          <button 
                            onClick={() => subItem.submenu && toggleDropdown(`${item.name}-${subItem.name}`)}
                            className="flex items-center justify-between w-full text-gray-700 py-1"
                          >
                            <span>{subItem.name}</span>
                            {subItem.submenu && <FiChevronDown className={`transition-transform ${openDropdown === `${item.name}-${subItem.name}` ? 'transform rotate-180' : ''}`} />}
                          </button>
                          
                          {subItem.submenu && openDropdown === `${item.name}-${subItem.name}` && (
                            <div className="pl-4 py-1">
                              {subItem.submenu.map((nestedItem, nestedIndex) => (
                                <a 
                                  key={nestedIndex}
                                  href="#" 
                                  className="block py-1 text-gray-600"
                                >
                                  {nestedItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <a 
                  href="#" 
                  className="flex items-center text-black py-2"
                >
                  <FiLogIn className="mr-2" />
                  <span>Login</span>
                </a>
                <button className="bg-blue-600 text-black py-2 rounded-md text-sm font-medium">
                  Post a Job
                </button>
              </div>
            </div>
          )}

          {/* Hero Content */}
          <div className="relative z-10 mt-8 md:mt-22 ml-2 md:ml-6 max-w-2xl">
            <h1 className="text-4xl md:text-7xl font-bold text-black mb-2">Find Top IT Job</h1>
            <p className="text-3xl md:text-6xl text-black mb-4 md:mb-6">
              For Talent Developers
            </p>
            <p className="text-lg md:text-2xl text-black mb-6">
              Discover your next career move, freelance gig, or internship
            </p>
          </div>

          {/* Search Form */}
          <div className="relative z-10 max-w-4xl mx-auto mt-4 md:mt-8 px-2 md:px-0">
            <div className="flex flex-col md:flex-row gap-2">
              {/* What input field */}
              <div className="flex-1 relative">
                <label htmlFor="What" className="absolute top-1 left-3 bg-white px-1 text-sm md:text-md font-semibold text-gray-600">
                  What
                </label>
                <input
                  type="text"
                  id="What"
                  name="what"
                  placeholder="What jobs you want?"
                  className="w-full h-12 md:h-14 pl-4 pr-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Where input field */}
              <div className="flex-1 relative">
                <label htmlFor="Where" className="absolute top-1 left-3 bg-white px-1 text-sm md:text-md font-semibold text-gray-600">
                  Where
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="Where"
                    name="where"
                    placeholder="Location"
                    className="w-full h-12 md:h-14 pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Search button */}
              <button className="h-12 md:h-14 bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 md:px-10 transition-colors duration-200 flex flex-row items-center justify-center rounded-md">
                <svg className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="font-medium">Find Job</span>
              </button>
            </div>
          </div>

          {/* Trending Section */}
          <div className="mt-8 md:mt-16 px-2 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
              {/* Trending Text */}
              <span className="bg-green-600 text-white px-3 py-1 rounded-md font-medium whitespace-nowrap">
                Now Trending
              </span>
              
              {/* Trending Links */}
              <div className="flex flex-row items-center gap-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <a href="#" className="text-sm md:text-base text-gray-800 hover:underline font-medium whitespace-nowrap px-3 md:px-5 border-r-2 border-gray-300">
                  Account Manager
                </a>
                <a href="#" className="text-sm md:text-base text-gray-800 hover:underline font-medium whitespace-nowrap px-3 md:px-5 border-r-2 border-gray-300">
                  Administrative
                </a>
                <a href="#" className="text-sm md:text-base text-gray-800 hover:underline font-medium whitespace-nowrap px-3 md:px-5 border-r-2 border-gray-300">
                  Android
                </a>
                <a href="#" className="text-sm md:text-base text-gray-800 hover:underline font-medium whitespace-nowrap px-3 md:px-5 border-r-2 border-gray-300">
                  Angular
                </a>
                <a href="#" className="text-sm md:text-base text-gray-800 hover:underline font-medium whitespace-nowrap px-3 md:px-5 border-r-2 border-gray-300">
                  App
                </a>
                <a href="#" className="text-sm md:text-base text-gray-800 hover:underline font-medium whitespace-nowrap px-3 md:px-5">
                  ASP.Net
                </a>
              </div>
            </div>

            {/* Companies Section */}
            <div className="text-black mt-8 md:mt-30 text-center">
              <span className="font-bold text-xl md:text-3xl">20,000+ tech companies </span> <span className='text-xl md:text-3xl'> are looking for developers on Jetapo</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-18 p-4 md:p-6 mt-6 md:mt-10">
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                <img src={brand1} alt="Company 1" className="max-w-full max-h-full object-contain"/>
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                <img src={brand2} alt="Company 2" className="max-w-full max-h-full object-contain"/>
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                <img src={brand3} alt="Company 3" className="max-w-full max-h-full object-contain"/>
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                <img src={brand4} alt="Company 4" className="max-w-full max-h-full object-contain"/>
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                <img src={brand5} alt="Company 5" className="max-w-full max-h-full object-contain"/>
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                <img src={brand6} alt="Company 6" className="max-w-full max-h-full object-contain"/>
              </div>
            </div>
            <div className="w-full border-t border-gray-300 my-4"></div>
          </div>
        </div>
      </nav>
      <div className='text-2xl h-100'>hi</div>
    </div>
  );
};

export default Navbar;