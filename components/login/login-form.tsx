'use client';

// React
import React, { useEffect, useState } from 'react';

// NPM
import { useForm } from 'react-hook-form';
import { SignInFResolver, SignInTypeSchema } from '@/resolvers/sign-in-resolver';

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
import { useRouter } from 'next/navigation';
import { AuthError } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';

function LoginForm() {
  const [authError, setAuthError] = useState<AuthError>();
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  async function getUser() {
    const loggedUser = await supabase.auth.getUser();
    if (loggedUser.data.user) {
      router.push('/productos');
    }
  }

  useEffect(() => {
    getUser();
  });

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
    router.push('/products');
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
