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
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
};

export default function CartProduct({
  shortTitle, description, price, stock, category, code,
  totalPrice, totalProducts, setTotalPrice, setTotalProducts, setCartItems,
}: CartItemCard) {
  const [cartItemStock, setCartItemStock] = useState(stock);
  const [image, setImage] = useState(`https://ttcctffsichnykxnkaob.supabase.co/storage/v1/object/public/products/${category}/${code}/1.webp?t=2023-11-05T02%3A42%3A54.379Z`);

  function increaseStock() {
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('CartItems') || '[]');
    const findItem = cartItems.findIndex((element) => element.code === code);

    if (findItem !== -1) {
    // Actualizar el stock del elemento
      cartItems[findItem].stock = cartItemStock + 1;
      setCartItemStock(cartItemStock + 1);
      // Actualizar el precio total y la cantidad total de productos
      setTotalPrice(totalPrice + price);
      setTotalProducts(totalProducts + 1);

      localStorage.setItem('CartItems', JSON.stringify(cartItems));
    }
  }

  function decreaseStock() {
    if (cartItemStock <= 1) return;
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('CartItems') || '[]');
    const findItem = cartItems.findIndex((element) => element.code === code);

    if (findItem !== -1) {
    // Actualizar el stock del elemento
      cartItems[findItem].stock = cartItemStock - 1;
      setCartItemStock(cartItemStock - 1);
      // Actualizar el precio total y la cantidad total de productos
      setTotalPrice(totalPrice - price);
      setTotalProducts(totalProducts - 1);

      localStorage.setItem('CartItems', JSON.stringify(cartItems));
    }
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
    setCartItems(cartItemsFiltered);
  }

  return (
    <div className="w-full border border-border rounded-xl flex max-sm:flex-col h-full sm:h-40">
      <div className="bg-secondary rounded-t-xl sm:rounded-l-xl h-full flex items-center max-sm:justify-center">
        <Link href={`/productos/${code}`} className="relative h-40 w-40">
          <Image
            src={image}
            fill
            alt={code}
            onError={() => setImage('/images/NoImage.webp')}
          />
        </Link>
      </div>
      <div className="sm:grid sm:grid-cols-5 gap-x-4 relative h-full w-full p-4 space-y-3">
        <div className="w-[90%] flex flex-col col-span-2 sm:text-center justify-center gap-1 sm:gap-4 lg:px-2">
          <h2 className="font-semibold text-sm line-clamp-3">{shortTitle}</h2>
          <span className="text-[10px] lg:text-xs line-clamp-2 leading-5 mt-1">{description}</span>
        </div>
        <div className="sm:flex justify-center items-center">
          <div className="flex">
            <button onClick={() => decreaseStock()} type="button" className="w-6 h-6 rounded-l-lg bg-primary flex justify-center items-center">
              <AiOutlineMinus className="text-white" />
            </button>
            <div className="w-9 h-6 lg:w-11  bg-secondary flex justify-center items-center text-xs">{cartItemStock}</div>
            <button onClick={() => increaseStock()} type="button" className="w-6 h-6 rounded-r-lg bg-primary flex justify-center items-center">
              <AiOutlinePlus className="text-white" />
            </button>
          </div>
        </div>
        <div className="w-full flex max-xs:flex-col sm:justify-center items-center col-span-2 gap-2">
          <div className="w-full flex sm:justify-center items-center">
            <h2 className="max-sm:text-sm max-lg:text-sm font-semibold flex">
              <p className="font-semibold sm:hidden pr-2">Precio:</p>
              <p className="text-primary">Q</p>
              {price.toFixed(2)}
            </h2>
          </div>
          <div className="w-full flex sm:justify-center items-center">
            <h2 className="max-sm:text-sm max-lg:text-sm font-semibold flex">
              <p className="font-semibold sm:hidden pr-2">Subtotal:</p>
              <p className="text-primary">Q</p>
              {(price * cartItemStock).toFixed(2)}
            </h2>
          </div>
        </div>
        <div className="absolute top-0 right-3">
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
