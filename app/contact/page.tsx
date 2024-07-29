import { FaTelegram } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'
import { FaFacebookSquare } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import GoogleMapLocation from '@/components/GoogleMapLocation'
import Image from 'next/image'
import { GrMapLocation } from 'react-icons/gr'
import { MdOutlineMail } from 'react-icons/md'
import { GiAlarmClock } from 'react-icons/gi'
import Link from 'next/link'
import { AiFillTikTok, AiTwotoneMail } from 'react-icons/ai'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <section id='contact' className='2xl:max-container mb-0 md:mb-2 lg:mb-4'>
      <div className="pb-12">
        <main className="relative">
          <div className="w-full bg-gradient-to-t from-white to-black/30">
            <Image
              src='/photo3.jpg'
              alt='demon'
              layout="responsive"
              objectFit="cover"
              width={600}
              height={400}
              className="mix-blend-overlay"
            />
          </div>
          <div className="padding-container -translate-y-[90%] xs:-translate-y-[110%] sm:-translate-y-[130%] md:-translate-y-[210%] lg:-translate-y-[250%] z-20 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
              <h1 className="text-center text-2xl lg:text-6xl md:4xl font-serif font-bold text-blue-900">
                Contact Us
              </h1>
              <div className="content-[''] bg-blue-500 h-[3px] w-[80%] left-0 bottom-0 rounded-xl duration-300"></div>
            </div>
            <div className="mt-3 sm:mt-6">
              <p className="text-black text-center">
                Market Opportunities and Trends for Foreign Employment Services in Ethiopia
              </p>
            </div>
          </div> 
        </main>
        <Contact />
      </div>
      <div className="max-container">
        <GoogleMapLocation />
      </div>
    </section>
  )
}

export default page;