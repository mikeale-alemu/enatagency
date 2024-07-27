'use client';

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center justify-between gap-5 list-none lg:flex-row lg:gap-8">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.key} className={`relative navbar flexCenter cursor-pointer whitespace-nowrap font-serif`}>
            <Link href={link.href} className={`${
              isActive && 'text-gray-900 font-bold tracking-[1px]'
              } text-gray-400`}>{link.label}</Link> 
          </li>
        )
      })}
    </nav>
  )
}

export default NavItems;