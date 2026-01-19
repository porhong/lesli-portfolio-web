import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "About Me", href: "/#about" },
  { label: "Products", href: "/#products" },
];

export function TopHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-border/40 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 lg:px-24">
        <Link
          href="/"
        >
          <Image src="/svg/logo.svg" alt="Kimhor's Portfolio" width={225} height={30} />
        </Link>

        <NavigationMenu viewport={false} className="w-auto max-w-none flex-none">
          <NavigationMenuList className="gap-3">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Button
                    asChild
                    variant={item.active ? "outline" : "ghost"}
                    size="lg"
                    radius="full"
                    title={item.label}
                    className={cn("text-[16px] leading-6 font-normal rounded-full! text-accent-foreground", item.active && "border border-foreground")}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          variant="mono"
          radius="full"
          size="xl"
          className="px-8 py-3 text-[16px] leading-6 font-normal bg-foreground"
        >
          <Link href="/#contact">Keep In Touch</Link>
        </Button>
      </div>
    </header>
  );
}

