import { ROUTES } from '@/app/config/routes';
import { redirect } from 'next/navigation';

export default function Categories() {
  return redirect(ROUTES.products);
}
