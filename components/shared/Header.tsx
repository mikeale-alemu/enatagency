'use client';

import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import Button from "../Button"
import { usePathname } from "next/navigation"

const Header = () => {

  const pathname = usePathname();

  return (
    <main className="max-container py-3">
      <div className="flexBetween padding-container relative z-30">
        <Link href="/">
          <Image
            src='/enatlogo.svg'
            alt='logo'
            height={29}
            width={124}
            className=""
          />
        </Link>
        <nav className="hidden h-full lg:flex">
          <NavItems />
        </nav>
          <div className="translate-x-16 hidden h-full lg:flex">
            <Link
              href='/contact'
              className="hover:scale-105 transition ease-in-out duration-300"
            >
              <Button
                type='button'
                title='Contact'
                // icon='/user.svg'
                variant={`${ pathname === "/contact" && 'bg-black' || 'bg-blue-400'} border-blue-700 px-6 py-2 text-white shadow-lg hover:shadow-blue-400 hover:bg-blue-500 transition ease-in-out duration-300`}
              />
            </Link>
          </div>
        <div className="flex items-center gap-7 mr-2">
          {/* <div className="lg:hidden">
            <Link
              href='/contact'
              className="hover:scale-105 transition ease-in-out duration-300"
            >
              <Button
                type='button'
                title='Contact'
              // icon='/user.svg'
                variant='btn_blue'
              />
            </Link>
          </div> */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header;