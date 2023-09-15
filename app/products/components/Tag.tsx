'use client';

type LabelProps = {
  icon: React.ReactNode,
  title: string
};

export default function Tag({ icon, title }:LabelProps) {
  return (
    <li>
      <div className="h-14 lg:h-20 max-w-sm bg-zinc-300 dark:bg-zinc-800 rounded-lg p-1 flex justify-center items-center">
        {icon}
      </div>
      <p className="text-center dark:text-zinc-300 mt-2 text-[10px] lg:text-sm font-semibold">{ title }</p>
    </li>
  );
}
