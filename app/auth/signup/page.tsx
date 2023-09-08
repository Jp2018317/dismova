import { montserrat } from '@/lib/fonts';
import SignupForm from '@/components/signup/signup-form';
import Link from 'next/link';
import { ROUTES } from '@/config';

export default async function SignUpPage() {
  return (
    <section className="w-full grid place-items-center">
      <div className="w-1/2 h-1/2 space-y-9">
        <h1 className={`text-center text-6xl ${montserrat.className}`}>DISMOVA</h1>
        <h2 className={`text-center text-2xl ${montserrat.className}`}>Registro</h2>
        <SignupForm />
        <Link href={ROUTES.auth.login} className="underline mt-1.5 text-xs">Ya tienes cuenta?</Link>
      </div>
    </section>
  );
}
