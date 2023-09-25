import React, { ReactNode } from 'react';
import NavBar from '@/components/Navbar';

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col items-center">
      <NavBar />
      {children}
    </section>
  );
}
