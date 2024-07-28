import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import Button from "../Button"

const Header = () => {
  return (
    <main className="max-container py-3">
      <div className="flexBetween padding-container lg:py-3 relative z-30">
        <Link href="/">
          <Image
            src='/hilink-logo.svg'
            alt='logo'
            height={29}
            width={74}
            className=""
          />
        </Link>
        <nav className="hidden h-full lg:flexCenter">
          <NavItems />
          <div className="absolute right-14">
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
          </div>
        </nav>
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