import React from 'react';

import { Separator } from '@/components/ui/separator';
import { SidebarNav } from '@/app/perfil/components/sidebar-nav';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';
import { ROUTES } from '../config/routes';

const routes = [
  {
    title: 'Mi Cuenta',
    href: '/perfil',
  },
  {
    title: 'Configuración',
    href: '/perfil/configuraciones',
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="lg:space-y-6 space-y-0 lg:p-10 lg:pb-16 p-5">
      <div className="flex items-center gap-4 max-lg:hidden">
        <div className="h-full">
          <Link href="/productos" className="hover:text-primary">
            <IoMdArrowRoundBack className="w-8 h-8" />
          </Link>
        </div>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Mi Perfil</h2>
          <p className="text-muted-foreground">
            Personaliza tu perfil para una mejor experiencia
          </p>
        </div>
      </div>
      <Separator className="max-lg:hidden" />
      <div className="flex flex-col lg:flex-row lg:space-x-12 ">
        <aside className="lg:w-1/5">
          <SidebarNav items={routes} />
        </aside>
        <div className="flex-1 max-w-3xl">{children}</div>
      </div>
    </div>
  );
}
