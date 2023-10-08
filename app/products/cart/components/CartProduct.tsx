import {
  AiFillDelete, AiOutlineMinus, AiOutlinePlus,
} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem } from '@/types';

export default function CartProduct({
  name, description, price, stock, category,
}: CartItem) {
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
        <div className="max-sm:absolute bottom-2 left-2 flex justify-center items-center">
          <div className="flex">
            <button type="button" className="w-6 h-7 rounded-l-lg bg-primary flex justify-center items-center">
              <AiOutlineMinus className="text-white" />
            </button>
            <div className="w-9 h-7 lg:w-11  bg-secondary flex justify-center items-center text-xs">{stock}</div>
            <button type="button" className="w-6 h-7 rounded-r-lg bg-primary flex justify-center items-center">
              <AiOutlinePlus className="text-white" />
            </button>
          </div>
        </div>
        <div className="max-sm:absolute bottom-9 right-2 w-full flex justify-end sm:justify-center items-center">
          <h2 className="max-sm:text-xs max-lg:text-sm font-semibold flex">
            <p className="text-primary">Q</p>
            {price.toFixed(2)}
          </h2>
        </div>
        <div className="max-sm:absolute bottom-2 right-2 w-full flex justify-end sm:justify-center items-center">
          <h2 className="max-sm:text-base max-lg:text-sm font-semibold flex">
            <p className="text-primary">Q</p>
            {(price * stock).toFixed(2)}
          </h2>
        </div>

        <button className="absolute top-2 right-2 text-zinc-700 dark:text-white" type="button">
          <AiFillDelete className="w-5 h-5 hover:text-red-600" />
        </button>
      </div>
    </div>
  );
}
