import React from 'react';

import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/ui/ModeToggle';

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6 max-lg:pt-5">
      <div>
        <h3 className="text-lg font-medium">Configuraciones</h3>
        <p className="text-sm text-muted-foreground">
          Configura el estilo y personaliza tu cuenta
        </p>
      </div>
      <Separator className="my-3" />
      <section className="grid sm:grid-cols-2 gap-4 overflow-y-auto lg:max-h-[30rem]">
        <div>
          <p className="font-semibold">Cambiar Tema: </p>
          <div className="w-full flex p-4 gap-x-6 items-center">
            <ModeToggle />
            <p className="font-medium text-sm text-zinc-600 dark:text-zinc-400 dark:hidden">Modo Claro</p>
            <p className="font-medium text-sm text-zinc-600 dark:text-zinc-400 hidden dark:block">Modo Oscuro</p>
          </div>
        </div>
      </section>
    </div>
  );
}
