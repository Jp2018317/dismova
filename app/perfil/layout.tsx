import React from 'react';

import { Separator } from '@/components/ui/separator';
import { SidebarNav } from '@/app/perfil/components/sidebar-nav';

const sidebarNavItems = [
  {
    title: 'Mi Cuenta',
    href: '/perfil',
  },
  {
    title: 'Mis Pedidos',
    href: '/perfil/pedidos',
  },
  {
    title: 'Apariencia',
    href: '/perfil/apariencia',
  },
  {
    title: 'Configuración',
    href: '/perfil/configuracion',
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="lg:space-y-6 space-y-0 lg:p-10 lg:pb-16 p-5">
      <div className="space-y-0.5 max-lg:hidden">
        <h2 className="text-2xl font-bold tracking-tight">Mi Perfil</h2>
        <p className="text-muted-foreground">
          Personaliza tu cuenta para una mejor experiencia
        </p>
      </div>
      <Separator className="max-lg:hidden" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 ">
        <aside className="  lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
          <Separator className="mt-5" />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
