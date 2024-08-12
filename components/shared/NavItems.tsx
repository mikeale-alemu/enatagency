'use client';

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Button from "../Button";

const NavItems = () => {
  
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center justify-between gap-5 list-none xl:flex-row xl:gap-1">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.key} className={`relative navbar flexCenter cursor-pointer whitespace-nowrap`}>
            <Link href={link.href} className={`${
              isActive && 'text-gray-900 font-bold tracking-[1px]'
              } text-gray-400 cursor-pointer`}>{link.label}</Link> 
          </li>
        )
      })}
      <li className="flex xl:hidden translate-x-6">
        <Link
          href='https://wa.me/251983074715'
          className="hover:scale-105 transition ease-in-out duration-300"
        >
          <Button
            type='button'
            title='Chat with us'
            icon='/whatsapp.svg'
            variant={`${ pathname === "#contact" && 'bg-black' || 'bg-blue-400'} cursor-pointer border-blue-700 px-6 py-2 text-white shadow-lg hover:shadow-blue-400 hover:bg-blue-500 transition ease-in-out duration-300`}
          />
        </Link>
        
      </li>
    </nav>
  )
}

export default NavItems;