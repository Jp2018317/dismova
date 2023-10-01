'use client';

import { cn } from '@/lib/utils';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

type SliderProps = {
  swiperInfo: { title: string }[];
  swiper?: string;
  swiperSlide?: string;
  swiperContent?: string;
  leftButton?: string;
  rightButton?: string;
  paginator?: string;
};

export default function Slider({
  swiperInfo, swiper, swiperSlide, swiperContent, leftButton, rightButton, paginator,
}: SliderProps) {
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
      className={cn('', swiper)}
    >
      {swiperInfo.map((slide) => (
        <SwiperSlide className={cn('', swiperSlide)} key={slide.title}>
          <div className={cn('flex justify-center items-center h-full', swiperContent)}>
            {slide.title}
          </div>
        </SwiperSlide>
      ))}

      <button className={cn('swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 z-50', leftButton)} type="button">
        <BiChevronLeft className="w-6 lg:w-10 h-6 lg:h-10 text-zinc-400 dark:text-zinc-600" />
      </button>
      <button className={cn('swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 z-50', rightButton)} type="button">
        <BiChevronRight className="w-6 lg:w-10 h-6 lg:h-10 text-zinc-400 dark:text-zinc-600" />
      </button>

      <div className={cn('swiper-pagination absolute left-1/2 bottom-0 -translate-x-1/2 z-[995]', paginator)} />

    </Swiper>
  );
}
