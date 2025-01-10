"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);  
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-[#090909]' : ''}`}>
        <div className="h-14 hidden sm:flex lg:h-10 flex-row items-center justify-center bg-[#00bb83]">
          <p className="text-white text-[13px] text-center lg:text-[15px]">
            20% de desconto nos planos - Faça parte da nossa comunidade!
          </p>
        </div>

        <nav className="flex justify-between items-center py-7 px-6 md:px-24">
          <a href="/" aria-label="Ir para a página inicial">
            <Image
              src="/next.svg"
              alt="FitFusion Logo"
              width={100}
              height={100}
            />
          </a>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>

          <ul className="hidden md:flex gap-9 text-gray-200">
            <li>
              <a
                href="#home"
                className="hover:text-[#00bb83] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#00bb83] transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#functions"
                className="hover:text-[#00bb83] transition-colors"
              >
                Funções
              </a>
            </li>
            <li>
              <a
                href="#plans"
                className="hover:text-[#00bb83] transition-colors"
              >
                Planos
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#00bb83] transition-colors">
                Perguntas frequentes
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`z-20 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      
      <div
        className={`fixed top-[4rem] z-20 pt-6 pb-4 left-0 w-full bg-[#090909] text-white transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="py-5 px-6">
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#home" className="hover:text-[#00bb83]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#00bb83]">
                Sobre
              </a>
            </li>
            <li>
              <a href="#functions" className="hover:text-[#00bb83]">
                Funções
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:text-[#00bb83]">
                Planos
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#00bb83]">
                Perguntas Frequentes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
