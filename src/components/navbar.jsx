import React, { useRef, useState } from "react";
import Button from "../ui/button";

import { ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {label: 'Home', href: '#hero'},
    {label: 'Projects', href: '#projects'},
    {label: 'Experiences', href: '#experiences'},
    {label: 'About', href: '#about'},
  ];

  const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

  return (
    <nav className='navbar-wrapper'>
      <div className='navbar-container'>
        <div className='flex justify-between items-center h-16 px-6'>
          
          <div className='shrink-0'>
            <a href="#home" className='text-2xl font-bold text-black'>
              Nico<span className='text-gold'>.</span>
            </a>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            {menuItems.map((item, index) => (
              <a
                key={index} 
                href={item.href}
                className='nav-link text-gray-500 hover:text-gray-700 px-1 py-2 text-sm font-medium'
              >
                {item.label}
              </a>
            ))}

            <Button size="md" onClick={scrollToAbout}>
                Let's Connect
                <ArrowUpRight className="w-5 h-5 ml-0.5"/>
            </Button>
          </div>
          
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-600 hover:text-gold focus:outline-none'
              aria-label='Toggle menu'
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`absolute left-0 w-full px-6 md:hidden grid transition-all duration-400 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className='overflow-hidden'>
          <div className='navbar-container flex flex-col px-3 pt-4 pb-4 mt-4 space-y-2 sm:px-3 rounded-[20px] border border-gray-300 bg-white'>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className='nav-link rounded-xl block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-150'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button size="md" onClick={scrollToAbout}>
                Let's Connect
                <ArrowUpRight className="w-5 h-5 ml-0.5"/>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;