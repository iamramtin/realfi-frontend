"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop >= 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMobileMenu = () => (
    <nav className="lg:hidden flex justify-between items-center">
      <button
        className="bg-gold-600 text-gray-900 py-2 px-4 rounded hover:bg-gold-700"
        type="button"
        onClick={() => window.open("https://github.com/iamramtin", "_blank")}
      >
        Get in touch
      </button>
      <button
        className="menu-btn bg-transparent p-1 transition-colors ease-in text-white"
        aria-label="Show menu"
        onClick={toggleMenu}
      >
        <Image src={`/assets/nav/menu-${isScrolled ? 'black' : 'white'}.svg`} alt="Show Menu" className="size-8" width={24} height={24} />
      </button>
      <div
        id="mobileMenu"
        className={`absolute top-0 left-0 h-screen bg-gray-900 w-full text-white flex flex-col justify-center items-center pt-20 transition-all duration-300 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="menu-btn absolute bg-transparent top-5 right-11 p-1 transition-colors ease-in text-white"
          aria-label="Hide menu"
          onClick={toggleMenu}
        >
          <Image src="/assets/nav/exit-white.svg" alt="Hide Menu" className="size-8" width={24} height={24} />
        </button>
        <a href="https://realfi.co/about" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-600 px-4 mb-4">
          About RealFi
        </a>
        <a href="https://realfi.co/blog" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-600 px-4 mb-4">
          Blog
        </a>
      </div>
    </nav>
  );

  return (
    <header className={`sticky top-0 p-4 text-center text-lg shadow ${isScrolled ? 'bg-gray-100' : 'bg-gray-900'}`} style={{ zIndex: 1000 }}>
      <div className="mx-auto max-w-screen-xl flex items-center justify-between pl-3 lg:px-3 2xl:px-0">
        <a title="Home" href="/" className="text-2xl font-bold text-gold-600">
          <Image src={`/assets/logo/${isScrolled ? 'primary.svg' : 'original.svg'}`} alt="RealFi" width={120} height={32} />
        </a>
        <nav className="hidden lg:flex">
          <a href="https://realfi.co/about" target="_blank" rel="noopener noreferrer" className={`px-4 ${isScrolled ? 'text-gray-900 hover:text-teal-600' : 'text-white hover:text-gold-600'}`}>
            About RealFi
          </a>
          <a href="https://realfi.co/blog" target="_blank" rel="noopener noreferrer" className={`px-4 ${isScrolled ? 'text-gray-900 hover:text-teal-600' : 'text-white hover:text-gold-600'}`}>
            Blog
          </a>
          <div className="inline items-center justify-center">
            <button
              className="bg-gold-600 text-gray-900 py-2 px-4 rounded hover:bg-gold-700 font-medium transition-colors ease-in text-sm"
              type="button"
              onClick={() => window.open("https://github.com/iamramtin", "_blank")}
            >
              Get in touch
            </button>
          </div>
        </nav>
        {renderMobileMenu()}
      </div>
    </header>
  );
};

export default Header;
