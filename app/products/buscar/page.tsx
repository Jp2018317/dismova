import { ROUTES } from '@/app/config/routes';
import { redirect } from 'next/navigation';

export default function Search() {
  return redirect(ROUTES.products);
}
