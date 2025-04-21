import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-sm font-medium hover:text-primary transition-colors ${
      isActive
        ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
        : scrolled ? 'text-text' : 'text-white'
    }`;

  const mobileMenuClasses = `fixed inset-0 z-50 transform transition-transform ease-in-out duration-300 ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`;

  return (
    <header className={navbarClasses}>
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <div className="text-2xl font-bold font-heading">
            <span className={scrolled ? 'text-primary' : 'text-white'}>SHIVA</span>
            <span className={scrolled ? 'text-text' : 'text-secondary'}>SUSHI</span>
          </div>
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <a 
            href="tel:+5411123456789" 
            className="mr-4 p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <Phone size={18} />
          </a>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-full ${scrolled ? 'text-primary' : 'text-white'}`}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={linkClasses}>
            Inicio
          </NavLink>
          <NavLink to="/menu" className={linkClasses}>
            Menú
          </NavLink>
          <NavLink to="/ubicacion" className={linkClasses}>
            Ubicación
          </NavLink>
          <NavLink to="/historia" className={linkClasses}>
            Nuestra Historia
          </NavLink>
          <NavLink to="/pedido" className={linkClasses}>
            Armá tu Pedido
          </NavLink>
          <a
            href="tel:+5411123456789"
            className="ml-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors flex items-center"
          >
            <Phone size={16} className="mr-2" /> Pedir ahora
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className={mobileMenuClasses}>
          <div className="flex flex-col h-full bg-white">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-2xl font-bold font-heading">
                <span className="text-primary">SHIVA</span>
                <span className="text-text">SUSHI</span>
              </div>
              <button onClick={closeMenu} className="p-2 text-gray-600">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col py-4">
              <NavLink
                to="/"
                className="px-4 py-3 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
              >
                Inicio
              </NavLink>
              <NavLink
                to="/menu"
                className="px-4 py-3 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
              >
                Menú
              </NavLink>
              <NavLink
                to="/ubicacion"
                className="px-4 py-3 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
              >
                Ubicación
              </NavLink>
              <NavLink
                to="/historia"
                className="px-4 py-3 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
              >
                Nuestra Historia
              </NavLink>
              <NavLink
                to="/pedido"
                className="px-4 py-3 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
              >
                Armá tu Pedido
              </NavLink>
            </nav>
            <div className="mt-auto p-4 bg-gray-50">
              <a
                href="tel:+5411123456789"
                className="flex items-center justify-center w-full py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                <Phone size={18} className="mr-2" /> Llamar ahora
              </a>
              <NavLink
                to="/pedido"
                className="flex items-center justify-center w-full py-3 mt-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <ShoppingBag size={18} className="mr-2" /> Armar pedido
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;