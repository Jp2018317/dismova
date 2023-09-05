'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'lg:flex lg:flex-col grid grid-cols-4 gap-1 max-sm:grid-cols-2 sm:gap-5',
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
            'lg:justify-start justify-center',
          )}
        >
          <Link href={item.href}>{item.title}</Link>
        </Button>
      ))}
    </nav>
  );
}
