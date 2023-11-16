'use client';

import { CartItem, FavItem } from '@/app/config/types';
import { toast } from '@/components/ui/use-toast';
import Link from 'next/link';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

type ProductProps = {
  shortTitle: string
  description: string
  category: string
  code: string;
  price: number
};

export default function ProductsAmount({
  shortTitle, description, category, price, code,
}: ProductProps) {
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
        return;
      }
    }

    toast({
      title: 'Añadido a Favoritos',
      description: `${code} añadido a favoritos`,
      action: <Link href="/products/favoritos" className="text-xs border border-border px-3 py-2 rounded-lg text-center">Ver</Link>,
    });

    localStorage.setItem('Favorites', JSON.stringify(favorites));
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
  }

  return (

    <div className="flex gap-2 max-sm:mt-2">
      <button type="button" onClick={() => addItemToCart()} className="max-xs:w-full border boder-border rounded-2xl  max-xs:text-sm max-lg:text-xs text-sm py-2 px-4 flex justify-center items-center text-primary font-bold hover:bg-primary hover:text-white">
        <AiOutlineShoppingCart className="w-4 lg:w-5 h-4 lg:h-5" />
      </button>

      <button type="button" onClick={() => addItemToFavorite()} className="max-xs:w-full border boder-border rounded-2xl  max-xs:text-sm max-lg:text-xs text-sm py-2 px-4 flex justify-center items-center text-primary font-bold hover:bg-primary hover:text-white">
        <AiFillHeart className="w-4 lg:w-5 h-4 lg:h-5" />
      </button>
    </div>
  );
}
