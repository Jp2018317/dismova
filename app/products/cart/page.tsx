import React from 'react';
import { Product } from '@/app/config/types';
import { Separator } from '@/components/ui/separator';
import Slider from '@/components/Slider';

import { customCookieMethods, onlinePurchase } from '@/app/config/constants';
import { createServerClient } from '@supabase/ssr';
import CartView from './components/CartView';

export default async function Cart() {
  const cookies = customCookieMethods;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies,
    },
  );

  const productsData = await supabase.from('Products').select('*').limit(1000);
  const products:Product[] = productsData.data || [];

  return (
    <div className="w-full h-full max-w-7xl px-5">
      { !onlinePurchase && (
        <p className="w-full text-center text-xs text-red-500 pt-8">¡Aviso! La compra en línea está deshabilitada en este momento. Estamos trabajando para mejorar nuestros servicios.</p>
      )}
      <section className="w-full h-full max-w-7xl flex max-lg:flex-col gap-6 pb-4 lg:pb-8">
        <CartView />
      </section>
      <section className="w-full h-full max-w-7xl">

        <Separator className="my-4 md:my-2 lg:my-4" />

        <h2 className="w-full text-2xl font-semibold text-center py-6 lg:text-3xl">Mas Productos</h2>
        <p className="w-full text-center lg:text-xl ">Echa un vistazo a las categorias de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={products} />
        </div>
      </section>
    </div>
  );
}
