import React from 'react';
import { Product } from '@/app/config/types';
import { createServerClient } from '@supabase/ssr';
import { customCookieMethods } from '@/app/config/constants';
import ProductCard from '@/app/products/components/ProductCard';

export default async function SearchItems({
  params,
}: {
  params: { search: string };
}) {
  const cookies = customCookieMethods;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies,
    },
  );

  const { data } = await supabase.from('Products').select('*').ilike('longTitle', `%${params.search}%`).limit(1000);

  const products:Product[] = data || [];

  return (
    <section className="w-full h-full max-w-7xl p-4">
      <div className="w-full pb-4 max-sm:text-center">
        <h1 className="font-semibold text-xl xs:text-2xl">
          Resultados de búsqueda para
          {' '}
          {params.search}
        </h1>
      </div>
      {
          products.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-fit">
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
          ) : (
            <div className="w-full h-full lg:h-[30rem] flex items-center justify-center max-sm:text-center">
              <div className="text-3xl dark:text-white font-semibold">No se encontraron Productos!</div>
            </div>
          )
        }
    </section>
  );
}
