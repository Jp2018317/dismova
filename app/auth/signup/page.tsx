import { montserrat } from '@/lib/fonts';
import SignupForm from '@/components/signup/signup-form';
import Link from 'next/link';
import { BiChevronLeft } from 'react-icons/bi';
import Logo from '@/public/images/Logo.png';
import { ROUTES } from '@/app/config/routes';
import Image from 'next/image';
import React from 'react';

export default async function SignUpPage() {
  return (
    <section className="relative w-full grid place-items-center">
      <Link href={ROUTES.root} className="absolute top-5 left-5 flex items-center text-sm">
        <BiChevronLeft className="w-8 h-8 text-zinc-500" />
      </Link>
      <div className="w-full max-w-xl lg:max-w-lg xl:max-w-xl px-10 space-y-4">
        <div
          className="lg:hidden flex flex-col items-center justify-center"
        >
          <Image
            src={Logo}
            alt="Crea Caps Logo"
            width={200}
            height={200}
          />
        </div>
        <h2 className={`text-center text-xl lg:text-3xl ${montserrat.className}`}>REGISTRO</h2>
        <SignupForm />
        <Link href={ROUTES.auth.login} className="underline mt-2 text-xs">Ya tienes cuenta?</Link>
      </div>
    </section>
  );
}
