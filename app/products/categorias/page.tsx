import React from 'react';
import { moreProducts } from '@/app/config/constants';
import Product from '../components/Product';
import Filter from './components/Filter';

export default function Categories() {
  return (
    <section className="w-full h-full max-w-7xl p-4">
      <div className="w-full text-center pb-6">
        <h1 className="font-semibold text-2xl">Categoria Bocinas</h1>
      </div>
      <div className="w-full h-fit flex max-lg:flex-col gap-6">
        <Filter />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full h-fit">
          {moreProducts.map((item) => (
            <Product
              key={item.id}
              shortTitle={item.shortTitle}
              description={item.description}
              category={item.category}
              price={item.price}
              code={item.code}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
