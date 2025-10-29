import React, { ReactNode } from 'react';
import Logo from '@/public/images/Logo.png';
import Image from 'next/image';

export default async function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen flex">
      <section className="bg-black max-lg:hidden w-full grid place-items-center">
        <div
          className="h-full py-20 flex flex-col items-center justify-center space-y-2"
        >
          <Image
            src={Logo}
            alt="Crea Caps Logo"
            width={400}
            height={300}
          />
        </div>
      </section>
      {children}
    </main>
  );
}
