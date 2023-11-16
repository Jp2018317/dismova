'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { TbHeartBroken } from 'react-icons/tb';

import { useToast } from '@/components/ui/use-toast';
import { CartItem, FavItem } from '@/app/config/types';

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

type SwiperInfoProps = {
  shortTitle: string
  description: string
  category: string
  code: string;
  price: number
  setFavorites?: Dispatch<SetStateAction<FavItem[]>>;
  setCartItems?: Dispatch<SetStateAction<CartItem[]>>;
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductCard({
  shortTitle, description, category, price, code, setFavorites, setCartItems,
}: SwiperInfoProps) {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(`https://ttcctffsichnykxnkaob.supabase.co/storage/v1/object/public/products/${category}/${code}/1.webp?t=2023-11-05T02%3A42%3A54.379Z`);

  function addItemToFavorite() {
    const favorites: FavItem[] = JSON.parse(localStorage.getItem('Favorites') || '[]');
    // Si no hay favoritos, agregar el item
    if (favorites.length === 0) {
      favorites.push({
        shortTitle, description, category, price, code,
      });
    } else {
      // Hay favoritos, buscar si el item ya esta agregado
      const res = favorites.some((element) => element.code === code);
      // Si no se encuentra el item, agregarlo
      if (!res) {
        favorites.push({
          shortTitle, description, category, price, code,
        });
      } else {
        // Si existe el item, eliminarlo de la lista
        const favItemsFiltered = favorites.filter((element) => element.code !== code);
        toast({
          title: 'Eliminado de Favoritos',
          description: `${code} eliminado de favoritos`,
        });
        localStorage.setItem('Favorites', JSON.stringify(favItemsFiltered));
        if (setFavorites) {
          setFavorites(favItemsFiltered);
        }
        return;
      }
    }

    toast({
      title: 'Añadido a Favoritos',
      description: `${code} añadido a favoritos`,
      action: <Link href="/products/favoritos" className="text-xs border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
    });

    localStorage.setItem('Favorites', JSON.stringify(favorites));
    if (setFavorites) {
      setFavorites(favorites);
    }
  }

  function removeFavorite() {
    const favorites: FavItem[] = JSON.parse(localStorage.getItem('Favorites') || '[]');
    const favItemsFiltered = favorites.filter((element) => element.code !== code);
    toast({
      title: 'Eliminado de Favoritos',
      description: `${code} eliminado de favoritos`,
    });
    localStorage.setItem('Favorites', JSON.stringify(favItemsFiltered));
    if (setFavorites) {
      setFavorites(favItemsFiltered);
    }
  }

  function addItemToCart() {
    const stock = 1;
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('CartItems') || '[]');
    // Si no hay favoritos, agregar el item
    if (cartItems.length === 0) {
      cartItems.push({
        shortTitle, description, category, price, code, stock,
      });
    } else {
      // Hay favoritos, buscar si el item ya esta agregado
      const res = cartItems.some((element) => element.code === code);
      // Si no se encuentra el item, agregarlo
      if (!res) {
        cartItems.push({
          shortTitle, description, category, price, code, stock,
        });
      } else {
        // Si existe el item, hacer saber al usuario de que ya existe
        toast({
          title: 'Producto ya agregado',
          description: `${code} ya está agregado al carrito`,
          action: <Link href="/products/cart" className="text-xs border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
        });
        return;
      }
    }

    toast({
      title: 'Añadido al Carrito',
      description: `${code} añadido al carrito`,
      action: <Link href="/products/cart" className="text-xs border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
    });

    localStorage.setItem('CartItems', JSON.stringify(cartItems));
    if (setCartItems) {
      setCartItems(cartItems);
    }
  }

  return (
    <div className=" relative w-full h-[21rem] flex flex-col justify-center items-center border border-border rounded-xl">
      <Link className="group flex flex-col justify-center items-center w-full h-full rounded-t-xl bg-secondary" href={`/products/${code}`}>
        <div className="rounded-xl relative my-4 w-40 h-40">
          <Image
            src={image}
            fill
            alt={code}
            className={cn(
              'duration-200 ease-in-out group-hover:opacity-80',
              isLoading
                ? 'grayscale blur-lg scale-110'
                : 'grayscale-0 blur-0 scale-100',
            )}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => setImage('/images/NoImage.webp')}
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
            onClick={() => addItemToCart()}
            type="button"
            className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary px-2 py-1 transition-all"
          >
            <AiOutlineShoppingCart className="w-5 h-5" />
          </button>
          {
            setFavorites ? (
              <AlertDialog>
                <AlertDialogTrigger>
                  <TbHeartBroken className="w-5 h-5 text-zinc-700 dark:text-zinc-500 hover:text-red-600 dark:hover:text-red-600" />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remover producto?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta acción eliminará el producto de tu lista de favoritos
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => removeFavorite()}
                    >
                      Continuar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <button
                onClick={() => addItemToFavorite()}
                type="button"
                className="text-zinc-700 dark:text-zinc-500 hover:text-primary dark:hover:text-primary px-2 py-1 transition-all"
              >
                <AiFillHeart className="w-5 h-5" />
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
