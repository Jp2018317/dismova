import { CookieOptions } from '@supabase/ssr';
import Cookies from 'js-cookie';

export const customCookieMethods: CookieOptions = {
  get: (key: string) => Cookies.get(key),
  set: (key: string, value: string, options: any) => Cookies.set(key, value, options),
  remove: (key: string) => Cookies.remove(key),
};

export const initProducts = 6;

export const whatsAppNumber = '40254222';

export const landingSliderImages = 4;

export const onlinePurchase = false;
