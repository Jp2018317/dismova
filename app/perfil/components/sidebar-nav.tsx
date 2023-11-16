'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '@/app/config/routes';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { UserLogged } from './UserLogged';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-full flex max-xs:flex-col xs:items-center gap-2">
      <div className="h-full lg:hidden">
        <Link href={ROUTES.products} className="hover:text-primary">
          <IoMdArrowRoundBack className="w-8 h-8" />
        </Link>
      </div>
      <nav
        className={cn(
          'lg:flex lg:flex-col grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-5 w-full',
          className,
        )}
        {...props}
      >
        {items.map((item) => (
          <Button
            variant="ghost"
            key={item.href}
            className={cn(
              pathname === item.href
                ? 'bg-muted hover:bg-muted'
                : 'hover:bg-transparent hover:underline',
              'w-full lg:justify-start justify-center',
            )}
          >
            <Link href={item.href}>{item.title}</Link>
          </Button>
        ))}

        <UserLogged />
      </nav>

    </div>
  );
}
