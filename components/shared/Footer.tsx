import { FOOTER_CONTACT_INFO, FOOTER_LINK, FOOTER_LINK1, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="2xl:max-container">
      <section className='relative flex flex-1 flex-col'>
        <div className="flex">
          <Image
            src='/96.png'
            alt="logo"
            width={340}
            height={200}
            className='w-[50%] h-[670px] translate-y-10 mix-blend-overlay bg-cover bg-center'
          />
          <Image
            src='/9267.png'
            alt="logo"
            width={340}
            height={200}
            className='w-[50%] h-[670px] translate-y-10 mix-blend-overlay bg-cover bg-center'
          />
        </div>
        <main className='absolute translate-y-72 overflow-hidden padding-container max-container flex w-full flex-col gap-14'>
          <div className="flex flex-col items-start justify-center gap-[5%] md:flex-row">
            <Link href="/" className="mb-10">
              <Image src="enatlogo.svg" alt="logo" width={184} height={29}/>
            </Link>

            <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
              {FOOTER_LINK.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {columns.links.map((items) => (
                      <div key={items.value} className="">
                        <Link href={items.link} className=''>
                          <li className="hover:scale-105 transition ease-in-out hover:text-blue-600 duration-500">{items.value}</li>
                        </Link>
                      </div>
                    ))}
                  </ul>
                </FooterColumn>
              ))}

              {FOOTER_LINK1.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {columns.links.map((items) => (
                      <div key={items.value} className="flex flex-row items-center gap-3 hover:text-blue-600 hover:scale-105 transition ease-in-out duration-500">
                        <div className="flex flex-row items-center">
                          <Image src={items.flag} alt="logo" width={23} height={23}/>
                        </div>
                        <p className=''>{items.value}</p>
                      </div>
                    ))}
                  </ul>
                </FooterColumn>
              ))}

              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <div
                      key={link.label}
                      className="flex gap-4 flex-row items-center"
                    >
                      <div className="p-3 bg-blue-200 rounded-full">
                        <Image src={link.icon} alt="logo" width={18} height={18} />
                      </div>
                      <div className="flex gap-1 flex-col">
                        <p className="text-gray-50 whitespace-nowrap">
                          {link.label}
                        </p>
                        <Link href="/" className="medium-14 whitespace-nowrap text-blue-800">
                          {link.value}
                        </Link>
                      </div>
                    </div>
                  ))}
                </FooterColumn>
              </div>

              <div className="flex flex-col gap-5">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="regular-14 flex gap-4 text-gray-30">
                    {SOCIALS.links.map((link) => (
                      <Link href={`${link.href}`} key={link.icon}>
                        <Image src={link.icon} alt="logo" width={24} height={24} className='hover:scale-105 transition ease-in-out duration-300' />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>

          <div className="border bg-gray-20" />
          <p className="regular-14 w-full text-center text-gray-30">&copy; 2024 Enat Employment Agency | All rights reserved</p>          
        </main>
      </section>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer