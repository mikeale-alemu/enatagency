'use client';

import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import Button from "../Button"
import { usePathname } from "next/navigation"

const Header = () => {

  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={`fixed py-3 z-50 w-full ${isScrolled ? 'bg-white shadow-md border-b-[1px] border-b-blue-300' : 'bg-transparent'}`}>
      <div className="flexBetween padding-container relative z-30">
        <Link href="/">
          <Image
            src='/enatlogo.svg'
            alt='logo'
            height={29}
            width={184}
            className=""
          />
        </Link>
        <nav className="hidden h-full xl:flex">
          <NavItems />
        </nav>
          <div className="translate-x-16 hidden h-full xl:flex">
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
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header;