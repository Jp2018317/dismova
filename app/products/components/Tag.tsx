'use client';

type LabelProps = {
  icon: React.ReactNode,
  title: string
};

export default function Tag({ icon, title }:LabelProps) {
  return (
    <li className="flex flex-col items-center">
      <div className="h-10 lg:h-16 w-fit px-2 max-w-xs bg-secondary rounded-lg p-1 flex justify-center items-center">
        {icon}
      </div>
      <p className="text-center dark:text-zinc-300 mt-1 text-[10px] lg:text-xs font-semibold">{ title }</p>
    </li>
  );
}
