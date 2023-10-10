'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Slider } from '@/components/ui/slider';

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(true);
  return (
    <div className="relative w-full lg:w-80 bg-secondary lg:h-[40rem] rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Filtro de Búsqueda:</h1>
        <Button
          className="lg:hidden"
          variant="secondary"
          onClick={() => setOpenFilter(!openFilter)}
        >
          Filtro
          {
            openFilter ? (
              <BiChevronDown className="w-5 lg:w-6 h-5 lg:h-6 text-white ml-2" />
            ) : (
              <BiChevronUp className="w-5 lg:w-6 h-5 lg:h-6 text-white ml-2" />
            )
          }
        </Button>
      </div>
      <div className={`${!openFilter && 'hidden'}`}>
        <h3 className="text-sm font-semibold mb-4">Precios</h3>
        <Slider defaultValue={[400]} min={100} max={2000} step={100} />
      </div>
    </div>
  );
}
