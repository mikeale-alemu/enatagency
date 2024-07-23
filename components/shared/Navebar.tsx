import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "../Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-3">
      <Link href='/'>
        <Image
          src='/hilink-logo.svg'
          alt='logo'
          width={74}
          height={29}
          className=""
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.key} 
              className="regular-15 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          )
        })}
      </ul>
      <div className="lg:flexCenter hidden">
        <Link
          href='/contact'
        >
          <Button
            type='button'
            title='Contact'
          //   icon='/user.svg'
            variant='btn_blue'
          />
        </Link>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar