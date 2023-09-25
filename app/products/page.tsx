import React from 'react';
import { Button } from '@/components/ui/button';
import ProductView from './components/ProductView';
import Slider from './components/Slider';

export default function Home() {
  return (
    <div>
      <section className="bg-secondary h-96 lg:h-[30rem] flex max-sm:flex-col justify-center">
        <Slider />
      </section>
      <section>
        <ProductView />
      </section>
      <section className="h-full px-5">
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
