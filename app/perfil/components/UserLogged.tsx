'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { BsDoorOpen } from 'react-icons/bs';
import Link from 'next/link';
import { MdLogin } from 'react-icons/md';

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
      className="lg:flex lg:flex-col grid grid-cols-4 gap-1 max-sm:grid-cols-2 sm:gap-5 mt-2"
    >
      {
        userLogged ? (
          <Button
            onClick={() => {
              supabase.auth.signOut();
            }}
            variant="ghost"
            className="hover:text-red-500 flex justify-start"
          >
            <BsDoorOpen className="w-5 h-5 mr-2" />
            <p>Salir</p>
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              className="flex justify-start"
            >
              <Link href="/auth/signUp" className="flex">
                <MdLogin className="w-5 h-5 mr-2" />
                <p>Ingresar</p>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="flex justify-start"
            >
              <Link href="/auth/login" className="flex">
                <BsDoorOpen className="w-5 h-5 mr-2" />
                <p>Registrarme</p>
              </Link>
            </Button>
          </>
        )
      }
    </nav>
  );
}
