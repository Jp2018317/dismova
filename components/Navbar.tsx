'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { BiSearch } from 'react-icons/bi';
import { ROUTES } from '@/config';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { User } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Logo from './logo';
import Sidebar from './Sidebar';

export default function NavBar() {
  const [fade, setFade] = useState('border-b');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [userLogged, setUserLogged] = useState<User | null>();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  async function getUser() {
    const loggedUser = await supabase.auth.getUser();
    if (!loggedUser.error) {
      setUserLogged(loggedUser?.data.user);
    }
  }

  useEffect(() => {
    getUser();
  });

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav className="w-full sticky z-40 top-0 flex flex-col items-center">
      <section className="w-full z-30 h-[60px] bg-background flex flex-col items-center">
        <div className="w-full h-full max-w-7xl flex justify-between px-4">
          <Link
            href={ROUTES.root}
            className="h-full flex flex-col items-center justify-center"
          >
            <Logo className="max-sm:w-[70px] max-sm:h-[25]" />
            <p className="text-[10px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] to-[#DD2476]">DISMOVA</p>
          </Link>

          <form className="relative flex items-center">
            <Input
              type="text"
              className="md:w-96 sm:w-72 h-8 pr-10 mx-2 focus-visible:ring-offset-0 text-xs"
              placeholder="Search"
            />
            <Button
              type="submit"
              className="absolute right-0 p-0 h-8 w-8 sm:w-10 mr-2 rounded-l-none border border-primary border-l-0"
            >
              <BiSearch className="w-4 h-4" />
            </Button>
          </form>

          <div className="flex items-center max-xs:text-xs dark:text-zinc-200 gap-4 md:gap-8">
            <Link href="/products/favoritos" className="max-sm:hidden hover:text-primary">
              <AiOutlineHeart className="text-zinc-900 dark:text-zinc-200 hover:text-primary dark:hover:text-primary duration-150 w-5 h-5" />
            </Link>
            <Link href="/products/cart" className="max-sm:hidden hover:text-primary">
              <AiOutlineShoppingCart className="text-zinc-900 dark:text-zinc-200 hover:text-primary dark:hover:text-primary duration-150 w-5 h-5" />
            </Link>

            <Sidebar user={userLogged || null} />
          </div>
        </div>
      </section>
      <section
        className={`w-full z-20 h-[40px] font-semibold flex flex-wrap items-center justify-center mx-auto bg-secondary transition-all border-gray-200 dark:border-zinc-700 ${fade}`}
      >
        <ul className="w-full max-w-7xl px-6 xs:px-8 text-center grid grid-cols-4 gap-10 font-normal text-sm text-zinc-900 dark:text-zinc-200">
          <li>
            <Link href={ROUTES.root} className="hover:underline underline-offset-4">Ofertas</Link>
          </li>
          <li>
            <Link href={ROUTES.root} className="hover:underline underline-offset-4">Ofertas</Link>
          </li>
          <li>
            <Link href={ROUTES.root} className="hover:underline underline-offset-4">Ofertas</Link>
          </li>
          <li>
            <Link href={ROUTES.root} className="hover:underline underline-offset-4">Ofertas</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
