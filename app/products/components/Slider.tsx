'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function Slider() {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ el: '.swiper-pagination', clickable: true, bulletClass: 'swiper-pagination-bullet' }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="h-full w-full"
    >
      <SwiperSlide>
        <div className="flex justify-center items-center h-full">
          Slide1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-full">
          Slide2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-full">
          Slide3
        </div>
      </SwiperSlide>

      <button className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-2 lg:left-4 z-50" type="button">
        <BiChevronLeft className="w-8 lg:w-12 h-8 lg:h-12 text-zinc-400 dark:text-zinc-600" />
      </button>
      <button className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-2 lg:right-4 z-50" type="button">
        <BiChevronRight className="w-8 lg:w-12 h-8 lg:h-12 text-zinc-400 dark:text-zinc-600" />
      </button>

      <div className="swiper-pagination absolute left-1/2 bottom-5 -translate-x-1/2 z-[999]" />

    </Swiper>
  );
}
