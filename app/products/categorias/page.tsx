import { redirect } from 'next/navigation';
import { ROUTES } from '@/config';

export default function Categories() {
  return redirect(ROUTES.products);
}
