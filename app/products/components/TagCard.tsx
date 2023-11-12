'use client';

import Link from 'next/link';
import { AiOutlineUsb } from 'react-icons/ai';
import {
  BsUsbMicro, BsLightningCharge, BsHeadphones,
} from 'react-icons/bs';
import { PiMicrophoneBold, PiRadioLight } from 'react-icons/pi';
import { BiBluetooth, BiVolumeMute } from 'react-icons/bi';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import { MdOutlinePalette, MdPhonelinkRing } from 'react-icons/md';
import { GiJackPlug, GiMusicalNotes } from 'react-icons/gi';

type TagProps = {
  icon: string,
  title: string
};

export default function TagCard({ icon, title }: TagProps) {
  const iconComponent = {
    BsUsbMicro: <BsUsbMicro />,
    BsLightningCharge: <BsLightningCharge />,
    AiOutlineUsb: <AiOutlineUsb />,
    PiRadioLight: <PiRadioLight />,
    BiBluetooth: <BiBluetooth />,
    HiOutlineColorSwatch: <HiOutlineColorSwatch />,
    MdOutlinePalette: <MdOutlinePalette />,
    GiJackPlug: <GiJackPlug />,
    PiMicrophoneBold: <PiMicrophoneBold />,
    GiMusicalNotes: <GiMusicalNotes />,
    BiVolumeMute: <BiVolumeMute />,
    MdPhonelinkRing: <MdPhonelinkRing />,
    BsHeadphones: <BsHeadphones />,
  }[icon];

  return (
    <div className="flex flex-col items-center lg:w-32">
      <Link href="/products/Tags" className="text-3xl lg:text-6xl h-16 lg:h-24 px-4 w-fit bg-secondary hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors duration-75 rounded-lg p-1 flex justify-center items-center text-zinc-800 dark:text-zinc-300">
        {iconComponent}
      </Link>
      <p className="text-center dark:text-zinc-300 mt-4 text-lg max-lg:text-sm font-semibold">{title}</p>
    </div>
  );
}
