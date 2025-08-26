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
import { IoMenu } from "react-icons/io5";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaLink,
} from "react-icons/fa";

export const Navbar = () => {
  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky" 
      className="bg-background-color border-b border-neutral-200"
    >
      {/* Left Content - Brand and Nav Items */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className={clsx(
              "text-2xl sm:text-3xl lg:text-4xl text-neutral-700 lowercase",
              greatVibes.variable,
              "font-[family-name:var(--font-great-vibes)]"
            )}>
              Lamia Eid
            </p>
          </NextLink>
        </NavbarBrand>
        
        {/* Desktop Navigation - Hidden below 770px (custom breakpoint) */}
        <ul className="hidden min-[770px]:flex gap-6 xl:gap-8 justify-start ml-4 xl:ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-neutral-600 hover:text-neutral-900 text-sm lowercase font-normal transition-colors",
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

      {/* Desktop Right Content - All Social Icons - Hidden below 770px */}
      <NavbarContent
        className="hidden min-[770px]:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-2 lg:gap-3">
          <Link 
            isExternal 
            aria-label="Instagram" 
            href={siteConfig1.links.instagram}
            className="text-neutral-500 hover:text-neutral-700 transition-colors p-1"
          >
            <FaInstagram className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link 
            isExternal 
            aria-label="Facebook" 
            href={siteConfig1.links.facebook}
            className="text-neutral-500 hover:text-neutral-700 transition-colors p-1"
          >
            <FaFacebook className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link 
            isExternal 
            aria-label="YouTube" 
            href={siteConfig1.links.youtube}
            className="text-neutral-500 hover:text-neutral-700 transition-colors p-1"
          >
            <FaYoutube className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link 
            isExternal 
            aria-label="Pinterest" 
            href={siteConfig1.links.pinterest}
            className="text-neutral-500 hover:text-neutral-700 transition-colors p-1"
          >
            <FaPinterest className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link 
            isExternal 
            aria-label="Website" 
            href={siteConfig1.links.website}
            className="text-neutral-500 hover:text-neutral-700 transition-colors p-1"
          >
            <FaLink className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Content - Shows below 770px */}
      <NavbarContent className="max-[769px]:flex hidden basis-1 pl-4" justify="end">
        <Link 
          isExternal 
          aria-label="Instagram" 
          href={siteConfig1.links.instagram}
          className="text-neutral-500 hover:text-neutral-700 transition-colors p-1"
        >
          <FaInstagram className="w-4 h-4" />
        </Link>
        <NavbarMenuToggle className="ml-2 text-neutral-700" />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {siteConfig1.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  className="text-neutral-700 hover:text-neutral-900 lowercase transition-colors"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
          
          {/* Social Icons in Mobile Menu */}
          <div className="border-t border-neutral-200 pt-4 mt-4">
            <p className="text-sm text-neutral-600 mb-3 lowercase">follow me</p>
            <div className="flex gap-4">
              <Link 
                isExternal 
                aria-label="Instagram" 
                href={siteConfig1.links.instagram}
                className="text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link 
                isExternal 
                aria-label="Facebook" 
                href={siteConfig1.links.facebook}
                className="text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link 
                isExternal 
                aria-label="YouTube" 
                href={siteConfig1.links.youtube}
                className="text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <FaYoutube className="w-6 h-6" />
              </Link>
              <Link 
                isExternal 
                aria-label="Pinterest" 
                href={siteConfig1.links.pinterest}
                className="text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <FaPinterest className="w-6 h-6" />
              </Link>
              <Link 
                isExternal 
                aria-label="Website" 
                href={siteConfig1.links.website}
                className="text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <FaLink className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};