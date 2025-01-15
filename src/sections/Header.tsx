'use client';

import { useState, useEffect } from 'react';
import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import { Button } from '@/components/Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`py-4 border-b border-white/10 md:border-none sticky top-0 z-10 ${
        isScrolled ? 'backdrop-blur bg-black/50' : 'backdrop-blur-none'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center md:border md:border-white/15 md:p-2.5 mx-w-2xl mx-auto md:backdrop-blur">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-16 items-center text-sm">
              <a className="text-white/70 hover:text-white transition" href="#">
                Home
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                About
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                Services
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                Blog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
