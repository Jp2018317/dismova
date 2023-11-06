'use client';

import {
  AiFillDelete, AiOutlineMinus, AiOutlinePlus,
} from 'react-icons/ai';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem } from '@/app/config/types';
import { useState } from 'react';

export default function CartProduct({
  name, description, price, stock, category,
}: CartItem) {
  const [image, setImage] = useState(`/images/${category}/${name}.webp`);
  return (
    <div className="w-full border border-border rounded-xl flex h-36 sm:h-44">
      <div className="bg-secondary rounded-l-xl h-full flex items-center">
        <Link href="/products/id" className="relative h-28 sm:h-40 w-28 sm:w-40">
          <Image
            src={image}
            fill
            alt={`${name}`}
            onError={() => setImage('/images/NoImage.webp')}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-4 relative h-full w-full p-3">
        <div className="w-[80%] col-span-2">
          <h2 className="font-semibold text-sm lg:text-lg">{name}</h2>
          <span className="text-xs lg:text-sm line-clamp-2 leading-5 mt-1">{description}</span>
        </div>
        <div className="max-sm:absolute bottom-3 left-3 flex justify-center items-center">
          <div className="flex">
            <button type="button" className="w-6 h-6 rounded-l-lg bg-primary flex justify-center items-center">
              <AiOutlineMinus className="text-white" />
            </button>
            <div className="w-9 h-6 lg:w-11  bg-secondary flex justify-center items-center text-xs">{stock}</div>
            <button type="button" className="w-6 h-6 rounded-r-lg bg-primary flex justify-center items-center">
              <AiOutlinePlus className="text-white" />
            </button>
          </div>
        </div>
        <div className="max-sm:absolute bottom-10 right-3 w-full flex justify-end sm:justify-center items-center">
          <h2 className="max-sm:text-xs max-lg:text-sm font-semibold flex">
            <p className="text-primary">Q</p>
            {price.toFixed(2)}
          </h2>
        </div>
        <div className="max-sm:absolute bottom-3 right-3 w-full flex justify-end sm:justify-center items-center">
          <h2 className="max-sm:text-base max-lg:text-sm font-semibold flex">
            <p className="text-primary">Q</p>
            {(price * stock).toFixed(2)}
          </h2>
        </div>
        <div className="absolute top-3 right-3">
          <AlertDialog>
            <AlertDialogTrigger>
              <AiFillDelete className="w-5 h-5 text-zinc-700 dark:text-white hover:text-red-600" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Remover producto?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción eliminará el producto de tu carrito de compras.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Continuar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
