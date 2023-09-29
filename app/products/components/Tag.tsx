'use client';

type LabelProps = {
  icon: React.ReactNode,
  title: string
};

export default function Tag({ icon, title }:LabelProps) {
  return (
    <li className="flex flex-col items-center">
      <div className="h-10 lg:h-14 w-fit px-2 max-w-sm bg-secondary rounded-md p-1 flex justify-center items-center">
        {icon}
      </div>
      <p className="text-center dark:text-zinc-300 mt-2 text-[10px] lg:text-xs font-semibold">{ title }</p>
    </li>
  );
}
