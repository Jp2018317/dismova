'use client';

import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import { useState } from 'react';

type SwiperInfoProps = {
  shortTitle?: string
  description?: string
  category: string
  code: string;
  price?: number
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductCard({
  shortTitle, description, category, price, code,
}: SwiperInfoProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-[21rem] flex flex-col justify-center items-center border border-border rounded-xl">
      <Link className="group flex flex-col justify-center items-center w-full h-full rounded-t-xl bg-secondary" href={`/products/${code}`}>
        <div className="rounded-xl relative my-4 w-40 h-40">
          <Image
            src={`https://ttcctffsichnykxnkaob.supabase.co/storage/v1/object/public/products/${category}/${code}/1.webp?t=2023-11-05T02%3A42%3A54.379Z`}
            fill
            alt={code}
            className={cn(
              'duration-200 ease-in-out group-hover:opacity-80',
              isLoading
                ? 'grayscale blur-lg scale-110'
                : 'grayscale-0 blur-0 scale-100',
            )}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </Link>
      <div className="w-full h-full">
        <div className="w-full h-full p-4 dark:text-white space-y-4">
          <div className="w-full col-span-2">
            <h2 className="font-semibold text-sm lg:text-lg line-clamp-1">{shortTitle}</h2>
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
                description: `${shortTitle} ha sido añadido al carrito de compras`,
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
                description: `${shortTitle} ha sido añadido a la lista de favoritos`,
                action: <Link href="/products/favoritos" className="text-sm border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
              });
            }}
            type="button"
            className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary px-2 py-1 transition-all"
          >
            <AiFillHeart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
