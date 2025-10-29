import React from 'react';
import { Product } from '@/app/config/types';
import { createServerClient } from '@supabase/ssr';
import { customCookieMethods } from '@/app/config/constants';
import ProductCard from '@/app/productos/components/ProductCard';
import { redirect } from 'next/navigation';
import Filter from '../components/Filter';

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const cookies = customCookieMethods;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies,
    },
  );

  const categoriesData = await supabase.from('Categories').select('name').eq('name', params.category);

  // If params have an unexisting category
  if (!categoriesData.data?.length) {
    return redirect('/productos');
  }

  const { data } = await supabase.from('Products').select('*')
    .eq('category', params.category)
    .limit(800)
    .order('stock', { ascending: false });

  const products: Product[] = data || [];

  return (
    <section className="w-full h-full max-w-7xl p-4">
      <div className="w-full text-center pb-6">
        <h1 className="font-bold text-xl xs:text-2xl md:text-3xl">
          {params.category.toUpperCase()}
        </h1>
      </div>
      <div className="w-full h-fit flex max-lg:flex-col gap-6">
        <Filter />
        {
                    products.length ? (
                      <div
                        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full h-fit"
                      >
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
                      <div className="w-full h-full min-h-[200px] lg:h-80 flex items-center justify-center">
                        <div className="text-lg lg:text-2xl dark:text-white font-semibold text-center">
                          No se
                          encontraron productos
                        </div>
                      </div>
                    )
                }
      </div>
    </section>
  );
}
