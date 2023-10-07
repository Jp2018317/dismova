import React from 'react';
import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import CartProduct from './components/CartProduct';

const cartItems: CartItem[] = [
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.99, category: 'bafles', stock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', stock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', stock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', stock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', stock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', stock: 2,
  },
];

export default function Cart() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.stock, 0);
  const totalProducts = cartItems.reduce((acc, item) => acc + item.stock, 0);

  return (
    <div className="w-full h-full max-w-7xl px-5">
      <section className="w-full h-full max-w-7xl flex max-lg:flex-col gap-6 pt-8">
        <div className="w-full flex flex-col gap-y-4">
          <div className="flex w-full px-2">
            <h1 className="w-40 lg:w-44 text-xl font-semibold lg:text-2xl">Mi Carrito</h1>
            <div className="max-sm:hidden grid grid-cols-5 gap-x-4 px-4 items-end w-full">
              <h2 className="w-full col-span-2 font-semibold text-sm pb-1 text-center">Nombre:</h2>
              <h2 className="w-full font-semibold text-sm pb-1 text-center">Cantidad</h2>
              <h2 className="w-full font-semibold text-sm pb-1 text-center">Precio</h2>
              <h2 className="w-full font-semibold text-sm pb-1 text-center">Subtotal</h2>
            </div>
          </div>
          { cartItems.map((item) => (
            <CartProduct
              key={item.name}
              name={item.name}
              description={item.description}
              category={item.category}
              price={item.price}
              stock={item.stock}
            />
          ))}
          {
            cartItems.length === 0 && (
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
        <div className="relative w-full lg:w-96 bg-secondary h-full lg:h-96 rounded-xl p-6">
          <h1 className="text-lg font-semibold">Resúmen:</h1>
          <div className="py-4">
            <h2 className="flex gap-x-2 font-medium">
              Total:
              {' '}
              <span className="max-sm:text-xs max-lg:text-sm font-medium flex">
                <p className="text-primary">Q</p>
                {total.toFixed(2)}
              </span>

            </h2>
            <h2 className="flex gap-x-2 font-medium">
              Productos Totales:
              {' '}
              <span className="max-sm:text-xs max-lg:text-sm font-medium flex">
                {totalProducts}
              </span>

            </h2>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 w-full">
              <Button className="w-full">Comprar</Button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
