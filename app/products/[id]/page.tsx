import React from 'react';
import { Separator } from '@/components/ui/separator';
import {
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import Slider from '@/components/Slider';
import { Product } from '@/app/config/types';
import Link from 'next/link';
import { createServerClient } from '@supabase/ssr';
import { customCookieMethods } from '@/app/config/constants';
import ProductsAmount from '../components/ProductsAmount';

export default async function ProducIdView({
  params,
}: {
  params: { id: string };
}) {
  const cookies = customCookieMethods;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies,
    },
  );

  const { data } = await supabase.from('Products').select('*').eq('code', params.id);
  const product: Product[] = data || [];

  const moreProductsData = await supabase.from('Products').select('*');
  const moreProducts: Product[] = moreProductsData.data || [];

  return (
    <div className="w-full flex flex-col items-center">
      <section className="relative w-full flex justify-center pt-2">
        <div className="lg:h-[35rem] w-full flex max-md:flex-col justify-center max-w-7xl ">
          <div className="md:w-1/2 flex">

            <Slider swiperInfo={product} showImages />
          </div>
          <div className="relative md:w-1/2 h-full md:h-[22rem] lg:h-[35rem] w-full p-4 lg:p-6">
            <h1 className="text-2xl md:text-xl lg:text-3xl font-bold xs:max-w-[70%] mb-2">{product[0].longTitle}</h1>

            <div className="xs:absolute top-4 lg:top-6 right-4 lg:right-6 font-bold">
              <h3 className="text-xl xs:text-2xl md:text-xl lg:text-3xl flex">
                <p className="text-primary">Q</p>
                {product[0].price.toFixed(2)}
              </h3>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div>
              <h3 className="w-full max-md:text-base max-lg:text-xs font-bold tracking-wider mb-2">Descripción</h3>
              <span className="w-full max-md:text-base max-lg:text-xs">{product[0].description}</span>

              <Separator className="my-4 md:my-2 lg:my-4" />

              <div className="xs:flex gap-x-4">
                <div className="flex gap-x-2 w-1/2 max-md:text-base max-lg:text-xs">
                  <h3 className="my-2 font-bold tracking-wider">Categoría:</h3>
                  <Link href="/products/categorias" className="my-2 hover:underline underline-offset-2  ">{product[0].category}</Link>
                </div>
                <div className="flex gap-x-2 w-1/2 max-md:text-base max-lg:text-xs">
                  <h3 className="my-2 font-bold tracking-wider">Stock:</h3>
                  <p className="my-2">{product[0].stock}</p>
                </div>
              </div>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div className="w-full md:absolute bottom-4 lg:bottom-6 left-1/2 md:-translate-x-1/2 md:px-4 lg:px-6 flex justify-between items-end">

              <div className="flex flex-col justify-end">
                <p className=" max-md:text-base max-lg:text-xs font-bold pb-1 max-md:pb-2">Cantidad</p>
                <ProductsAmount stock={product[0].stock ? product[0].stock : 0} />
              </div>

              <button type="submit" className="bg-primary h-8 lg:h-10 rounded-2xl max-lg:text-xs text-sm px-4 lg:px-6 flex justify-center items-center text-white font-bold">
                <AiOutlineShoppingCart className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                Añadir al carrito
              </button>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full px-5 max-w-7xl">

        <Separator className="my-4 md:my-2 lg:my-4" />

        <h2 className="w-full text-2xl font-semibold text-center py-6 lg:text-3xl">Mas Productos</h2>
        <p className="w-full text-center lg:text-xl ">Echa un vistazo a las categorias de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={moreProducts} />
        </div>
      </section>
    </div>
  );
}
