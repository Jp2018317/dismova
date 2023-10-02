'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Link from 'next/link';

export default function LandingSlider() {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ el: '.swiper-pagination', clickable: true, bulletClass: 'swiper-pagination-bullet' }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="h-80 lg:h-96 w-full max-w-7xl"
    >
      <SwiperSlide className="relative">
        <div className="w-full h-full">
          <div className="bg-secondary flex justify-center items-center w-full h-full rounded-xl">
            <Link className="flex flex-col items-center w-full" href="/products">
              Slider1
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="w-full h-full">
          <div className="bg-secondary flex justify-center items-center w-full h-full rounded-xl">
            <Link className="flex flex-col items-center w-full" href="/products">
              Slider2
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <button className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-2 z-50" type="button">
        <BiChevronLeft className="w-6 lg:w-10 h-6 lg:h-10 text-zinc-400 dark:text-zinc-600" />
      </button>
      <button className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-2 z-50" type="button">
        <BiChevronRight className="w-6 lg:w-10 h-6 lg:h-10 text-zinc-400 dark:text-zinc-600" />
      </button>

      <div className="swiper-pagination" />

    </Swiper>
  );
}
