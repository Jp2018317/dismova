'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { useToast } from '@/components/ui/use-toast';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Link from 'next/link';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

type SliderProps = {
  swiperInfo: { id: string, product: string, category: string, title?: string, price?: number }[];
  productsList?: boolean
};

export default function Slider({
  swiperInfo, productsList,
}: SliderProps) {
  const { toast } = useToast();
  const Redirect = productsList ? Link : 'div';
  const breakpoints = productsList ? {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  } : {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1,
    },
  };
  return (
    <Swiper
      breakpoints={breakpoints}
      modules={[EffectCoverflow, Pagination, Navigation]}
      spaceBetween={20}
      pagination={{ el: '.swiper-pagination', clickable: true, bulletClass: 'swiper-pagination-bullet' }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className={`${!productsList && 'h-[22rem] lg:h-[35rem]'}`}
    >
      {swiperInfo.map((slide) => (
        <SwiperSlide className={`relative ${!productsList ? 'px-4 xs:px-8 py-12' : 'pb-10'}`} key={slide.id}>
          <div className="w-full h-full">
            <div className="bg-secondary w-full h-full flex justify-center items-center rounded-xl">
              <Redirect className="flex flex-col justify-center items-center w-full h-full" href={`/products/${slide.product}`}>
                <div className={`relative my-4 ${productsList ? 'w-48 h-48' : 'w-44 h-44 xs:w-60 xs:h-60 lg:w-96 lg:h-96'}`}>
                  <Image src={`/images/${slide.category}/${slide.product}.webp`} fill alt={slide.product} />
                </div>
                {
                  productsList ? (
                    <>
                      <Separator className="dark:bg-zinc-700" />
                      <div className="w-full p-6 dark:text-white">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center font-semibold">
                            Category:
                            <p className="font-medium ml-2">{slide.category}</p>
                          </div>
                          <h3 className="flex text-xl font-semibold">
                            <p className="text-primary mr-1">Q</p>
                            {slide.price}
                            .00
                          </h3>
                        </div>
                        <h1 className="md:text-lg mt-4">{slide.title}</h1>
                      </div>
                    </>
                  ) : null
                }
              </Redirect>
            </div>

            { productsList
              ? (
                <div className="absolute flex flex-col top-4 right-4 space-y-2">
                  <Button
                    onClick={() => {
                      toast({
                        title: 'Añadido al Carrito',
                        description: `${slide.product} ha sido añadido al carrito de compras`,
                        action: <Link href="/products/cart" className="text-sm border border-border px-3 py-2 rounded-lg text-center"><p className="w-16">Ver Más</p></Link>,
                      });
                    }}
                    variant="secondary"
                    size="icon"
                    className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary transition-all"
                  >
                    <AiOutlineShoppingCart className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={() => {
                      toast({
                        title: 'Añadido a Favoritos',
                        description: `${slide.product} ha sido añadido a la lista de favoritos`,
                        action: <Link href="/products/favoritos" className="text-sm border border-border px-3 py-2 rounded-lg text-center"><p className="w-16">Ver Más</p></Link>,
                      });
                    }}
                    variant="secondary"
                    size="icon"
                    className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary transition-all"
                  >
                    <AiFillHeart className="w-6 h-6" />
                  </Button>
                </div>
              )
              : null}
          </div>
        </SwiperSlide>
      ))}

      <button className={`swiper-button-prev absolute top-1/2 -translate-y-1/2 z-50 ${productsList ? 'left-2' : 'left-8 '}`} type="button">
        <BiChevronLeft className="w-6 lg:w-10 h-6 lg:h-10 text-zinc-400 dark:text-zinc-600" />
      </button>
      <button className={`swiper-button-next absolute top-1/2 -translate-y-1/2 z-50 ${productsList ? 'right-2' : 'right-8'}`} type="button">
        <BiChevronRight className="w-6 lg:w-10 h-6 lg:h-10 text-zinc-400 dark:text-zinc-600" />
      </button>

      <div className="swiper-pagination" />

    </Swiper>
  );
}
