import React from 'react';
import Link from 'next/link';

import { UserAuthForm } from '@/components/UserAuthForm';
import Logo from '@/components/logo';

export default function Registro() {
  return (
    <div className="p-8 h-[calc(100vh-100px)]">
      <div className="mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="w-full text-center flex justify-center">
            <Logo className="w-[140px] h-[70px]" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          {' '}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>
          {' '}
          and
          {' '}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
