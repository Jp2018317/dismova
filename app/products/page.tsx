import React from 'react';
import Slider from '@/components/Slider';
import LandingSlider from './components/LandingSlider';
import { moreProducts } from '../config/constants';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="bg-secondary w-full flex justify-center">
        <LandingSlider />
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-semibold text-center pt-6 lg:text-3xl">Categorias</h2>
        <p className="w-full text-center lg:text-xl px-4 pt-2 ">Echa un vistazo a las categorias de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={moreProducts} productsList />
        </div>
      </section>
    </div>
  );
}
