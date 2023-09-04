'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Logo from './logo';
import Sidebar from './Sidebar';

export default function NavBar() {
  const session = false; // Sesion del usuario

  const [value, setValue] = useState('');

  const [darkMode, setDarkMode] = useState('light');

  const [fade, setFade] = useState('border-b');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30 && currentScrollY > prevScrollY) {
        setFade('-translate-y-24 duration-300');
      } else {
        setFade('duration-200');
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    const mode = localStorage.getItem('theme');
    if (mode != null && mode !== 'system') {
      setDarkMode(mode);
    }
  }, []);

  return (
    <>
      <div className="fixed w-full z-[110] h-[60px] flex justify-between px-6 sm:px-8 bg-white dark:bg-zinc-950">
        <Link
          href="/"
          className="h-full flex flex-col items-center justify-center"
        >
          <Logo className="max-sm:w-[70px] max-sm:h-[25]" />
          <p className="text-[10px] font-bold">DISMOVA</p>
        </Link>

        <div className="relative flex items-center">
          <Input
            type="search"
            className="md:w-96 xs:w-52 w-48 h-8 pr-2 focus-visible:ring-offset-0 text-xs"
            value={value}
            placeholder="Search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button className="absolute right-0 h-8 w-10 p-0 rounded-l-none border border-l-0 border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:text-black dark:hover:bg-white">
            <BiSearch className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center max-xs:text-xs dark:text-zinc-200 ml-4 gap-8">
          <div className="max-xs:hidden flex items-center">
            <Sheet>
              <SheetTrigger>
                <AiOutlineShoppingCart className="dark:text-white w-6 h-6" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-center">Mi Carrito</SheetTitle>
                  {!session && (
                    <>
                      <SheetDescription className="pb-2 text-center">
                        Inicia sesión o registrate para poder agregar productos
                        a tu carrito!
                      </SheetDescription>
                      <Button asChild>
                        <Link href="/login">Iniciar Sesión</Link>
                      </Button>
                    </>
                  )}
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </div>
      <div
        className={`fixed z-[100] w-full mt-[60px] h-[40px] font-semibold flex flex-wrap items-center justify-between mx-auto px-6 xs:px-8 bg-zinc-800 transition-all border-gray-200 dark:border-zinc-700 ${fade}`}
      >
        <ul className="w-full text-center grid grid-cols-4 gap-10 font-normal text-sm text-white">
          <li>
            <Button variant="link" className="text-white">
              <Link href="/productos">Ofertas</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white">
              <Link href="/productos">Ofertas</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white">
              <Link href="/productos">Ofertas</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white">
              <Link href="/productos">Ofertas</Link>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
