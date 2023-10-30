'use client';

// React
import React, { useState } from 'react';

// NPM
import { useForm } from 'react-hook-form';
import { SignInFResolver, SignInTypeSchema } from '@/resolvers/sign-in-resolver';

// Supabase
import { createBrowserClient } from '@supabase/ssr';

// Shadcn
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthError } from '@supabase/gotrue-js';
import { useRouter } from 'next/navigation';

function LoginForm() {
  const [authError, setAuthError] = useState<AuthError>();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const router = useRouter();

  const form = useForm<SignInTypeSchema>({
    resolver: SignInFResolver,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: SignInTypeSchema) {
    const res = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (res.error) {
      setAuthError(res.error);
      return;
    }

    setAuthError(undefined);
    router.refresh();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Correo
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu Correo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Contraseña
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu Contraseña" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {authError && <span className="text-xs text-red-600">{authError.message}</span>}
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
