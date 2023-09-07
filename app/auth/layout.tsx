import { ReactNode } from 'react';
import { montserrat } from '@/lib/fonts';
import Logo from '@/components/logo';

export default async function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen flex">
      <section className="bg-black dark:bg-white w-full grid place-items-center text-5xl text-white dark:text-black">
        <div className="relative w-1/2 h-1/2 backdrop-blur-2xl">
          <Logo className="w-full h-full text-white dark:text-black" />
          <h3 className={`absolute inset-x-0 bottom-10 text-center font-light tracking-wider  ${montserrat.className}`}>
            <span className="text-blue-500">D</span>
            {' '}
            I S
            {' '}
            <span className="text-yellow-500">M</span>
            {' '}
            O V
            {' '}
            <span className="text-red-500">A</span>
            {' '}
          </h3>
        </div>
      </section>
      {children}
    </main>
  );
}
