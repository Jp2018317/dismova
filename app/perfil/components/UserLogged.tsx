'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { BsDoorOpen } from 'react-icons/bs';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function UserLogged() {
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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav
      className="flex lg:flex-col gap-2 max-md:col-span-2"
    >
      <Separator className="mb-2 max-lg:hidden" />
      {
        userLogged ? (
          <Button
            onClick={() => {
              supabase.auth.signOut();
            }}
            variant="ghost"
            className="hover:text-red-500 flex justify-center lg:justify-start w-full"
          >
            <BsDoorOpen className="w-5 h-5 mr-2" />
            <p>Salir</p>
          </Button>
        ) : (
          <div className="flex lg:flex-col gap-2 w-full">
            <Button
              className="flex justify-center lg:justify-start w-full"
            >
              <Link href="/auth/signUp">
                <p>Ingresar</p>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="flex justify-center lg:justify-start w-full"
            >
              <Link href="/auth/login">
                <p>Registro</p>
              </Link>
            </Button>
          </div>
        )
      }
    </nav>
  );
}
