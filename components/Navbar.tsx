"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo/Logo.png";
import DarkLogo from "@/public/logo/DarkLogo.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { LiaBarsSolid } from "react-icons/lia";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const frameworks = [
    {
      value: "bocina",
    },
    {
      value: "audifonos",
    },
    {
      value: "cargadores",
    },
    {
      value: "microfonos",
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [darkMode, setDarkMode] = useState("");

  const [fade, setFade] = useState("border-b");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30 && currentScrollY > prevScrollY) {
        setFade("-translate-y-24 duration-300");
      } else {
        setFade("duration-200");
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    const prevTheme = localStorage.getItem("theme");
    if (prevTheme === "system") {
      const colorScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setDarkMode(colorScheme);

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          const newColorScheme = event.matches ? "dark" : "light";
          setDarkMode(newColorScheme);
        });
    } else {
      setDarkMode(prevTheme || "light");
    }
  }, []);

  return (
    <>
      <div className="fixed w-full z-50 h-[60px] flex justify-between px-2 xs:px-6 sm:px-8 bg-white dark:bg-zinc-950">
        <div className="">
          <Link href="/" className="h-full flex items-center">
            <Image
              src={darkMode === "light" ? Logo : DarkLogo}
              alt="Logo"
              className="sm:w-24 sm:h-8 w-20 h-6"
            />
          </Link>
        </div>

        <div className="flex justify-end items-center w-full">
          <div className="flex">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[70px] text-xs max-xs:p-0 sm:w-[120px] sm:justify-between h-8 rounded-r-none bg-zinc-100 dark:bg-zinc-800"
                >
                  Products
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 max-sm:hidden" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Products" />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.value}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <Input
              type="search"
              className="md:w-96 xs:w-52 w-36 h-8 pr-2 border-l-0 rounded-l-none focus-visible:ring-offset-0 text-xs"
              value={value}
              placeholder="Search"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="flex items-center max-xs:text-xs dark:text-zinc-200 ml-4 gap-5 max-xs:hidden">
            <Sheet>
              <SheetTrigger>
                <AiOutlineShoppingCart className="dark:text-white w-5 h-5" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Carrito</SheetTitle>
                  <SheetDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus in, eos at, optio consequatur deserunt atque
                    architecto placeat aliquam porro perspiciatis dolorum
                    corrupti voluptas omnis quia inventore dolores excepturi
                    sit.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <VscAccount className="dark:text-white w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-5 mr-5">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center max-xs:text-xs dark:text-zinc-200 ml-4 gap-5 xs:hidden">
            <Sheet>
              <SheetTrigger>
                <LiaBarsSolid className="dark:text-white w-5 h-5 mr-2" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sidebar</SheetTitle>
                  <SheetDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus in, eos at, optio consequatur deserunt atque
                    architecto placeat aliquam porro perspiciatis dolorum
                    corrupti voluptas omnis quia inventore dolores excepturi
                    sit.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full mt-[60px] h-[40px] font-semibold flex flex-wrap items-center justify-between mx-auto px-2 xs:px-8 bg-zinc-950 dark:bg-zinc-800 transition-all border-gray-200 dark:border-zinc-700 ${fade}`}
      >
        <ul className="w-full text-center grid grid-cols-4 gap-10 font-normal text-sm text-white">
          <li>Ofertas</li>
          <li>Ofertas</li>
          <li>Ofertas</li>
          <li>Ofertas</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
