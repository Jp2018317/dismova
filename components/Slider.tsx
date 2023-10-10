'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Product from '@/app/products/components/Product';

type SliderProps = {
  swiperInfo: {
    id: string, name: string, description?: string, category: string, price?: number
  }[];
  productsList?: boolean
};

export default function Slider({
  swiperInfo, productsList,
}: SliderProps) {
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
          <Product
            name={slide.name}
            description={slide.description}
            category={slide.category}
            price={slide.price}
            productsList={productsList}
          />
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
