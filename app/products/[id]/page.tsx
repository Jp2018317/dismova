import React from 'react';
import { Separator } from '@/components/ui/separator';
import {
  AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineUsb,
} from 'react-icons/ai';
import { BsLightningCharge, BsUsbMicro } from 'react-icons/bs';
import { PiRadioLight } from 'react-icons/pi';
import Slider from '@/components/Slider';
import { Products, moreProducts } from '@/app/config/constants';
import { Product } from '@/app/config/types';
import Link from 'next/link';
import Tag from '../components/Tag';

export default function ProducIdView() {
  const productId: Product = Products;
  const swiperInfo = [
    {
      id: productId.id,
      shortTitle: productId.shortTitle,
      category: productId.category,
      code: productId.code,
      images: productId.images,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <section className="relative w-full flex justify-center pt-2">
        <div className="lg:h-[35rem] w-full flex max-md:flex-col justify-center max-w-7xl ">
          <div className="md:w-1/2 flex">

            <Slider swiperInfo={swiperInfo} images={productId.images} />

            <ul className="h-full w-24 grid grid-rows-4 gap-y-1 py-4 px-4 items-center">
              <Tag icon={<BsUsbMicro className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Entrada Micro SD" />
              <Tag icon={<BsLightningCharge className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Batería recargable" />
              <Tag icon={<AiOutlineUsb className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Entrada USB" />
              <Tag icon={<PiRadioLight className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Radio FM" />
            </ul>
          </div>
          <div className="relative md:w-1/2 h-full md:h-[22rem] lg:h-[35rem] w-full p-4 lg:p-6">
            <h1 className="text-2xl md:text-xl lg:text-3xl font-bold xs:max-w-[70%] mb-2">{productId.shortTitle}</h1>

            <div className="xs:absolute top-4 lg:top-6 right-4 lg:right-6 font-bold">
              <h3 className="text-xl xs:text-2xl md:text-xl lg:text-3xl flex">
                <p className="text-primary">Q</p>
                {productId.price.toFixed(2)}
              </h3>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div>
              <h3 className="w-full max-md:text-base max-lg:text-xs font-bold tracking-wider mb-2">Descripción</h3>
              <span className="w-full max-md:text-base max-lg:text-xs">{productId.description}</span>

              <Separator className="my-4 md:my-2 lg:my-4" />

              <div className="xs:flex gap-x-4">
                <div className="flex gap-x-2 w-1/2 max-md:text-base max-lg:text-xs">
                  <h3 className="my-2 font-bold tracking-wider">Categoría:</h3>
                  <Link href="/products/categorias" className="my-2 hover:underline underline-offset-2  ">{productId.category}</Link>
                </div>
                <div className="flex gap-x-2 w-1/2 max-md:text-base max-lg:text-xs">
                  <h3 className="my-2 font-bold tracking-wider">Stock:</h3>
                  <p className="my-2">{productId.stock}</p>
                </div>
              </div>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div className="w-full md:absolute bottom-4 lg:bottom-6 left-1/2 md:-translate-x-1/2 md:px-4 lg:px-6 flex justify-between items-end">

              <div className="flex flex-col justify-end">
                <p className=" max-md:text-base max-lg:text-xs font-bold pb-1 max-md:pb-2">Cantidad</p>
                <div className="flex">
                  <button type="button" className="w-8 lg:w-10 h-8 lg:h-8 rounded-l-lg bg-primary flex justify-center items-center">
                    <AiOutlineMinus className="w-4 h-4 text-white" />
                  </button>
                  <div className="w-14 lg:w-16 h-8 lg:h-8 bg-secondary flex justify-center items-center text-xs lg:text-sm">2</div>
                  <button type="button" className="w-8 lg:w-10 h-8 lg:h-8 rounded-r-lg bg-primary flex justify-center items-center">
                    <AiOutlinePlus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <button type="submit" className="bg-primary h-8 lg:h-10 rounded-2xl max-lg:text-xs text-sm px-4 lg:px-6 flex justify-center items-center text-white font-bold">
                <AiOutlineShoppingCart className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                Añadir al carrito
              </button>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full px-5 max-w-7xl">

        <Separator className="my-4 md:my-2 lg:my-4" />

        <h2 className="w-full text-2xl font-semibold text-center py-6 lg:text-3xl">Mas Productos</h2>
        <p className="w-full text-center lg:text-xl ">Echa un vistazo a las categorias de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={moreProducts} />
        </div>
      </section>
    </div>
  );
}
