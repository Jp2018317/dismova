import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { CartItem } from '@/app/config/types';
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from '../ui/sheet';
import Item from './Item';

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
              <Link href="/products/cart" className="bg-primary text-sm rounded-xl px-4 py-2 font-medium text-white">Comprar</Link>

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
          {
            cartItems.length > 5
              && (
              <div className="w-full flex justify-center mt-4">
                <Link href="/products/cart" className="underline-offset-4 rounded-xl px-4 py-2 font-medium hover:underline">Ver Todos</Link>
              </div>
              )
          }
        </SheetContent>
      </Sheet>
    </div>
  );
}
