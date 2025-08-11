import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">JSFly</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              Contactame
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
                             <button
                 onClick={() => scrollToSection('home')}
                 className="block w-full text-left text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium py-2"
               >
                 Inicio
               </button>
               <button
                 onClick={() => scrollToSection('about')}
                 className="block w-full text-left text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium py-2"
               >
                 Sobre Mí
               </button>
               <button
                 onClick={() => scrollToSection('portfolio')}
                 className="block w-full text-left text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium py-2"
               >
                 Portfolio
               </button>
               <button
                 onClick={() => scrollToSection('contact')}
                 className="block w-full text-left text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium py-2"
               >
                 Contacto
               </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
