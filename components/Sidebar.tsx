'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { VscAccount } from 'react-icons/vsc';
import { AiOutlineShoppingCart, AiOutlineHome, AiOutlineHeart } from 'react-icons/ai';
import { LiaBarsSolid } from 'react-icons/lia';
import { IoMdSettings } from 'react-icons/io';
import { BsHeadphones, BsDoorOpen } from 'react-icons/bs';
import { LuMonitorSpeaker } from 'react-icons/lu';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { User } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdOutlineCable } from 'react-icons/md';
import { ROUTES } from '@/app/config/routes';
import Logo from '@/public/images/Logo.png';
import Image from 'next/image';
import { Button } from './ui/button';
import { ModeToggle } from './ui/ModeToggle';

type Props = {
  user: User | null
};

export default function Sidebar({ user }: Props) {
  const [open, setOpen] = useState(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  return (
    <div className="flex items-center max-xs:text-xs dark:text-zinc-200">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <LiaBarsSolid className="text-zinc-900 dark:text-zinc-200 hover:text-primary dark:hover:text-primary duration-150 w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="py-4">
              <div className="w-full text-center flex justify-center">
                <Image
                  src={Logo}
                  alt="Crea Caps Logo"
                  width={140}
                  height={120}
                />
              </div>
            </SheetTitle>
            {
              user ? (
                <ul className="py-1 grid grid-cols-2 gap-2">
                  <li>
                    <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full max-xs:px-0">
                      <Link
                        href={ROUTES.account}
                        className="w-full flex items-center justify-center gap-2"
                      >
                        <VscAccount className="dark:text-white w-6 h-6" />
                        Perfil
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button
                      onClick={() => {
                        supabase.auth.signOut().then(() => {
                          window.location.reload();
                        });
                      }}
                      variant="ghost"
                      className="w-full max-xs:px-0 flex items-center justify-center gap-2 dark:text-white hover:text-red-500 dark:hover:text-red-500"
                    >
                      <BsDoorOpen className="w-5 h-5" />
                      Salir
                    </Button>
                  </li>
                </ul>
              )
                : (
                  <SheetDescription className="flex justify-evenly py-2">
                    <Button asChild>
                      <Link href={ROUTES.auth.login}>Ingresar</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link href={ROUTES.auth.signup}>Registrarme</Link>
                    </Button>
                  </SheetDescription>
                )
            }
          </SheetHeader>

          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2" />

          <ul className="py-1">
            <li>
              <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
                <Link
                  href={ROUTES.cart}
                  className="w-full flex items-center justify-start gap-2"
                >
                  <AiOutlineShoppingCart className="dark:text-white w-6 h-6" />
                  Carrito
                </Link>
              </Button>
            </li>
            <li>
              <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
                <Link
                  href={ROUTES.favorites}
                  className="w-full flex items-center justify-start gap-2"
                >
                  <AiOutlineHeart className="dark:text-white w-6 h-6" />
                  Favoritos
                </Link>
              </Button>
            </li>
          </ul>

          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2" />

          <div className="py-1">
            <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
              <Link
                href={ROUTES.speakers}
                className="w-full flex items-center justify-start gap-2"
              >
                <LuMonitorSpeaker className="dark:text-white w-6 h-6" />
                Bocinas
              </Link>
            </Button>
            <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
              <Link
                href={ROUTES.headphones}
                className="w-full flex items-center justify-start gap-2"
              >
                <BsHeadphones className="dark:text-white w-6 h-6" />
                Audifonos
              </Link>
            </Button>
            <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
              <Link
                href={ROUTES.accesories}
                className="w-full flex items-center justify-start gap-2"
              >
                <MdOutlineCable className="dark:text-white w-6 h-6" />
                Accesorios
              </Link>
            </Button>
            <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
              <Link
                href={ROUTES.others}
                className="w-full flex items-center justify-start gap-2"
              >
                <FiMoreHorizontal className="dark:text-white w-6 h-6" />
                Otros
              </Link>
            </Button>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2" />

          <ul className="py-1">
            <li>
              <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
                <Link
                  href={ROUTES.root}
                  className="w-full flex items-center justify-start gap-2"
                >
                  <AiOutlineHome className="dark:text-white w-5 h-5" />
                  Inicio
                </Link>
              </Button>
            </li>
            <li>
              <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
                <Link
                  href={ROUTES.account + ROUTES.settings}
                  className="w-full flex items-center justify-start gap-2"
                >
                  <IoMdSettings className="dark:text-white w-5 h-5" />
                  Configuración
                </Link>
              </Button>
            </li>
          </ul>

          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2" />

          <div className="w-full flex p-2 gap-x-6 items-center">
            <ModeToggle />
            <p className="font-medium text-sm dark:text-white dark:hidden">Modo Claro</p>
            <p className="font-medium text-sm dark:text-white hidden dark:block">Modo Oscuro</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
