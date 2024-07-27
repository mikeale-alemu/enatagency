'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import Image from "next/image"
import NavItems from "./NavItems"

const MobileNav = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="align-middle lg:hidden">
          <Image
            src='/menu.svg'
            alt='menu'
            height={32}
            width={32}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white lg:hidden ">
          <Image
            src='/hilink-logo.svg'
            alt='logo'
            height={27}
            width={42}
          />
          <Separator className="border border-gray-100 mb-6" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav