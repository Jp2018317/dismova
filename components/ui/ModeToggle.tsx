"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";

interface DarkMode {
  setDarkMode: Dispatch<SetStateAction<string>>;
}

export function ModeToggle({ setDarkMode }: DarkMode) {
  const { setTheme } = useTheme();
  const [dark, setDark] = useState<boolean>();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={(e) => {
        setDark(!dark);
        dark ? setTheme("light") : setTheme("dark");
        dark ? setDarkMode("light") : setDarkMode("dark");
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
