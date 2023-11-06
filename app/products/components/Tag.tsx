'use client';

import { AiOutlineUsb } from 'react-icons/ai';
import {
  BsUsbMicro, BsLightningCharge,
} from 'react-icons/bs';
import { PiRadioLight } from 'react-icons/pi';

type TagProps = {
  icon: string,
  title: string
};

export default function Tag({ icon, title }: TagProps) {
  const iconComponent = {
    BsUsbMicro: <BsUsbMicro />,
    BsLightningCharge: <BsLightningCharge />,
    AiOutlineUsb: <AiOutlineUsb />,
    PiRadioLight: <PiRadioLight />,
  }[icon];

  return (
    <li className="flex flex-col items-center">
      <div className="text-2xl lg:text-4xl h-10 lg:h-16 w-fit px-2 max-w-xs bg-secondary rounded-lg p-1 flex justify-center items-center text-zinc-800 dark:text-zinc-300">
        {iconComponent}
      </div>
      <p className="text-center dark:text-zinc-300 mt-1 text-10px text-[10px] lg:text-sm font-semibold">{title}</p>
    </li>
  );
}
