import React from 'react';
import { Button } from '@/components/ui/button';
import Slider from './components/Slider';

export default function Home() {
  const swiperInfo = [
    {
      title: 'Slide1',
    },
    {
      title: 'Slide2',
    },
    {
      title: 'Slide3',
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <section className="bg-secondary w-full flex justify-center">
        <Slider swiperInfo={swiperInfo} swiper="h-80 lg:h-96 w-full max-w-7xl" rightButton="right-1 lg:right-2" leftButton="left-1 lg:left-2" />
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-semibold text-center py-6 lg:text-3xl">Categorias</h2>
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
