import React, { ReactNode } from 'react';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="flex flex-col items-center h-full">
        <NavBar />
        {children}
      </section>

      <Footer />
    </>
  );
}
