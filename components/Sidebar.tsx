'use client'

import Link from 'next/link'

import Logo from './logo'
import { VscAccount } from 'react-icons/vsc'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { LiaBarsSolid } from 'react-icons/lia'
import { IoMdSettings } from 'react-icons/io'
import { BsTelephone } from 'react-icons/bs'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { Button } from './ui/button'
import { type Dispatch, type SetStateAction } from 'react'
import { ModeToggle } from './ui/ModeToggle'

interface DarkMode {
  setDarkMode: Dispatch<SetStateAction<string>>
  darkMode: string
}

export default function Sidebar ({ darkMode, setDarkMode }: DarkMode) {
  return (
    <div className="flex items-center max-xs:text-xs dark:text-zinc-200">
      <Sheet>
        <SheetTrigger>
          <LiaBarsSolid className="dark:text-white w-6 h-6" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="w-full text-center flex justify-center">
                <Logo className={'w-[120px] h-[50px]'}></Logo>
              </div>
              <p className="text-sm text-center font-bold">DISMOVA</p>
            </SheetTitle>
            <SheetDescription className="flex justify-evenly py-2">
              <Button asChild>
                <Link href="/login">Ingresar</Link>
              </Button>
              <Button asChild variant={'ghost'}>
                <Link href="/registro">Registrarme</Link>
              </Button>
            </SheetDescription>
          </SheetHeader>

          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2" />
          <ul className="py-1">
            <li>
              <Button variant={'ghost'} className="w-full">
                <Link
                  href="#"
                  className="w-full flex items-center justify-start gap-2"
                >
                  <VscAccount className="dark:text-white w-6 h-6" />
                  Cuenta
                </Link>
              </Button>
            </li>
            <li>
              <Button variant={'ghost'} className="w-full">
                <Link
                  href="#"
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
              <Button variant={'ghost'} className="w-full">
                <Link
                  href="#"
                  className="w-full flex items-center justify-start gap-2"
                >
                  <BsTelephone className="dark:text-white w-5 h-5" />
                  Contáctanos
                </Link>
              </Button>
            </li>
            <li>
              <Button variant={'ghost'} className="w-full">
                <Link
                  href="#"
                  className="w-full flex items-center justify-start gap-2"
                >
                  <IoMdSettings className="dark:text-white w-6 h-6" />
                  Configuración
                </Link>
              </Button>
            </li>
          </ul>

          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2" />

          <ModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
