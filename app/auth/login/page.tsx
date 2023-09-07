import LoginForm from '@/components/login/login-form';
import { montserrat } from '@/lib/fonts';
import Link from 'next/link';
import { ROUTES } from '@/config';

export default async function LoginPage() {
  return (
    <section className="w-full grid place-items-center">
      <div className="w-1/2 h-1/2 space-y-9">
        <h1 className={`text-center text-6xl ${montserrat.className}`}>DISMOVA</h1>
        <h2 className={`text-center text-2xl ${montserrat.className}`}>LOGIN</h2>
        <LoginForm />
        <Link href={ROUTES.auth.signup} className="underline mt-1.5 text-xs">No tienes una cuenta aun?</Link>
      </div>
    </section>
  );
}
