'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import Product from '@/app/products/components/Product';

type SliderProps = {
  swiperInfo: {
    id: string, longTitle?: string, shortTitle: string, description?: string,
    category: string, price?: number, code: string
  }[];
  images?: { name: string }[];
};

export default function Slider({
  swiperInfo, images,
}: SliderProps) {
  const breakpoints = images ? {
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
  }
    : {
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
    };

  function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const [isLoading, setIsLoading] = useState(true);
  const [isLast, setIsLast] = useState(true);
  const [isFirst, setIsFirst] = useState(false);

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
      onSlideChange={() => { setIsLast(true); setIsFirst(true); }}
      onReachBeginning={() => setIsFirst(false)}
      onReachEnd={() => setIsLast(false)}
      className={`${images && 'h-[22rem] lg:h-[35rem]'}`}
    >
      {
       images
         ? swiperInfo.map((slide) => (
           images.map((img) => (
             <SwiperSlide className="relative px-4 xs:px-8 py-12" key={img.name}>
               <div className="w-full h-full flex flex-col justify-center items-center">
                 <div className="group flex flex-col justify-center items-center w-full h-full rounded-t-xl bg-secondary rounded-xl">
                   <div className="rounded-xl relative my-4 w-44 h-44 xs:w-52 xs:h-52 lg:w-96 lg:h-96">
                     <Image
                       src={`https://ttcctffsichnykxnkaob.supabase.co/storage/v1/object/public/products/${slide.category}/${slide.code}/${img.name}.webp?t=2023-11-05T02%3A42%3A54.379Z`}
                       fill
                       alt={slide.code}
                       className={cn(
                         'duration-200 ease-in-out',
                         isLoading
                           ? 'grayscale blur-lg scale-110'
                           : 'grayscale-0 blur-0 scale-100',
                       )}
                       onLoadingComplete={() => setIsLoading(false)}
                     />
                   </div>
                 </div>
               </div>
             </SwiperSlide>
           ))
         ))
         : swiperInfo.map((slide) => (
           <SwiperSlide className="relative mb-8" key={slide.id}>
             <Product
               shortTitle={slide.shortTitle}
               description={slide.description}
               category={slide.category}
               price={slide.price}
               code={slide.code}
             />
           </SwiperSlide>
         ))
      }

      <button disabled={!isFirst} className={`swiper-button-prev absolute bg-black/60 disabled:bg-black/10 rounded-full top-1/2 z-50 ${!images ? 'left-3 -translate-y-8' : 'left-6 lg:left-12'}`} type="button">
        <BiChevronLeft className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
      </button>
      <button disabled={!isLast} className={`swiper-button-next absolute bg-black/60 disabled:bg-black/10 rounded-full top-1/2 z-50 ${!images ? 'right-3 -translate-y-8' : 'right-6 lg:right-12'}`} type="button">
        <BiChevronRight className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
      </button>

      <div className="swiper-pagination" />

    </Swiper>
  );
}
