import React from 'react';
import { Separator } from '@/components/ui/separator';
import {
  AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineUsb,
} from 'react-icons/ai';
import { BsLightningCharge, BsUsbMicro } from 'react-icons/bs';
import { PiRadioLight } from 'react-icons/pi';
import Slider from '@/components/Slider';
import Tag from '../components/Tag';

export default function Product() {
  const swiperInfo1 = [
    {
      id: '1',
      product: 'Bocina',
      category: 'Bafles',
    },
    {
      id: '2',
      product: 'Bocina',
      category: 'bafles',
    },
    {
      id: '3',
      product: 'Bocina',
      category: 'bafles',
    },
    {
      id: '4',
      product: 'Bocina',
      category: 'bafles',
    },
    {
      id: '5',
      product: 'Bocina',
      category: 'bafles',
    },
    {
      id: '6',
      product: 'Bocina',
      category: 'bafles',
    },
  ];

  const swiperInfo2 = [
    {
      id: '1',
      product: 'Bocina',
      title: 'Titulo del producto 1 y una breve descripción o detalles importantes',
      category: 'bafles',
      price: 499,
    },
    {
      id: '2',
      product: 'Bocina',
      title: 'Titulo del producto 2 y una breve descripción o detalles importantes',
      category: 'bafles',
      price: 499,
    },
    {
      id: '3',
      product: 'Bocina',
      title: 'Titulo del producto 3 y una breve descripción o detalles importantes',
      category: 'bafles',
      price: 499,
    },
    {
      id: '4',
      product: 'Bocina',
      title: 'Titulo del producto 4 y una breve descripción o detalles importantes',
      category: 'bafles',
      price: 499,
    },
    {
      id: '5',
      product: 'Bocina',
      title: 'Titulo del producto 5 y una breve descripción o detalles importantes',
      category: 'bafles',
      price: 499,
    },
    {
      id: '6',
      product: 'Bocina',
      title: 'Titulo del producto 6 y una breve descripción o detalles importantes',
      category: 'bafles',
      price: 499,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <section className="relative w-full flex justify-center pt-2">
        <div className="lg:h-[35rem] w-full flex max-md:flex-col justify-center max-w-7xl ">
          <div className="md:w-1/2 flex">

            <Slider swiperInfo={swiperInfo1} />

            <ul className="h-full w-24 grid grid-rows-4 gap-y-1 py-4 max-md:pr-4 items-center">
              <Tag icon={<BsUsbMicro className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Entrada Micro SD" />
              <Tag icon={<BsLightningCharge className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Batería recargable" />
              <Tag icon={<AiOutlineUsb className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Entrada USB" />
              <Tag icon={<PiRadioLight className="text-zinc-800 dark:text-zinc-300 w-full h-6 lg:h-10" />} title="Radio FM" />
            </ul>
          </div>
          <div className="relative md:w-1/2 h-full md:h-[22rem] lg:h-[35rem] w-full p-4 lg:p-6">
            <h1 className="text-2xl md:text-xl lg:text-3xl font-extrabold max-w-[70%] ">Product Name and maybe its best feature</h1>

            <div className="absolute top-6 right-6 font-semibold">
              <h3 className="text-2xl md:text-xl lg:text-3xl flex justify-end">
                <p className="text-primary">Q</p>
                499.00
              </h3>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div>
              <h3 className="w-full max-md:text-base max-lg:text-xs font-semibold tracking-wider mb-2">Descripción</h3>
              <span className="w-full max-md:text-base max-lg:text-xs">Descripción real del producto, incluye capacidades, cantidades, conexiones, etc. Cada producto tiene alrededor de 4 a 6 etiquetas y unas 5 cualidades por lo que dependiendo del producto se vera mas lleno o mas vacio</span>

              <Separator className="my-4 md:my-2 lg:my-4" />

              <div className="flex gap-x-4">
                <div className="flex gap-x-2 w-1/2 max-md:text-base max-lg:text-xs">
                  <h3 className="my-2 font-semibold tracking-wider">Categoría:</h3>
                  <p className="my-2">Bocinas</p>
                </div>
                <div className="flex gap-x-2 w-1/2 max-md:text-base max-lg:text-xs">
                  <h3 className="my-2 font-semibold tracking-wider">Stock:</h3>
                  <p className="my-2">10</p>
                </div>
              </div>
            </div>

            <Separator className="my-4 md:my-2 lg:my-4" />

            <div className="w-full md:absolute bottom-4 lg:bottom-6 left-1/2 md:-translate-x-1/2 md:px-4 lg:px-6 flex justify-between items-end">

              <div className="flex flex-col justify-end">
                <p className=" max-md:text-base max-lg:text-xs font-bold pb-1 max-md:pb-2">Cantidad</p>
                <div className="flex">
                  <button type="button" className="w-8 lg:w-10 h-8 lg:h-10 rounded-l-lg bg-primary flex justify-center items-center">
                    <AiOutlineMinus className="w-4 h-4 text-white" />
                  </button>
                  <div className="w-14 lg:w-16 h-8 lg:h-10 bg-secondary flex justify-center items-center text-xs lg:text-sm">2</div>
                  <button type="button" className="w-8 lg:w-10 h-8 lg:h-10 rounded-r-lg bg-primary flex justify-center items-center">
                    <AiOutlinePlus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <button type="submit" className="bg-primary h-8 lg:h-10 rounded-2xl max-lg:text-xs text-sm py-2 px-4 lg:px-6 flex justify-center items-center tracking-wider text-white font-semibold">
                Añadir al carrito
                <AiOutlineShoppingCart className="w-4 lg:w-5 h-4 lg:h-5 ml-1" />
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
          <Slider swiperInfo={swiperInfo2} productsList />
        </div>
      </section>
    </div>
  );
}
