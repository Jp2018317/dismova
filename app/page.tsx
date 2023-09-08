import { redirect } from 'next/navigation';
import { ROUTES } from '@/config';

export default function ToProducts() {
  return redirect(ROUTES.products);
}
