'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Gérer le scroll pour l'effet de réduction
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile au clic sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white shadow-md py-3'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Toujours visible */}
          <Link 
            href="/" 
            className="flex items-center gap-3 no-underline group"
            onClick={handleLinkClick}
          >
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 transition-transform group-hover:scale-105">
              <img 
                src="/images/ban12.png" 
                alt="Logo International Transfer" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl sm:text-2xl'
              } text-gray-900`}>
                <span className="text-primary">Олон улсын</span> шилжүүлэг
              </span>
              <span className="text-xs text-gray-500 font-normal hidden sm:block">
                Хурдан, аюулгүй мөнгө шилжүүлэг
              </span>
            </div>
          </Link>

          {/* Menu Desktop - Centré */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <li>
                <Link 
                  href="/" 
                  className="relative text-gray-700 hover:text-primary font-medium text-lg transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  Гэртээ
                </Link>
              </li>
              <li>
                <Link 
                  href="/login" 
                  className="relative text-gray-700 hover:text-primary font-medium text-lg transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  Нэгдэх
                </Link>
              </li>
              <li>
                <Link 
                  href="/help" 
                  className="relative text-gray-700 hover:text-primary font-medium text-lg transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  <i className="fas fa-question-circle mr-2"></i>
                  Тусламж
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/transfer" 
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Шилжүүлэг эхлүүлэх
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 -mr-2 text-gray-700 hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : ''
              }`}></span>
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen 
            ? 'visible opacity-100' 
            : 'invisible opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <Link 
                href="/" 
                className="flex items-center gap-3 no-underline"
                onClick={handleLinkClick}
              >
                <img 
                  src="/images/ban12.png" 
                  alt="Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="font-bold text-gray-900">
                  <span className="text-primary">Олон улсын</span> шилжүүлэг
                </span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-primary"
                aria-label="Close menu"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="p-6">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/" 
                    className="flex items-center p-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg"
                    onClick={handleLinkClick}
                  >
                    <i className="fas fa-home mr-3 text-lg w-6"></i>
                    Гэртээ
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/login" 
                    className="flex items-center p-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg"
                    onClick={handleLinkClick}
                  >
                    <i className="fas fa-sign-in-alt mr-3 text-lg w-6"></i>
                    Нэгдэх
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/help" 
                    className="flex items-center p-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg"
                    onClick={handleLinkClick}
                  >
                    <i className="fas fa-question-circle mr-3 text-lg w-6"></i>
                    Тусламж
                  </Link>
                </li>
              </ul>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t">
                <Link 
                  href="/transfer" 
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                  onClick={handleLinkClick}
                >
                  Шилжүүлэг эхлүүлэх
                </Link>
                
                {/* Contact Info Mobile */}
                <div className="mt-6 space-y-3">
                  <a 
                    href="tel:+97612345678" 
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <i className="fas fa-phone mr-3"></i>
                    +976 1234 5678
                  </a>
                  <a 
                    href="mailto:info@transfer.mn" 
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <i className="fas fa-envelope mr-3"></i>
                    info@transfer.mn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}