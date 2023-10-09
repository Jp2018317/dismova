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

type SliderProps = {
  swiperInfo: {
    id: string, name: string, description?: string, category: string, price?: number
  }[];
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
    500: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  } : {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 1,
    },
    1000: {
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
          <div className={`w-full h-full flex flex-col justify-center items-center ${productsList && 'border border-border rounded-xl'}`}>
            <Redirect className={`flex flex-col justify-center items-center w-full h-full rounded-t-xl bg-secondary ${!productsList && 'rounded-xl'}`} href={`/products/${slide.name}`}>
              <div className={`rounded-xl relative my-4 ${productsList ? 'w-40 h-40' : 'w-44 h-44 xs:w-52 xs:h-52 lg:w-96 lg:h-96'}`}>
                <Image src={`/images/${slide.category}/${slide.name}.webp`} fill alt={slide.name} />
              </div>
            </Redirect>
            {
                  productsList ? (
                    <>
                      <div className="w-full p-4 dark:text-white space-y-4">
                        <div className="w-full col-span-2">
                          <h2 className="font-semibold text-sm lg:text-lg">{slide.name}</h2>
                          <span className="text-xs line-clamp-2 leading-5 mt-1">{slide.description}</span>
                        </div>
                        {
                        slide.price ? (
                          <div className="w-full flex justify-between max-lg:text-sm font-semibold ">
                            <h2 className="flex">
                              <p className="text-primary">Q</p>
                              {slide.price.toFixed(2)}
                            </h2>
                            <Link
                              href={`/products/${slide.name}`}
                              className="dark:text-white hover:text-primary dark:hover:text-primary transition-all"
                            >
                              Ver Más
                            </Link>
                          </div>
                        ) : null
                      }
                      </div>
                      <div className="absolute flex flex-col items-center justify-center top-4 right-4 space-y-2">
                        <button
                          onClick={() => {
                            toast({
                              title: 'Añadido al Carrito',
                              description: `${slide.name} ha sido añadido al carrito de compras`,
                              action: <Link href="/products/cart" className="text-sm border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
                            });
                          }}
                          type="button"
                          className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary px-2 py-1 transition-all"
                        >
                          <AiOutlineShoppingCart className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            toast({
                              title: 'Añadido a Favoritos',
                              description: `${slide.name} ha sido añadido a la lista de favoritos`,
                              action: <Link href="/products/favoritos" className="text-sm border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
                            });
                          }}
                          type="button"
                          className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary px-2 py-1 transition-all"
                        >
                          <AiFillHeart className="w-5 h-5" />
                        </button>
                      </div>
                    </>
                  ) : null
                }
          </div>
        </SwiperSlide>
      ))}

      <button className={`swiper-button-prev absolute bg-black/60 rounded-full top-1/2 z-50 ${productsList ? 'left-3 -translate-y-8' : 'left-6 lg:left-12'}`} type="button">
        <BiChevronLeft className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
      </button>
      <button className={`swiper-button-next absolute bg-black/60 rounded-full top-1/2 z-50 ${productsList ? 'right-3 -translate-y-8' : 'right-6 lg:right-12'}`} type="button">
        <BiChevronRight className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
      </button>

      <div className="swiper-pagination" />

    </Swiper>
  );
}
