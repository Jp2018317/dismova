'use client';

import {
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { FavItem } from '@/app/config/types';
import { TbHeartBroken } from 'react-icons/tb';
import { toast } from '@/components/ui/use-toast';
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

export default function FavProduct({
  name, description, price, category,
}: FavItem) {
  return (
    <div className="w-full border border-border rounded-xl flex h-36 sm:h-44">
      <div className="bg-secondary rounded-l-xl h-full flex items-center">
        <Link href="/products/id" className="relative h-28 sm:h-40 w-28 sm:w-40">
          <Image src={`/images/${category}/${name}.webp`} fill alt={`${name}`} />
        </Link>
      </div>
      <div className="gap-x-4 relative h-full w-full p-3">
        <div className="w-[80%] col-span-2">
          <h2 className="font-semibold text-sm sm:text-lg">{name}</h2>
          <span className="text-xs sm:text-sm line-clamp-2 leading-5 mt-1">{description}</span>
        </div>
        <div className="absolute bottom-3 left-3 w-full flex items-center">
          <h2 className="font-semibold flex sm:text-lg">
            <p className="text-primary">Q</p>
            {price.toFixed(2)}
          </h2>
        </div>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="absolute top-3 right-3">
              <TbHeartBroken className="w-6 sm:w-7 h-6 sm:h-7 dark:text-white hover:text-primary dark:hover:text-primary" />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remover producto?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción eliminará el producto de tu lista de favoritos.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>Continuar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className="absolute bottom-3 right-3">
          <button
            onClick={() => {
              toast({
                title: 'Añadido al Carrito',
                description: `El producto ${name} fue añadido al carrito`,
              });
            }}
            type="submit"
            className="bg-primary h-8 rounded-xl text-[10px] sm:text-xs py-1 sm:py-2 px-3 sm:px-4 flex justify-center items-center tracking-wider text-white font-semibold"
          >
            <AiOutlineShoppingCart className="w-4 h-4 xs:mr-2" />
            <p className="max-xs:hidden">Añadir</p>
          </button>
        </div>
      </div>
    </div>
  );
}
