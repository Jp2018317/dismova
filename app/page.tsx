import { redirect } from 'next/navigation';
import { ROUTES } from './config/routes';

export default function ToProducts() {
  return redirect(ROUTES.products);
}
