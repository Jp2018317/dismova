import {
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { FavItem } from '@/types';
import { TbHeartBroken } from 'react-icons/tb';

export default function FavProduct({
  name, description, price, category,
}: FavItem) {
  return (
    <div className="w-full border border-border rounded-xl flex max-sm:h-36 h-40 p-2 gap-x-2">
      <div className="bg-secondary rounded-xl h-full flex items-center">
        <Link href="/products/id" className="relative h-full max-sm:h-28 max-sm:w-28 w-36">
          <Image src={`/images/${category}/${name}.webp`} fill alt={`${name}`} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-4 relative h-full w-full p-2 ">
        <div className="w-[80%] col-span-2">
          <h2 className="font-semibold text-sm lg:text-lg">{name}</h2>
          <span className="text-xs">{description}</span>
        </div>
        <div className="max-sm:absolute bottom-2 left-2 w-full flex sm:justify-center items-center">
          <h2 className="max-lg:text-sm font-semibold flex">
            <p className="text-primary">Q</p>
            {price.toFixed(2)}
          </h2>
        </div>
        <div className="max-sm:absolute top-2 right-2 sm:w-full flex justify-center items-center gap-x-5">
          <TbHeartBroken className="w-6 h-6 dark:text-white hover:text-primary dark:hover:text-primary" />
        </div>
        <div className="max-sm:absolute bottom-2 right-2 sm:w-full flex justify-center items-center gap-x-5">
          <button type="submit" className="bg-primary h-8 lg:h-10 rounded-2xl max-lg:text-xs text-sm py-2 px-4 flex justify-center items-center tracking-wider text-white font-semibold">
            <AiOutlineShoppingCart className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
