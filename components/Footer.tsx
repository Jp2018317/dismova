'use client';

import Logo from './logo';

export default function Footer() {
  return (
    <footer className="w-full border-t border-secondary">
      <section className="w-full h-full md:h-48 p-4 bg-secondary flex justify-center gap-2">
        <div className="w-full h-full flex max-md:flex-col md:justify-around gap-4 md:gap-10 max-w-7xl">
          <div
            className="max-md:w-full h-full flex flex-col items-center justify-center"
          >
            <Logo className="max-md:w-20 w-28 max-md:h-8 h-12" />
            <p className="max-md:text-[10px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] to-[#DD2476]">DISMOVA</p>
          </div>
          <div className="grid xs:grid-cols-3 gap-6 items-center w-full px-10 md:px-6 md:max-w-3xl h-full">
            <div className="text-center flex flex-col gap-2">
              <span className="font-bold underline underline-offset-2 max-md:text-xs">Bueno</span>
              <p className="font-medium text-[10px] md:text-xs">Productos con una calidad comprobada excelente</p>
            </div>
            <div className="text-center flex flex-col gap-2">
              <span className="font-bold underline underline-offset-2 max-md:text-xs">Bonito</span>
              <p className="font-medium text-[10px] md:text-xs">Amplia variedad de diseños y colores a tu gusto</p>
            </div>
            <div className="text-center flex flex-col gap-2">
              <span className="font-bold underline underline-offset-2 max-md:text-xs">Barato</span>
              <p className="font-medium text-[10px] md:text-xs">Precios accesibles en relación a la calidad otorgada</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-2 bg-background">
        <p className="font-medium text-[10px] md:text-xs text-center">DISMOVA</p>
      </section>
    </footer>
  );
}
