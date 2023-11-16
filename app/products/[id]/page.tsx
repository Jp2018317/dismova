import React from 'react';
import { Separator } from '@/components/ui/separator';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Slider from '@/components/Slider';
import { Product } from '@/app/config/types';
import Link from 'next/link';
import { createServerClient } from '@supabase/ssr';
import { customCookieMethods, onlinePurchase } from '@/app/config/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProductsAmount from './components/ProductsAmount';
import TagCard from '../components/TagCard';
import AddItem from './components/AddItem';

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

  // Select all the info from Tags with the same product´s code on table 'ProductTags'
  const productTags = await supabase.from('ProductTags').select('Tags(name, icon)').eq('product_code', params.id).limit(10);
  const tags: any[] = productTags.data || [];

  const moreProductsData = await supabase.from('Products').select('*').eq('category', product[0].category).limit(8);
  const moreProducts: Product[] = moreProductsData.data || [];

  return (
    <div className="w-full flex flex-col items-center">
      <section className="relative w-full flex justify-center">
        <div className="h-full lg:h-[35rem] w-full flex max-md:flex-col justify-center md:items-center max-w-7xl ">
          <div className="md:w-1/2 flex">

            <Slider swiperInfo={product} showImages />
          </div>
          <div className="relative md:w-1/2 h-full lg:h-[35rem] w-full p-4 lg:p-6">
            <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-2">{product[0].longTitle}</h1>

            <div className="font-bold">
              <h3 className="text-2xl md:text-xl lg:text-2xl flex">
                <p className="text-primary">Q</p>
                {product[0].price.toFixed(2)}
              </h3>
            </div>

            <Separator className="my-2" />

            <div>
              <h3 className="w-full max-md:text-base max-lg:text-xs font-bold tracking-wider mb-2">Descripción</h3>
              <span className="w-full text-xs">{product[0].description}</span>

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
                <AddItem
                  shortTitle={product[0].shortTitle}
                  description={product[0].description}
                  category={product[0].category}
                  code={product[0].code}
                  price={product[0].price}
                />
              </div>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div className="w-full xs:flex justify-between items-end">

              <div className="flex flex-col justify-end">
                <p className=" max-md:text-base max-lg:text-xs font-bold pb-1 max-md:pb-2">Cantidad</p>
                <ProductsAmount stock={product[0].stock ? product[0].stock : 1} />
              </div>

              <div className="w-full flex xs:justify-end mt-4">
                <Button disabled={!onlinePurchase} type="submit" className="rounded-2xl max-xs:w-full">
                  <AiOutlineShoppingCart className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                  Comprar
                </Button>
              </div>

              { !onlinePurchase && (
              <p className="w-full text-center text-xs text-red-500 pt-8">¡Aviso! La compra en línea está deshabilitada en este momento. Estamos trabajando para mejorar nuestros servicios.</p>
              )}

            </div>

          </div>
        </div>
      </section>
      {
        tags.length ? (
          <section className="w-full h-full px-5 max-w-7xl">

            <Separator className="my-4 md:my-2 lg:my-4" />

            <h2 className="w-full text-2xl font-bold text-center lg:text-3xl pt-2">ETIQUETAS</h2>

            <div className="flex justify-center items-center">
              <div className="grid max-xs:grid-cols-2 max-lg:grid-cols-4 lg:flex justify-evenly gap-4 w-full h-fit py-8">
                {
            tags.map((tag) => (
              <TagCard key={tag.Tags.name} title={tag.Tags.name} icon={tag.Tags.icon} />
            ))
          }
              </div>
            </div>

            <h5 className="w-full text-center max-lg:text-sm text-zinc-500 dark:text-zinc-400">Las etiquetas muestran características destacables del producto</h5>
          </section>
        ) : null
      }
      <section className="w-full h-full px-5 max-w-7xl">

        <Separator className="my-4 md:my-2 lg:my-4" />

        <div className="flex max-sm:flex-col-reverse gap-4 items-center py-4">
          <div className=" w-full text-center px-4 lg:px-8 flex flex-col items-center gap-y-8">
            <h2 className="w-full text-2xl font-bold text-center lg:text-3xl">MÁS INFORMACIÓN</h2>
            <p>{product[0].description}</p>
          </div>
          <div className="flex items-center justify-center rounded-xl bg-secondary max-sm:w-full">
            <div className="rounded-xl relative my-4 w-44 h-44 xs:w-52 xs:h-52 lg:w-96 lg:h-96">
              <Image
                src={`https://ttcctffsichnykxnkaob.supabase.co/storage/v1/object/public/products/${product[0].category}/${product[0].code}/2.webp?t=2023-11-05T02%3A42%3A54.379Z`}
                fill
                loading="lazy"
                alt="Details image"
                className="p-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full px-5 max-w-7xl">

        <Separator className="my-4 md:my-2 lg:my-4" />

        <h2 className="w-full text-2xl font-semibold text-center pt-4 lg:text-3xl">Productos Similares</h2>
        <p className="w-full text-center lg:text-xl py-2">Más productos relacionados que podrían gustarte</p>
        <div className="py-4">
          <Slider swiperInfo={moreProducts} />
        </div>
      </section>
    </div>
  );
}
