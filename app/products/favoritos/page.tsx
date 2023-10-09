import React from 'react';
import { FavItem } from '@/app/config/types';
import { Button } from '@/components/ui/button';
import { favItems } from '@/app/config/constants';
import FavProduct from './components/FavProduct';

export default function Cart() {
  return (
    <div className="w-full h-full max-w-7xl px-5">
      <section className="w-full h-full max-w-7xl flex max-lg:flex-col gap-6 py-4 lg:py-8">
        <div className="w-full h-full">
          <h1 className="w-44 font-semibold text-2xl mb-4">Mis Favoritos</h1>
          <div className="grid lg:grid-cols-2 gap-3 sm:gap-5">
            { favItems.map((item: FavItem) => (
              <FavProduct
                key={item.name}
                name={item.name}
                description={item.description}
                category={item.category}
                price={item.price}
              />
            ))}
          </div>
          {
            favItems.length === 0 && (
            <div className="w-full flex flex-col justify-center items-center h-80">
              <h2 className="text-xl font-semibold w-full text-center mb-2">Aun no hay productos!</h2>
              <h3 className="font-medium w-full text-center mb-6">Aqui se mostraran los productos que agregues a lista de favoritos</h3>
              <div className="w-full flex justify-center">
                <Button>Buscar Productos</Button>
              </div>
            </div>
            )
          }
        </div>
      </section>
    </div>
  );
}
