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
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
};

export default function SearchProductCard({
  shortTitle, description, price, category, code, setOpenSearch,
}: SearchItem) {
  const [image, setImage] = useState(`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET}/${category}/${code}/1.webp?t=2023-11-05T02%3A42%3A54.379Z`);
  return (
    <Link
      onClick={() => setOpenSearch(false)}
      href={`/productos/${code}`}
      className="w-full border hover:border-zinc-400 dark:hover:border-zinc-700 border-border rounded-xl flex h-28 sm:h-32"
    >
      <div className="bg-secondary rounded-l-xl h-full flex items-center">
        <div className="relative h-20 sm:h-28 w-20 sm:w-28">
          <Image
            src={image}
            fill
            alt={`${code}`}
            onError={() => setImage('/images/NoImage.webp')}
          />
        </div>
      </div>
      <div className="relative w-full h-full p-2 dark:text-white space-y-3">
        <div className="w-full">
          <h2 className="font-semibold max-lg:text-xs text-sm line-clamp-1 sm:line-clamp-2">{shortTitle}</h2>
          <span className="text-[10px] line-clamp-2 leading-5 mt-1">{description}</span>
        </div>
        <div className="absolute bottom-2 left-2 text-xs font-semibold ">
          <h2 className="flex">
            <p className="text-primary">Q</p>
            {price.toFixed(2)}
          </h2>
        </div>
      </div>
    </Link>
  );
}
