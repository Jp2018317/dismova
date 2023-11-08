'use client';

import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type Props = {
  stock: number
};

export default function ProductsAmount({ stock }: Props) {
  const [ammount, setAmmount] = useState(0);

  return (

    <div className="flex">
      <button disabled={(ammount === 0)} onClick={() => setAmmount(ammount - 1)} type="button" className="w-8 lg:w-10 h-8 lg:h-8 rounded-l-lg bg-primary flex justify-center items-center disabled:bg-primary/80">
        <AiOutlineMinus className="w-4 h-4 text-white" />
      </button>
      <div className="w-14 lg:w-16 h-8 lg:h-8 bg-secondary flex justify-center items-center text-xs lg:text-sm">{ ammount}</div>
      <button disabled={(ammount === stock)} onClick={() => setAmmount(ammount + 1)} type="button" className="w-8 lg:w-10 h-8 lg:h-8 rounded-r-lg bg-primary flex justify-center items-center disabled:bg-primary/80">
        <AiOutlinePlus className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
