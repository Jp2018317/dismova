'use client';

import React, { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';

export function Profile() {
  const [userLogged, setUserLogged] = useState<User | null>();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  async function getUser() {
    const loggedUser = await supabase.auth.getUser();
    if (!loggedUser.error) {
      setUserLogged(loggedUser?.data.user);
    }
  }

  function getLastSignIn(lastSingIn: string) {
    if (lastSingIn === '') return 'No se encontró una fecha de ingreso';
    const fechaHora = new Date(lastSingIn);

    // Obtener las partes de la fecha y hora
    const dia = fechaHora.getDate();
    const mes = fechaHora.getMonth() + 1; // Los meses en JavaScript son de 0 a 11
    const año = fechaHora.getFullYear();
    const horas = fechaHora.getHours();
    const minutos = fechaHora.getMinutes();

    const fechaHoraLegible = `${dia}/${mes}/${año} a las ${horas}:${minutos}`;

    return fechaHoraLegible;
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="grid sm:grid-cols-2 gap-4 overflow-y-auto lg:max-h-[30rem] max-sm:justify-center">
      <div className="max-sm:text-center">
        <p className="font-semibold">Correo electrónico:</p>
        <p className="font-medium text-sm p-4 text-zinc-600 dark:text-zinc-400">{userLogged?.email}</p>
      </div>
      <div className="max-sm:text-center">
        <p className="font-semibold">Teléfono:</p>
        {
            userLogged?.phone ? (
              <p className="font-medium text-sm p-4 text-zinc-600 dark:text-zinc-400">{userLogged?.phone}</p>
            ) : (
              <div className="flex max-sm:flex-col p-4 gap-4 items-center">
                <p className="font-medium text-sm text-zinc-600 dark:text-zinc-400">No agregado</p>
                <Button className="h-8">
                  agregar
                </Button>
              </div>
            )
        }
      </div>
      <div className="max-sm:text-center">
        <p className="font-semibold">Fecha de Creación:</p>
        <p className="font-medium text-sm p-4 text-zinc-600 dark:text-zinc-400">{ getLastSignIn(userLogged?.created_at || '') }</p>
      </div>
      <div className="max-sm:text-center">
        <p className="font-semibold">Último ingreso:</p>
        <p className="font-medium text-sm p-4 text-zinc-600 dark:text-zinc-400">{ getLastSignIn(userLogged?.last_sign_in_at || '') }</p>
      </div>
      <div className="max-sm:text-center">
        <p className="font-semibold">Correo electrónico:</p>
        <p className="font-medium text-sm p-4 text-zinc-600 dark:text-zinc-400">{userLogged?.created_at}</p>
      </div>
    </section>
  );
}
