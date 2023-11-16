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
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { CartItem } from '@/app/config/types';

type CartItemCard = {
  shortTitle: string
  description: string
  category: string
  code: string;
  price: number;
  stock: number;
  totalPrice: number;
  totalProducts: number;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  setTotalProducts: Dispatch<SetStateAction<number>>;
  setCartItem: Dispatch<SetStateAction<CartItem[]>>;
};

export default function CartProduct({
  shortTitle, description, price, stock, category, code,
  totalPrice, totalProducts, setTotalPrice, setTotalProducts, setCartItem,
}: CartItemCard) {
  const [cartItemStock, setCartItemStock] = useState(stock);
  const [image, setImage] = useState(`https://ttcctffsichnykxnkaob.supabase.co/storage/v1/object/public/products/${category}/${code}/1.webp?t=2023-11-05T02%3A42%3A54.379Z`);

  function increaseStock() {
    setCartItemStock(cartItemStock + 1);
    setTotalPrice(totalPrice + price);
    setTotalProducts(totalProducts + 1);
  }

  function decreaseStock() {
    setCartItemStock(cartItemStock - 1);
    setTotalPrice(totalPrice - price);
    setTotalProducts(totalProducts - 1);
  }

  function removeCartItem() {
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('CartItems') || '[]');
    setTotalPrice(totalPrice - (price * cartItemStock));
    setTotalProducts(totalProducts - cartItemStock);
    const cartItemsFiltered = cartItems.filter((element) => element.code !== code);
    toast({
      title: 'Eliminado del carrito',
      description: `${code} eliminado del carrito`,
    });
    localStorage.setItem('CartItems', JSON.stringify(cartItemsFiltered));
    setCartItem(cartItemsFiltered);
  }

  return (
    <div className="w-full border border-border rounded-xl flex h-36 sm:h-44">
      <div className="bg-secondary rounded-l-xl h-full flex items-center">
        <Link href={`/products/${code}`} className="relative h-28 sm:h-40 w-28 sm:w-40">
          <Image
            src={image}
            fill
            alt={code}
            onError={() => setImage('/images/NoImage.webp')}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-4 relative h-full w-full p-3">
        <div className="w-[80%] col-span-2">
          <h2 className="font-semibold text-sm lg:text-lg">{shortTitle}</h2>
          <span className="text-xs lg:text-sm line-clamp-2 leading-5 mt-1">{description}</span>
        </div>
        <div className="max-sm:absolute bottom-3 left-3 flex justify-center items-center">
          <div className="flex">
            <button onClick={() => (cartItemStock > 1 && decreaseStock())} type="button" className="w-6 h-6 rounded-l-lg bg-primary flex justify-center items-center">
              <AiOutlineMinus className="text-white" />
            </button>
            <div className="w-9 h-6 lg:w-11  bg-secondary flex justify-center items-center text-xs">{cartItemStock}</div>
            <button onClick={() => increaseStock()} type="button" className="w-6 h-6 rounded-r-lg bg-primary flex justify-center items-center">
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
            {(price * cartItemStock).toFixed(2)}
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
                <AlertDialogAction onClick={() => removeCartItem()}>Continuar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
