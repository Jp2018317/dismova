'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { VscAccount } from 'react-icons/vsc';
import { AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai';
import { LiaBarsSolid } from 'react-icons/lia';
import { IoMdSettings } from 'react-icons/io';
import { BsHeadphones, BsTelephone } from 'react-icons/bs';
import { LuMonitorSpeaker } from 'react-icons/lu';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { ROUTES } from '@/config';
import { Button } from './ui/button';
import Logo from './logo';
import { ModeToggle } from './ui/ModeToggle';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center max-xs:text-xs dark:text-zinc-200">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <LiaBarsSolid className="text-zinc-900 dark:text-zinc-200 hover:text-primary dark:hover:text-primary duration-150 w-6 h-6" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="w-full text-center flex justify-center">
                <Logo className="w-[120px] h-[50px]" />
              </div>
              <p className="text-sm text-center font-bold">DISMOVA</p>
            </SheetTitle>
            <SheetDescription className="flex justify-evenly py-2">
              <Button asChild>
                <Link href={ROUTES.auth.login}>Ingresar</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={ROUTES.auth.signup}>Registrarme</Link>
              </Button>
            </SheetDescription>
          </SheetHeader>

          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2" />

          <ul className="py-1">
            <li>
              <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
                <Link
                  href={ROUTES.account}
                  className="w-full flex items-center justify-start gap-2"
                >
                  <VscAccount className="dark:text-white w-6 h-6" />
                  Mi Perfil
                </Link>
              </Button>
            </li>
            <li>
              <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
                <Link
                  href={ROUTES.cart}
                  className="w-full flex items-center justify-start gap-2"
                >
                  <AiOutlineShoppingCart className="dark:text-white w-6 h-6" />
                  Mi Carrito
                </Link>
              </Button>
            </li>
          </ul>

          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2" />

          <ul className="py-1">
            <li>
              <h2 className="px-2 py-1 text-sm font-semibold dark:text-white">
                Productos
              </h2>
              <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
                <Link
                  href={ROUTES.cart}
                  className="w-full flex items-center justify-start gap-2"
                >
                  <LuMonitorSpeaker className="dark:text-white w-6 h-6" />
                  Bocinas y Bafles
                </Link>
              </Button>
              <Button onClick={() => setOpen(!open)} variant="ghost" className="w-full">
                <Link
                  href={ROUTES.cart}
                  className="w-full flex items-center justify-start gap-2"
                >
                  <BsHeadphones className="dark:text-white w-6 h-6" />
                  Audifonos y otros
                </Link>
              </Button>
            </li>
          </ul>

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
                  href="/contacto"
                  className="w-full flex items-center justify-start gap-2"
                >
                  <BsTelephone className="dark:text-white w-5 h-5" />
                  Contactanos
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

          <div className="w-full text-end">
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
