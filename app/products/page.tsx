import React from 'react';
import Slider from '@/components/Slider';
import LandingSlider from './components/LandingSlider';

export default function Home() {
  const swiperInfo = [
    {
      id: '1',
      product: 'Bocina',
      title: 'Titulo del producto 1 o breve descripción',
      category: 'Bafles',
      price: 499,
    },
    {
      id: '2',
      product: 'Bocina',
      title: 'Titulo del producto 2 o breve descripción',
      category: 'Bafles',
      price: 499,
    },
    {
      id: '3',
      product: 'Bocina',
      title: 'Titulo del producto 3 o breve descripción',
      category: 'Bafles',
      price: 499,
    },
    {
      id: '4',
      product: 'Bocina',
      title: 'Titulo del producto 4 o breve descripción',
      category: 'Bafles',
      price: 499,
    },
    {
      id: '5',
      product: 'Bocina',
      title: 'Titulo del producto 5 o breve descripción',
      category: 'Bafles',
      price: 499,
    },
    {
      id: '6',
      product: 'Bocina',
      title: 'Titulo del producto 6 o breve descripción',
      category: 'Bafles',
      price: 499,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <section className="bg-secondary w-full flex justify-center">
        <LandingSlider />
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-semibold text-center py-6 lg:text-3xl">Categorias</h2>
        <p className="w-full text-center lg:text-xl ">Echa un vistazo a las categorias de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={swiperInfo} productsList />
        </div>
      </section>
    </div>
  );
}
