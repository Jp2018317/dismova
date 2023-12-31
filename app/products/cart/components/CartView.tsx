'use client';

import { CartItem } from '@/app/config/types';
import { Button } from '@/components/ui/button';
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
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { onlinePurchase } from '@/app/config/constants';
import CartProduct from './CartProduct';

export default function CartView() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const [loadingCartItems, setLoadingCartItems] = useState(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('CartItems') || '[]');
    setCartItems(storedCart);
    setTotalPrice(
      storedCart.reduce((acc: number, item: CartItem) => acc + item.price * item.stock, 0),
    );
    setTotalProducts(storedCart.reduce((acc: number, item: CartItem) => acc + item.stock, 0));
    setLoadingCartItems(false);
  }, []);

  function emptyCart() {
    localStorage.setItem('CartItems', '[]');
    setTotalPrice(0);
    setTotalProducts(0);
    setCartItems([]);
  }

  return (
    <section className="w-full h-full max-w-7xl flex max-lg:flex-col gap-6 py-4 lg:py-8">

      <div className="w-full h-full">
        <div className="flex w-full pb-4">
          <h1 className="w-48 font-semibold text-2xl">Mi Carrito</h1>
          {
              cartItems.length > 0
               && (
               <div className="max-sm:hidden grid grid-cols-5 gap-x-4 items-end w-full px-4">
                 <h2 className="w-full col-span-2 font-semibold text-sm pb-1 text-center">Nombre:</h2>
                 <h2 className="w-full font-semibold text-sm pb-1 text-center">Cantidad</h2>
                 <h2 className="w-full font-semibold text-sm pb-1 text-center">Precio</h2>
                 <h2 className="w-full font-semibold text-sm pb-1 text-center">Subtotal</h2>
               </div>
               )
            }
        </div>
        <div className="max-h-[29rem] sm:max-h-[35rem] overflow-y-auto space-y-4">
          { cartItems.map((item: CartItem) => (
            <CartProduct
              key={item.code}
              shortTitle={item.shortTitle}
              description={item.description}
              category={item.category}
              price={item.price}
              stock={item.stock}
              code={item.code}
              totalPrice={totalPrice}
              totalProducts={totalProducts}
              setTotalPrice={setTotalPrice}
              setTotalProducts={setTotalProducts}
              setCartItems={setCartItems}

            />
          ))}
        </div>
        {
            loadingCartItems ? (
              <div className="w-full flex flex-col justify-center items-center h-40">
                <AiOutlineLoading3Quarters className="w-6 h-6 text-primary animate-spin" />
              </div>
            )
              : cartItems.length === 0 && (
                <div className="w-full flex flex-col justify-center items-center h-96">
                  <h2 className="text-xl font-semibold w-full text-center mb-2">Aun no hay productos!</h2>
                  <h3 className="text-xs md:text-sm w-full text-center mb-6">Aqui se mostraran los productos que agregues a tu carrito de compras</h3>
                </div>
              )

        }
      </div>
      <div className="relative w-full lg:w-96 bg-secondary h-full rounded-xl p-6 space-y-4">
        <h1 className="text-lg font-semibold">Resúmen:</h1>
        <div className="flex max-xs:flex-col lg:flex-col lg:space-y-2 gap-x-8 gap-y-2">
          <h2 className="flex gap-x-2 text-sm font-medium">
            Total:
            {' '}
            <span className="max-lg:text-sm font-medium flex items-center">
              <p className="text-primary">Q</p>
              {totalPrice.toFixed(2)}
            </span>

          </h2>
          <h2 className="flex gap-x-2 text-sm font-medium">
            Productos Totales:
            {' '}
            <span className="max-lg:text-sm font-medium flex items-center">
              {totalProducts}
            </span>

          </h2>
        </div>

        <div className="flex max-xs:flex-col lg:flex-col gap-4">
          <div className="w-full">
            <Button disabled={!onlinePurchase} className="w-full">Comprar</Button>
          </div>
          <AlertDialog>
            <AlertDialogTrigger className="w-full">
              <div className="h-10 border border-border dark:border-zinc-700 rounded-lg text-sm font-medium flex items-center justify-center">Vaciar Carrito</div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Vaciar carrito</AlertDialogTitle>
                <AlertDialogDescription>
                  Estas seguro de querer vaciar tu carrito?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={() => emptyCart()}>Continuar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

    </section>
  );
}
