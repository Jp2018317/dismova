import { ReactNode } from 'react';
import Logo from '@/components/logo';
import { montserrat } from '@/lib/fonts';

export default async function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen flex">
      <section className="bg-black max-lg:hidden w-full grid place-items-center">
        <div
          className="h-full py-20 flex flex-col items-center justify-center space-y-2"
        >
          <Logo className="w-96 h-28 text-white" />
          <p className={`text-4xl tracking-[1rem] pl-[1rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] to-[#DD2476] ${montserrat.className}`}>DISMOVA</p>
        </div>
      </section>
      {children}
    </main>
  );
}
