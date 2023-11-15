import React from 'react';
import FavProduct from './components/FavProduct';

export default function Cart() {
  return (
    <div className="w-full h-full max-w-7xl px-5">
      <section className="w-full h-full max-w-7xl flex max-lg:flex-col gap-6 py-4 lg:py-8">
        <FavProduct />
      </section>
    </div>
  );
}
