import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig, siteConfig1 } from "@/config/site";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
});
import {
  FaInstagram ,
  FaFacebook,
  FaYoutube ,
  FaPinterest ,
  FaLink ,
} from "react-icons/fa";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-background-color border-b border-neutral-200">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className={clsx(
              "text-4xl text-neutral-700 lowercase",
              greatVibes.variable,
              "font-[family-name:var(--font-great-vibes)]"
            )}>
              Lamia Eid
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-8 justify-start ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-neutral-600 hover:text-neutral-900 text-sm lowercase font-normal",
                  "data-[active=true]:text-neutral-900 data-[active=true]:font-medium",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <Link 
            isExternal 
            aria-label="Instagram" 
            href={siteConfig1.links.instagram}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <FaInstagram  className="w-5 h-5" />
          </Link>
          <Link 
            isExternal 
            aria-label="Facebook" 
            href={siteConfig1.links.facebook}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <FaFacebook  className="w-5 h-5" />
          </Link>
          <Link 
            isExternal 
            aria-label="YouTube" 
            href={siteConfig1.links.youtube}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <FaYoutube  className="w-5 h-5" />
          </Link>
          <Link 
            isExternal 
            aria-label="Pinterest" 
            href={siteConfig1.links.pinterest}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <FaPinterest  className="w-5 h-5" />
          </Link>
          <Link 
            isExternal 
            aria-label="Website" 
            href={siteConfig1.links.website}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <FaLink  className="w-5 h-5" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link 
          isExternal 
          aria-label="Instagram" 
          href={siteConfig1.links.instagram}
          className="text-neutral-500"
        >
          <FaInstagram  className="w-5 h-5" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig1.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="text-neutral-700 hover:text-neutral-900 lowercase"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};