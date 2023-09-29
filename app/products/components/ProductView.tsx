'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { BsLightningCharge, BsUsbMicro } from 'react-icons/bs';
import { PiRadioLight } from 'react-icons/pi';
import {
  AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineUsb,
} from 'react-icons/ai';
import { Separator } from '@/components/ui/separator';
import Tag from './Tag';

export default function ProductView() {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="relative w-full flex justify-center pt-2 md:pt-4">
        <div className="h-full lg:h-[30rem] w-full flex max-md:flex-col justify-center max-w-7xl ">
          <div className="md:w-1/2 h-full flex">
            <Swiper
              modules={[EffectCoverflow, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ el: '.swiper-pagination', clickable: true, bulletClass: 'swiper-pagination-bullet' }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              className="h-[22rem] lg:h-[30rem] w-full"
            >
              <SwiperSlide className="px-8 py-10">
                <div className="bg-secondary flex justify-center items-center h-full">
                  Slide1
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-8 py-10">
                <div className="bg-secondary flex justify-center items-center h-full">
                  Slide2
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-8 py-10">
                <div className="bg-secondary flex justify-center items-center h-full">
                  Slide3
                </div>
              </SwiperSlide>

              <button className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-2 z-50" type="button">
                <BiChevronLeft className="w-6 lg:w-8 h-6 lg:h-8 text-zinc-400 dark:text-zinc-600" />
              </button>
              <button className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-2 z-50" type="button">
                <BiChevronRight className="w-6 lg:w-8 h-6 lg:h-8 text-zinc-400 dark:text-zinc-600" />
              </button>

              <div className="swiper-pagination absolute left-1/2 mt-4 -translate-x-1/2 z-[999]" />

            </Swiper>

            <ul className="h-full w-24 grid grid-rows-4 gap-y-1 md:gap-y-2 py-4 max-md:pr-4 items-center">
              <Tag icon={<BsUsbMicro className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Entrada Micro SD" />
              <Tag icon={<BsLightningCharge className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Batería recargable" />
              <Tag icon={<AiOutlineUsb className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Entrada USB" />
              <Tag icon={<PiRadioLight className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Radio FM" />
            </ul>
          </div>
          <div className="relative md:w-1/2 h-full md:h-[22rem] lg:h-[30rem] w-full p-4 lg:p-6">
            <h1 className="text-2xl md:text-xl lg:text-3xl font-extrabold max-w-[70%] ">Product Name and maybe its best feature</h1>

            <div className="absolute top-6 right-6 font-semibold">
              <h3 className="text-2xl md:text-xl lg:text-3xl flex justify-end">
                <p className="text-primary">Q</p>
                499.00
              </h3>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div>
              <h3 className="w-full max-md:text-base max-lg:text-xs font-semibold tracking-wider mb-2">Descripción</h3>
              <span className="w-full max-md:text-base max-lg:text-xs">Descripción real del producto, incluye capacidades, cantidades, conexiones, etc. Cada producto tiene alrededor de 4 a 6 etiquetas y unas 5 cualidades por lo que dependiendo del producto se vera mas lleno o mas vacio</span>
              <div className="flex gap-x-4 max-md:mt-2">
                <div className="flex gap-x-2 w-1/2 max-md:text-base max-lg:text-xs">
                  <h3 className="my-2 lg:mt-4 font-semibold tracking-wider">Categoría:</h3>
                  <p className="my-2 lg:mt-4">Bocinas</p>
                </div>
                <div className="flex gap-x-2 w-1/2 max-md:text-base max-lg:text-xs">
                  <h3 className="my-2 lg:mt-4 font-semibold tracking-wider">Stock:</h3>
                  <p className="my-2 lg:mt-4">10</p>
                </div>
              </div>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div className="w-full md:absolute bottom-4 lg:bottom-6 left-1/2 md:-translate-x-1/2 md:px-4 lg:px-6 flex justify-between items-end">

              <div className="flex flex-col justify-end">
                <p className=" max-md:text-base max-lg:text-xs font-bold pb-1 max-md:pb-2">Cantidad</p>
                <div className="flex">
                  <button type="button" className="w-8 lg:w-10 h-8 lg:h-10 rounded-l-lg bg-primary flex justify-center items-center">
                    <AiOutlineMinus className="w-4 h-4 text-white" />
                  </button>
                  <div className="w-14 lg:w-16 h-8 lg:h-10 bg-secondary flex justify-center items-center text-xs lg:text-sm">2</div>
                  <button type="button" className="w-8 lg:w-10 h-8 lg:h-10 rounded-r-lg bg-primary flex justify-center items-center">
                    <AiOutlinePlus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <button type="submit" className="bg-primary h-8 lg:h-10 rounded-2xl max-lg:text-xs text-sm py-2 px-4 lg:px-6 flex justify-center items-center tracking-wider text-white font-semibold">
                Añadir al carrito
                <AiOutlineShoppingCart className="w-4 lg:w-5 h-4 lg:h-5 ml-1" />
              </button>

            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-semibold text-center py-6 lg:text-3xl">Mas Productos</h2>
        <p className="w-full text-center lg:text-xl ">Echa un vistazo a las categorias de productos que ofrecemos!</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10 h-full p-5">
          <div className="w-full lg:h-96 h-80 flex justify-center">
            <div className="relative bg-secondary rounded-xl h-full w-full max-w-xl p-5">
              a
              <div className="absolute left-1/2 bottom-5 -translate-x-1/2 px-5 w-full flex justify-center">
                <Button className="w-40 font-semibold">Bocinas</Button>
              </div>
            </div>
          </div>
          <div className="max-md:hidden w-full lg:h-96 h-80 flex justify-center">
            <div className="relative bg-secondary rounded-xl h-full w-full max-w-xl p-5">
              a
              <div className="absolute left-1/2 bottom-5 -translate-x-1/2 px-5 w-full flex justify-center">
                <Button className="w-40 font-semibold">Audifonos</Button>
              </div>
            </div>
          </div>
          <div className="max-lg:hidden w-full lg:h-96 h-80 flex justify-center">
            <div className="relative bg-secondary rounded-xl h-full w-full max-w-xl p-5">
              a
              <div className="absolute left-1/2 bottom-5 -translate-x-1/2 px-5 w-full flex justify-center">
                <Button className="w-40 font-semibold">Accesorios</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
