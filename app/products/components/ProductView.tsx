'use client';

import { useState } from 'react';
import { Drawer } from 'vaul';

import {
  AiOutlineClose, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineUsb,
} from 'react-icons/ai';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { BsLightningCharge, BsUsbMicro } from 'react-icons/bs';
import { PiRadioLight } from 'react-icons/pi';
import Tag from './Tag';

export default function ProductView() {
  const [openDrawer, setOpenDrawer] = useState<boolean>();

  return (
    <Drawer.Root open={openDrawer}>
      <Drawer.Trigger asChild onClick={() => setOpenDrawer(true)}>
        <button type="button">Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <Drawer.Content className="bg-background h-[85vh] lg:h-full z-[990] mt-24 fixed bottom-0 left-0 right-0">

          <div className="lg:hidden h-6 rounded-t-full bg-background flex justify-center items-center">
            <div className="mx-auto my-3 w-20 h-1.5 flex-shrink-0 rounded-full bg-secondary" />
          </div>

          <div className="flex max-lg:flex-col bg-background h-[82vh] lg:h-full">

            <div className="relative w-full bg-secondary font-bold max-lg:h-[35%] h-full">

              <div className="absolute top-4 lg:top-8 w-20 lg:w-32 h-10 lg:h-16">
                <p className="pl-1 lg:pl-4 text-[10px] lg:text-sm">AUDIO PRO</p>
                <div className="text-white text-sm lg:text-lg flex pl-1 lg:pl-4 items-center bg-primary h-6 lg:h-10 w-20 lg:w-32 rounded-r-full">
                  ISP-3016
                </div>
              </div>

              <div className="absolute top-3 right-3 lg:hidden">
                <button type="button" onClick={() => setOpenDrawer(false)}>
                  <AiOutlineClose className="w-4 lg:w-6 h-4 lg:h-6 text-zinc-700 dark:text-zinc-300" />
                </button>
              </div>

              <div className="absolute top-1/2 left-1 lg:left-3">
                <button type="button">
                  <BiChevronLeft className="w-5 lg:w-8 h-5 lg:h-8 text-zinc-400 dark:text-zinc-600" />
                </button>
              </div>
              <div className="absolute top-1/2 right-1 lg:right-3">
                <button type="button">
                  <BiChevronRight className="w-5 lg:w-8 h-5 lg:h-8 text-zinc-700 dark:text-zinc-300" />
                </button>
              </div>

              <div className="absolute left-1/2 bottom-4 lg:bottom-6 grid grid-cols-3 -translate-x-1/2">
                <input type="button" className="rounded-full text-secondary bg-primary w-[10px] lg:w-4 h-[10px] lg:h-4 mx-2" />
                <input type="button" className="rounded-full text-secondary bg-zinc-500 w-[10px] lg:w-4 h-[10px] lg:h-4 mx-2" />
                <input type="button" className="rounded-full text-secondary bg-zinc-500 w-[10px] lg:w-4 h-[10px] lg:h-4 mx-2" />
              </div>

            </div>

            <div className="relative w-full p-4 lg:p-8 max-lg:h-[65%] h-full">

              <div className="absolute top-4 right-4 max-lg:hidden">
                <button type="button" onClick={() => setOpenDrawer(false)}>
                  <AiOutlineClose className="w-4 lg:w-6 h-4 lg:h-6 text-zinc-700 dark:text-zinc-300" />
                </button>
              </div>

              <h1 className="max-xs:text-xl lg:mt-4 max-sm:text-2xl text-3xl lg:text-4xl font-extrabold max-w-[65%]">Product Name and maybe its best feature</h1>

              <div className="absolute lg:mt-4 top-4 lg:top-8 right-4 lg:right-8 px-2 font-semibold">
                <h3 className="text-2xl lg:text-4xl flex justify-end">
                  <p className="text-primary">Q</p>
                  499.00
                </h3>
                <div className="flex justify-end text-sm lg:text-lg">
                  <p className="font-extrabold pr-1">Stock:</p>
                  <p>10</p>
                </div>
              </div>

              <div className="w-full mt-2 lg:mt-4">
                <div className="w-16 lg:w-28 h-6 lg:h-10 lg:mb-4 rounded-full bg-primary text-white flex items-center justify-center max-lg:text-[10px] font-bold">
                  Etiquetas
                </div>
                <ul className="w-full my-2 grid grid-cols-6 gap-2 lg:gap-4 max-w-xs lg:max-w-lg">
                  <Tag icon={<BsUsbMicro className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Entrada Micro SD" />
                  <Tag icon={<BsLightningCharge className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Batería recargable" />
                  <Tag icon={<AiOutlineUsb className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Entrada USB" />
                  <Tag icon={<PiRadioLight className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Radio FM" />
                </ul>

                <p className="w-full mt-2 lg:mt-5 max-xs:text-sm sm:text-lg md:text-xl">Descripción real del producto, incluye capacidades, cantidades, conexiones, etc. Cada producto tiene alrededor de 4 a 6 etiquetas y unas 5 cualidades por lo que dependiendo del producto se vera mas lleno o mas vacio</p>

              </div>

              <div className="w-full flex justify-between absolute bottom-4 lg:bottom-8 left-0 px-4 lg:px-8">

                <div className="flex flex-col justify-end">
                  <p className="text-sm md:text-lg font-bold pb-1 md:pb-2">Cantidad</p>
                  <div className="flex h-8 md:h-11">
                    <button type="button" className="w-8 md:w-12 h-8 md:h-11 rounded-l-xl bg-primary flex justify-center items-center hover:bg-primary/90 ">
                      <AiOutlineMinus className="w-4 md:w-6 h-4 md:h-6 text-white font-semibold" />
                    </button>
                    <div className="w-14 md:w-20 bg-zinc-300 dark:bg-zinc-800 flex justify-center items-center max-md:text-xs">2</div>
                    <button type="button" className="w-8 md:w-12 h-8 md:h-11 rounded-r-xl bg-primary flex justify-center items-center hover:bg-primary/90 ">
                      <AiOutlinePlus className="w-4 md:w-6 h-4 md:h-6 text-white font-semibold" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 md:gap-4">
                  <button type="submit" className="bg-primary h-8 md:h-12 rounded-full text-white max-md:text-xs px-4 md:px-8 hover:bg-primary/90">Comprar</button>
                  <button type="submit" className="bg-background border border-primary h-8 md:h-12 rounded-full max-md:text-xs px-4 md:px-8 flex justify-center items-center">
                    Añadir al carrito
                    <AiOutlineShoppingCart className="w-4 md:w-6 h-4 md:h-6 ml-1" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
