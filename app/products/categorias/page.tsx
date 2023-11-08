import React from 'react';
import { Product } from '@/app/config/types';
import { createServerClient } from '@supabase/ssr';
import { customCookieMethods } from '@/app/config/constants';
import ProductCard from '../components/ProductCard';
import Filter from './components/Filter';

export default async function Categories() {
  const cookies = customCookieMethods;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies,
    },
  );

  const { data } = await supabase.from('Products').select('*');

  const products:Product[] = data || [];
  return (
    <section className="w-full h-full max-w-7xl p-4">
      <div className="w-full text-center pb-6">
        <h1 className="font-semibold text-2xl">Categoria Bocinas</h1>
      </div>
      <div className="w-full h-fit flex max-lg:flex-col gap-6">
        <Filter />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full h-fit">
          {products.map((item: Product) => (
            <ProductCard
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
