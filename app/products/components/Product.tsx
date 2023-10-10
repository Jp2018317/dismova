'use client';

import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';

type SwiperInfoProps = {
  name: string
  description?: string
  category: string
  price?: number
  productsList?: boolean
};

export default function Product({
  name, description, category, price, productsList,
}: SwiperInfoProps) {
  const { toast } = useToast();
  const Redirect = productsList ? Link : 'div';
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center ${productsList && 'border border-border rounded-xl'}`}>
      <Redirect className={`flex flex-col justify-center items-center w-full h-full rounded-t-xl bg-secondary ${!productsList && 'rounded-xl'}`} href={`/products/${name}`}>
        <div className={`rounded-xl relative my-4 ${productsList ? 'w-40 h-40' : 'w-44 h-44 xs:w-52 xs:h-52 lg:w-96 lg:h-96'}`}>
          <Image src={`/images/${category}/${name}.webp`} fill alt={name} />
        </div>
      </Redirect>
      {
          productsList ? (
            <>
              <div className="w-full p-4 dark:text-white space-y-4">
                <div className="w-full col-span-2">
                  <h2 className="font-semibold text-sm lg:text-lg">{name}</h2>
                  <span className="text-xs line-clamp-2 leading-5 mt-1">{description}</span>
                </div>
                {
                price ? (
                  <div className="w-full flex justify-between max-lg:text-sm font-semibold ">
                    <h2 className="flex">
                      <p className="text-primary">Q</p>
                      {price.toFixed(2)}
                    </h2>
                  </div>
                ) : null
              }
              </div>
              <div className="absolute flex flex-col items-center justify-center top-4 right-4 space-y-2">
                <button
                  onClick={() => {
                    toast({
                      title: 'Añadido al Carrito',
                      description: `${name} ha sido añadido al carrito de compras`,
                      action: <Link href="/products/cart" className="text-sm border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
                    });
                  }}
                  type="button"
                  className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary px-2 py-1 transition-all"
                >
                  <AiOutlineShoppingCart className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    toast({
                      title: 'Añadido a Favoritos',
                      description: `${name} ha sido añadido a la lista de favoritos`,
                      action: <Link href="/products/favoritos" className="text-sm border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
                    });
                  }}
                  type="button"
                  className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary px-2 py-1 transition-all"
                >
                  <AiFillHeart className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : null
        }
    </div>
  );
}
