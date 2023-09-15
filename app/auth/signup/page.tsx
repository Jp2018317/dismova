import { montserrat } from '@/lib/fonts';
import SignupForm from '@/components/signup/signup-form';
import Link from 'next/link';
import { ROUTES } from '@/config';
import { BiChevronLeft } from 'react-icons/bi';
import Logo from '@/components/logo';

export default async function SignUpPage() {
  return (
    <section className="relative w-full grid place-items-center">
      <Link href={ROUTES.root} className="absolute top-5 left-5 flex items-center text-sm">
        <BiChevronLeft className="w-8 h-8 text-zinc-500" />
      </Link>
      <div className="w-full max-w-lg px-10 space-y-4">
        <div
          className="lg:hidden flex flex-col items-center justify-center"
        >
          <Logo className="xs:w-60 xs:h-24 w-48 h-20" />
          <p className={`text-2xl tracking-[1rem] pl-[1rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] to-[#DD2476] ${montserrat.className}`}>DISMOVA</p>
        </div>
        <h2 className={`text-center text-xl lg:text-3xl ${montserrat.className}`}>REGISTRO</h2>
        <SignupForm />
        <Link href={ROUTES.auth.login} className="underline mt-2 text-xs">Ya tienes cuenta?</Link>
      </div>
    </section>
  );
}
