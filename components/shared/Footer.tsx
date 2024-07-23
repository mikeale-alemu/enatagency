import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="2xl:max-container">
      <section className='relative flex flex-1 flex-col'>
        <div className="flex bg-gradient-to-b from-white/50 to-white/20">
          <Image
            src='/96.png'
            alt="logo"
            width={340}
            height={200}
            className='w-[50%] h-[670px] opacity-90 translate-y-10 mix-blend-overlay bg-cover bg-center'
          />
          <Image
            src='/9267.png'
            alt="logo"
            width={340}
            height={200}
            className='w-[50%] h-[670px] opacity-90 translate-y-10 mix-blend-overlay bg-cover bg-center'
          />
        </div>
        <main className='absolute translate-y-64 overflow-hidden padding-container max-container flex w-full flex-col gap-14'>
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <Link href="/" className="mb-10">
              <Image src="hilink-logo.svg" alt="logo" width={74} height={29}/>
            </Link>

            <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
              {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {columns.links.map((link) => (
                      <Link href="/" key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}

              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                      href="/"
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">
                        {link.label}:
                      </p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </FooterColumn>
              </div>

              <div className="flex flex-col gap-5">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="regular-14 flex gap-4 text-gray-30">
                    {SOCIALS.links.map((link) => (
                      <Link href="/" key={link}>
                        <Image src={link} alt="logo" width={24} height={24} />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>

          <div className="border bg-gray-20" />
          <p className="regular-14 w-full text-center text-gray-30">2024 Enat Employment Agency | All rights reserved</p>          
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