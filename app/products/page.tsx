import React from 'react';
import Slider from '@/components/Slider';
import { LuMonitorSpeaker } from 'react-icons/lu';
import { BsHeadphones } from 'react-icons/bs';
import { MdOutlineCable } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import Link from 'next/link';
import { moreProducts } from '../config/constants';
import LandingSlider from './components/LandingSlider';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="bg-secondary w-full flex justify-center">
        <LandingSlider />
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-semibold text-center pt-6 lg:text-3xl">Nuestros Productos</h2>
        <p className="w-full text-center lg:text-xl px-4 pt-2 ">Echa un vistazo a la lista de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={moreProducts} />
        </div>
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-semibold lg:text-3xl mb-6">¿Qué estas buscando?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-full max-w-7xl gap-4">
          <Link href="/products/categorias" className="group bg-secondary rounded-xl h-full p-5 flex flex-col justify-center items-center gap-4">
            <LuMonitorSpeaker className="w-10 h-10 xs:w-12 xs:h-12 group-hover:text-primary transition-all duration-100" />
            <span className="text-lg xs:text-xl font-semibold">Bocinas</span>
          </Link>
          <Link href="/products/categorias" className="group bg-secondary rounded-xl h-full p-5 flex flex-col justify-center items-center gap-4">
            <BsHeadphones className="w-10 h-10 xs:w-12 xs:h-12 group-hover:text-primary transition-all duration-100" />
            <span className="text-lg xs:text-xl font-semibold">Audifonos</span>
          </Link>
          <Link href="/products/categorias" className="group bg-secondary rounded-xl h-full p-5 flex flex-col justify-center items-center gap-4">
            <MdOutlineCable className="w-10 h-10 xs:w-12 xs:h-12 group-hover:text-primary transition-all duration-100" />
            <span className="text-lg xs:text-xl font-semibold">Accesorios</span>
          </Link>
          <Link href="/products/categorias" className="group bg-secondary rounded-xl h-full p-5 flex flex-col justify-center items-center gap-4">
            <FiMoreHorizontal className="w-10 h-10 xs:w-12 xs:h-12 group-hover:text-primary transition-all duration-100" />
            <span className="text-lg xs:text-xl font-semibold">Otros</span>
          </Link>
        </div>
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-semibold text-center pt-6 lg:text-3xl">Nuestros Productos</h2>
        <p className="w-full text-center lg:text-xl px-4 pt-2 ">Echa un vistazo a la lista de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={moreProducts} />
        </div>
      </section>
    </div>
  );
}
