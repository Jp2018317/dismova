'use client';

import React, { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BsDoorOpen } from 'react-icons/bs';
import { Separator } from '@/components/ui/separator';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export function Profile() {
  const [loadingUser, setLoadingUser] = useState(true);
  const [userLogged, setUserLogged] = useState<User | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  async function getUser() {
    const loggedUser = await supabase.auth.getUser();
    if (!loggedUser.error) {
      setUserLogged(loggedUser?.data.user);
    }
    setLoadingUser(false);
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
    <div>
      {
        userLogged ? (
          <>
            <h2 className="font-bold my-4">Sesión:</h2>
            <section className="grid sm:grid-cols-2 gap-4 overflow-y-auto lg:max-h-[30rem] ml-2 pl-4 border-l border-border">
              <div className="">
                <p className="font-semibold max-xs:text-sm">Correo electrónico:</p>
                <p className="font-medium text-xs xs:text-sm p-2 xs:p-4 text-zinc-600 dark:text-zinc-400">{userLogged?.email}</p>
              </div>
              <div className="">
                <p className="font-semibold max-xs:text-sm">Teléfono:</p>
                {
                  userLogged?.phone ? (
                    <p className="font-medium text-sm p-2 xs:p-4 text-zinc-600 dark:text-zinc-400">{userLogged?.phone}</p>
                  ) : (
                    <div className="flex max-sm:flex-col p-2 xs:p-4 gap-4 sm:items-center">
                      <p className="font-medium text-xs xs:text-sm text-zinc-600 dark:text-zinc-400">No agregado</p>
                      <Button className="h-8 w-fit">
                        agregar
                      </Button>
                    </div>
                  )
              }
              </div>
              <div className="">
                <p className="font-semibold max-xs:text-sm">Fecha de Creación:</p>
                <p className="font-medium text-xs xs:text-sm p-2 xs:p-4 text-zinc-600 dark:text-zinc-400">{ getLastSignIn(userLogged?.created_at || '') }</p>
              </div>
              <div className="">
                <p className="font-semibold max-xs:text-sm">Último ingreso:</p>
                <p className="font-medium text-xs xs:text-sm p-2 xs:p-4 text-zinc-600 dark:text-zinc-400">{ getLastSignIn(userLogged?.last_sign_in_at || '') }</p>
              </div>
              <Separator className="sm:col-span-2" />
              <Button
                onClick={() => {
                  supabase.auth.signOut().then(() => {
                    window.location.reload();
                  });
                }}
                variant="ghost"
                className="hover:text-red-500 flex justify-start sm:col-span-2"
              >
                <BsDoorOpen className="w-5 h-5 mr-2" />
                <p>Cerrar sesión</p>
              </Button>
            </section>
          </>
        ) : (
          <section className="w-full h-full min-h-[200px] lg:h-80 flex flex-col items-center justify-center gap-4">
            {
              loadingUser ? (
                <div className="w-full flex flex-col justify-center items-center h-40">
                  <AiOutlineLoading3Quarters className="w-6 h-6 text-primary animate-spin" />
                </div>
              ) : (
                <>
                  <div className="text-sm lg:text-lg dark:text-white font-semibold text-center">Aun no has ingresado con ninguna cuenta</div>
                  <div className="flex justify-center gap-4 w-full">
                    <Button
                      className="flex justify-center lg:justify-start"
                    >
                      <Link href="/auth/login" className="w-full text-start">
                        <p>Ingresar</p>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex justify-center lg:justify-start"
                    >
                      <Link href="/auth/signup" className="w-full text-start">
                        <p>Registrarme</p>
                      </Link>
                    </Button>
                  </div>
                </>
              )
            }
          </section>
        )
      }
    </div>
  );
}
