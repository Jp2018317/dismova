import {
  AiFillDelete, AiOutlineMinus, AiOutlinePlus,
} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem } from '@/app/config/types';

export default function Item({
  name, description, price, stock, category,
}: CartItem) {
  return (
    <div className="w-full border border-border rounded-xl flex h-40 p-2 gap-x-2">
      <Link href="/products/id" className="relative bg-secondary rounded-xl h-full w-64">
        <Image src={`/images/${category}/${name}.webp`} fill alt={`${name}`} />
      </Link>
      <div className="relative h-full w-full p-2">
        <div className="w-full max-w-[80%]">
          <h2 className="font-semibold">{name}</h2>
          <span className="text-xs">{description}</span>
        </div>
        <button className="absolute top-2 right-2 text-zinc-700 dark:text-white" type="button">
          <AiFillDelete className="w-5 h-5 hover:text-red-600" />
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 w-full flex justify-between">
          <h2 className="text-sm lg:text-xl font-semibold flex">
            <p className="text-primary">Q</p>
            {price.toFixed(2)}
          </h2>
          <div className="flex flex-col justify-end">
            <div className="flex">
              <button type="button" className="w-5 lg:w-7 h-6 lg:h-7 rounded-l-lg bg-primary flex justify-center items-center">
                <AiOutlineMinus className="text-white" />
              </button>
              <div className="w-9 h-6 lg:h-7 bg-secondary flex justify-center items-center text-xs">{stock}</div>
              <button type="button" className="w-5 lg:w-7 h-6 lg:h-7 rounded-r-lg bg-primary flex justify-center items-center">
                <AiOutlinePlus className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
