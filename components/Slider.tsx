'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import ProductCard from '@/app/products/components/ProductCard';
import { Product } from '@/app/config/types';
import { createBrowserClient } from '@supabase/ssr';
import { INIT_PAGINATION_SLIDER } from '@/app/config/constants';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

type SliderProps = {
  swiperInfo: Product[]
  showImages?: Boolean;
};

export default function Slider({
  swiperInfo, showImages,
}: SliderProps) {
  const breakpoints = showImages ? {
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

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const [pagination, setPagination] = useState(INIT_PAGINATION_SLIDER + 1);
  const [isLoading, setIsLoading] = useState(true);

  async function getMoreProducts() {
    if (!showImages && pagination < 10) {
      setPagination(pagination + 1);
      const { data } = await supabase.from('Products').select('*').range(pagination, pagination);
      if (data?.length) {
        swiperInfo.push(data[0]);
      }
    }
  }

  function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

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
      className={`${showImages && 'h-[22rem] lg:h-[35rem]'}`}
    >
      {
       showImages
         ? swiperInfo.map((slide) => (
           Array.from({ length: slide.imgAmmount }).map((_, index) => (
             <SwiperSlide className="relative px-4 xs:px-8 py-12">
               <div className="w-full h-full flex flex-col justify-center items-center">
                 <div className="group flex flex-col justify-center items-center w-full h-full rounded-t-xl bg-secondary rounded-xl">
                   <div className="rounded-xl relative my-4 w-44 h-44 xs:w-52 xs:h-52 lg:w-96 lg:h-96">
                     <Image
                       src={`https://ttcctffsichnykxnkaob.supabase.co/storage/v1/object/public/products/${slide.category}/${slide.code}/${index + 1}.webp?t=2023-11-05T02%3A42%3A54.379Z`}
                       fill
                       loading="lazy"
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
         : (
           <>
             {swiperInfo.map((slide) => (
               <SwiperSlide className="relative mb-8" key={slide.id}>
                 <ProductCard
                   shortTitle={slide.shortTitle}
                   description={slide.description}
                   category={slide.category}
                   price={slide.price}
                   code={slide.code}
                 />
               </SwiperSlide>
             ))}
             <SwiperSlide className="relative mb-8">
               <Link className="group flex flex-col justify-center items-center h-[21rem] rounded-xl bg-secondary gap-y-4" href="/products/categorias">
                 <div className="text-lg font-semibold">Ver más</div>
                 <AiOutlinePlus className="w-6 h-6 dark:text-white" />
               </Link>
             </SwiperSlide>
           </>
         )
      }

      <button className={`swiper-button-prev absolute bg-black/60 disabled:bg-black/10 rounded-full top-1/2 z-50 ${!showImages ? 'left-3 -translate-y-8' : 'left-6 lg:left-12'}`} type="button">
        <BiChevronLeft className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
      </button>
      <button onClick={() => getMoreProducts()} className={`swiper-button-next absolute bg-black/60 disabled:bg-black/10 rounded-full top-1/2 z-50 ${!showImages ? 'right-3 -translate-y-8' : 'right-6 lg:right-12'}`} type="button">
        <BiChevronRight className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
      </button>

      <div className="swiper-pagination" />

    </Swiper>
  );
}
