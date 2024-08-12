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
import Link from "next/link"
import Button from "../Button"

const MobileNav = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="align-middle xl:hidden">
          <Image
            src='/menu.svg'
            alt='menu'
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white xl:hidden ">
          <Image
            src='/enatlogo.svg'
            alt='logo'
            height={27}
            width={184}
          />
          <Separator className="border border-gray-100 mb-6" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav