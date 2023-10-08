import React from 'react';
import { FavItem } from '@/types';
import { Button } from '@/components/ui/button';
import FavProduct from './components/FavProduct';

const favItems: FavItem[] = [
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.99, category: 'bafles',
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles',
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles',
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles',
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles',
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles',
  },
];

export default function Cart() {
  return (
    <div className="w-full h-full max-w-7xl px-5 max-h-[32rem]">
      <section className="w-full h-full max-w-7xl flex max-lg:flex-col gap-6 py-4 lg:py-8">
        <div className="w-full h-full">
          <div className="flex w-full px-2 pb-4">
            <h1 className="w-44 font-semibold text-2xl">Mis Favoritos</h1>
            <div className="max-sm:hidden grid grid-cols-5 gap-x-4 items-end w-full pl-0 px-5">
              <h2 className="w-full col-span-2 font-semibold text-sm pb-1 text-center">Nombre:</h2>
              <h2 className="w-full font-semibold text-sm pb-1 text-center">Precio</h2>
              <h2 className="w-full font-semibold text-sm pb-1 text-center">Eliminar</h2>
              <h2 className="w-full font-semibold text-sm pb-1 text-center">Comprar</h2>
            </div>
          </div>
          <div className="max-h-[32rem] overflow-y-auto space-y-4">
            { favItems.map((item) => (
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
              <h3 className="font-medium w-full text-center mb-6">Aqui se mostraran los productos que agregues a tu carrito de compra</h3>
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
