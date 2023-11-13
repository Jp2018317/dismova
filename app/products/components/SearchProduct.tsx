'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

type SearchItem = {
  shortTitle: string;
  description: string;
  price: number,
  category: string,
  code: string;
  stock: number;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
};

export default function SearchProduct({
  shortTitle, description, price, category, code, stock, setOpenSearch,
}: SearchItem) {
  const [image, setImage] = useState(`https://ttcctffsichnykxnkaob.supabase.co/storage/v1/object/public/products/${category}/${code}/1.webp?t=2023-11-05T02%3A42%3A54.379Z`);
  return (
    <Link onClick={() => setOpenSearch(false)} href={`/products/${code}`} className="w-full border hover:border-zinc-400 dark:hover:border-zinc-700 border-border rounded-xl flex h-32 sm:h-36">
      <div className="bg-secondary rounded-l-xl h-full flex items-center">
        <div className="relative h-24 sm:h-36 w-24 sm:w-36">
          <Image
            src={image}
            fill
            alt={`${code}`}
            onError={() => setImage('/images/NoImage.webp')}
          />
        </div>
      </div>
      <div className="w-full h-full p-4 dark:text-white space-y-4">
        <div className="w-full">
          <h2 className="font-semibold text-sm lg:text-lg line-clamp-1">{shortTitle}</h2>
          <span className="text-xs line-clamp-2 leading-5 mt-1">{description}</span>
        </div>
        <div className="w-full flex justify-between max-lg:text-sm font-semibold ">
          <h2 className="flex">
            <p className="text-primary">Q</p>
            {price.toFixed(2)}
          </h2>
          <div className="flex items-end">
            <p className="dark:text-white text-xs xs:text-sm font-medium pr-1">Existencias:</p>
            {
              stock ? (
                <div className="text-xs xs:text-sm dark:text-white text-primary">{stock}</div>
              ) : (
                <div>Sin existencias</div>
              )
            }
          </div>
        </div>
      </div>
    </Link>
  );
}
