import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import LogoIcon from '../assets/shared/logo.svg';
import HamburgerIcon from '../assets/shared/icon-hamburger.svg';
import CloseIcon from '../assets/shared/icon-close.svg';

const Navbar = () => {
    const navLinks = [
    { number: '00', label: 'HOME', path: '/' },
    { number: '01', label: 'DESTINATION', path: '/destination' },
    { number: '02', label: 'CREW', path: '/crew' },
    { number: '03', label: 'TECHNOLOGY', path: '/technology' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <header className="w-full flex items-center justify-between pt-6 md:pt-10 lg:pt-10 px-6 md:px-0 absolute top-0 z-50">
      
      {/* Logo Container */}
      <div className="md:pl-10 lg:pl-16 flex-shrink-0">
        <Link to="/">
            <img src={LogoIcon} alt="Space Logo" className="w-8 h-8 md:w-10 md:h-10" />
        </Link>
      </div>

      {/* Decorative Line (Hidden on mobile and tablet) */}
      <div className="hidden lg:block h-[1px] bg-white/25 flex-grow ml-16 relative z-20 translate-x-8"></div>

      {/* Navigation Menu (Glassmorphism effect) */}
      <nav className="hidden md:flex bg-white/5 backdrop-blur-md px-12 lg:px-32">
        <ul className="flex gap-10 lg:gap-12 h-24">
          {navLinks.map((link) => (
            <li key={link.label} className="flex items-center h-full">
              {/* NavLink automatically exposes 'isActive' to its className function */}
              <NavLink
                to={link.path} end={link.path === '/'}
                className={({ isActive }) =>
                  `uppercase font-sans tracking-[0.15em] text-sm md:text-base flex gap-3 h-full items-center border-b-4 transition-all duration-300 ${
                    isActive 
                      ? 'border-white text-white' 
                      : 'border-transparent text-gray-300 hover:border-gray-400 hover:text-white'
                  }`
                }
              >
                <span className="font-bold hidden lg:inline-block">
                  {link.number}
                </span>
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Menu Icon */}
      <button className="md:hidden text-white focus:outline-none z-50" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <img src={CloseIcon} alt="Close Menu" className="w-6 h-6" />
        ) : (
          <img src={HamburgerIcon} alt="Menu" className="w-6 h-6" />
        )}
      </button>

      {/* MOBILE NAVIGATION DRAWER */}
      <nav 
        className={`fixed top-0 right-0 h-screen w-2/3 max-w-[300px] bg-white/5 backdrop-blur-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-32 pl-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.path}
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `uppercase font-sans tracking-[0.15em] text-lg flex gap-3 w-full border-r-4 transition-colors ${
                    isActive 
                      ? 'border-white text-white' 
                      : 'border-transparent text-gray-300'
                  }`
                }
              >
                <span className="font-bold w-6">{link.number}</span>
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}

export default Navbar
