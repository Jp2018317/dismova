import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartItem } from '@/types';
import Link from 'next/link';
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from '../ui/sheet';
import Item from './Item';

const cartItems: CartItem[] = [
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
  {
    name: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'bafles', initStock: 2,
  },
];

export default function Cart() {
  return (
    <div className="max-sm:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <AiOutlineShoppingCart className="text-zinc-900 dark:text-zinc-200 hover:text-primary dark:hover:text-primary duration-150 w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-center mb-5">Mi Carrito</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-y-4">
            { cartItems.slice(0, 6).map((item) => (
              <Item
                key={item.name}
                name={item.name}
                description={item.description}
                category={item.category}
                price={item.price}
                initStock={item.initStock}
              />
            ))}
          </div>
          <div className="w-full flex mt-5 justify-between">
            <Link href="/cart" className="underline-offset-4 hover:underline px-2 py-2 font-medium dark:text-white hover:text-primary dark:hover:text-primary">Ver todo</Link>
            <Link href="/cart" className="bg-primary rounded-xl px-4 py-2 font-medium text-white">Comprar</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
