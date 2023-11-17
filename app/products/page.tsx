import React from 'react';
import Slider from '@/components/Slider';
import { LuMonitorSpeaker } from 'react-icons/lu';
import { BsHeadphones } from 'react-icons/bs';
import { MdOutlineCable } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import Link from 'next/link';
import { createServerClient } from '@supabase/ssr';
import LandingSlider from './components/LandingSlider';
import { Product } from '../config/types';
import { customCookieMethods, initProducts, whatsAppNumber } from '../config/constants';

export default async function Home() {
  const cookies = customCookieMethods;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies,
    },
  );

  const speakersData = await supabase.from('Products').select()
    .eq('category', 'Bafles')
    .gt('stock', 0)
    .limit(initProducts)
    .order('stock', { ascending: false });
  const speakers:Product[] = speakersData.data || [];

  const headPhonesData = await supabase.from('Products').select()
    .eq('category', 'Audifonos')
    .gt('stock', 0)
    .limit(initProducts)
    .order('stock', { ascending: false });
  const headSet:Product[] = headPhonesData.data || [];

  return (
    <div className="w-full flex flex-col items-center">
      <section className="bg-secondary w-full flex justify-center">
        <LandingSlider />
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-bold text-center pt-6 lg:text-3xl">Bocinas</h2>
        <p className="w-full text-center lg:text-xl px-4 pt-2 ">Echa un vistazo a la lista de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={speakers} />
        </div>
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-semibold lg:text-3xl mb-6 max-md:text-center">¿Qué estas buscando?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-full max-w-7xl gap-4">
          <Link href="/products/categorias/Bafles" className="group bg-secondary rounded-xl h-full p-5 flex flex-col justify-center items-center gap-4">
            <LuMonitorSpeaker className="w-10 h-10 xs:w-12 xs:h-12 group-hover:text-primary transition-all duration-100" />
            <span className="text-lg xs:text-xl font-semibold">Bocinas</span>
          </Link>
          <Link href="/products/categorias/Audifonos" className="group bg-secondary rounded-xl h-full p-5 flex flex-col justify-center items-center gap-4">
            <BsHeadphones className="w-10 h-10 xs:w-12 xs:h-12 group-hover:text-primary transition-all duration-100" />
            <span className="text-lg xs:text-xl font-semibold">Audifonos</span>
          </Link>
          <Link href="/products/categorias/Accesorios" className="group bg-secondary rounded-xl h-full p-5 flex flex-col justify-center items-center gap-4">
            <MdOutlineCable className="w-10 h-10 xs:w-12 xs:h-12 group-hover:text-primary transition-all duration-100" />
            <span className="text-lg xs:text-xl font-semibold">Accesorios</span>
          </Link>
          <Link href="/products/categorias/Otros" className="group bg-secondary rounded-xl h-full p-5 flex flex-col justify-center items-center gap-4">
            <FiMoreHorizontal className="w-10 h-10 xs:w-12 xs:h-12 group-hover:text-primary transition-all duration-100" />
            <span className="text-lg xs:text-xl font-semibold">Otros</span>
          </Link>
        </div>
      </section>
      <section className="w-full h-full px-5 max-w-7xl">
        <h2 className="w-full text-2xl font-bold text-center pt-6 lg:text-3xl">Audifonos</h2>
        <p className="w-full text-center lg:text-xl px-4 pt-2 ">Echa un vistazo a la lista de productos que ofrecemos!</p>
        <div className="py-4">
          <Slider swiperInfo={headSet} />
        </div>
      </section>
      <div className="fixed z-40 bottom-6 right-6 rounded-full bg-green-500 border border-zinc-100 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
        <a href={`https://api.whatsapp.com/send?phone=${whatsAppNumber}`} target="_blank" rel="noreferrer">
          <FaWhatsapp className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}
