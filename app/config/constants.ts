import { CookieOptions } from '@supabase/ssr';
import Cookies from 'js-cookie';

export const Products = {
  id: '6',
  longTitle: 'OB73004 BOCINA PORTATIL 3" 5000 W PMPO TWS RECARGABLE BT FM USB MICRO SD LUZ LED',
  shortTitle: 'BOCINA PORTATIL 3" 5000 W',
  description: 'Cuenta con: •Bluetooth: Vincula cualquier dispositivo para transmitir audio inalámbricamente •RGB LED: Cambia el modo de luz •Radio FM: Escucha tu estación favorita •Incluye Cable USB de carga •Entrada USB y Micro SD •Entrada: 5 Vcc •Batería recargable: 3.7 Vcc 500 mAh Incluye: Cable USB',
  category: 'Bafles',
  price: 89.00,
  stock: 10,
  code: 'ISP-4010',
  images: [
    {
      name: '1',
    },
    {
      name: '2',
    },
  ],
  tags: [
    {
      icon: 'BsUsbMicro',
      name: 'Entrada Micro SD',
    },
    {
      icon: 'BsLightningCharge',
      name: 'Batería recargable',
    },
    {
      icon: 'AiOutlineUsb',
      name: 'Entrada USB',
    },
    {
      icon: 'PiRadioLight',
      name: 'Radio FM',
    },
  ],
};

export const cartItems = [
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.99, category: 'Bafles', stock: 2, code: 'ISP-4020',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', stock: 2, code: 'ISP-4030',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', stock: 2, code: 'ISP-4050',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', stock: 2, code: 'ISP-4060',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', stock: 2, code: 'ISP-4080',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', stock: 2, code: 'ISP-4090',
  },
];

export const favItems = [
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.99, category: 'Bafles', code: 'ISP-4020',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', code: 'ISP-4030',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', code: 'ISP-4050',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', code: 'ISP-4060',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', code: 'ISP-4080',
  },
  {
    shortTitle: 'Bocina', description: 'Bocina de gama alta con rgb marca Fussion', price: 499.00, category: 'Bafles', code: 'ISP-4090',
  },
];

export const customCookieMethods: CookieOptions = {
  get: (key: string) => Cookies.get(key),
  set: (key: string, value: string, options: any) => Cookies.set(key, value, options),
  remove: (key: string) => Cookies.remove(key),
};

export const INIT_PAGINATION_SLIDER = 4;
