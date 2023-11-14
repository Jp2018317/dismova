import { redirect } from 'next/navigation';
import { ROUTES } from '@/config';

export default function Search() {
  return redirect(ROUTES.products);
}
