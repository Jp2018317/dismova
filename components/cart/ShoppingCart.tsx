import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { CartItem } from '@/app/config/types';
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from '../ui/sheet';
import Item from './Item';
import { Button } from '../ui/button';

type Props = {
  cartItems: CartItem[];
};

export default function Cart({ cartItems }:Props) {
  return (
    <div className="max-sm:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <AiOutlineShoppingCart className="text-zinc-900 dark:text-zinc-200 hover:text-primary dark:hover:text-primary duration-150 w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex justify-between items-center mb-2 p-3 w-full">
              <h1 className="text-2xl">Mi carrito</h1>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-y-4">
            { cartItems.slice(0, 5).map((item) => (
              <Item
                key={item.name}
                name={item.name}
                description={item.description}
                category={item.category}
                price={item.price}
                stock={item.stock}
              />
            ))}
          </div>
          { cartItems.length === 0 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10">
              <h2 className="text-xl font-semibold w-full text-center mb-2">Aun no hay productos!</h2>
              <h3 className="font-medium w-full text-center mb-6">Aqui se mostraran los productos que agregues a tu carrito de compras</h3>
              <div className="w-full flex justify-center">
                <Button>Buscar Productos</Button>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center mt-4">
            { cartItems.length > 5 && <Link href="/products/cart" className="underline-offset-4 text-sm rounded-xl px-4 py-2 font-medium hover:underline">Ver Todos</Link> }
            { cartItems.length > 0 && <Link href="/products/cart" className="bg-primary text-sm rounded-xl px-4 py-2 font-medium text-white">Comprar</Link> }
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
