import { FaInstagram, FaMapLocation, FaTelegram, FaTwitter } from 'react-icons/fa6'
import { PiTelegramLogoLight } from 'react-icons/pi'
import { FiPhoneCall } from 'react-icons/fi'
import { CiClock2 } from 'react-icons/ci'
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

const page = () => {
  return (
    <section id='contact' className='2xl:max-container mb-0 md:mb-2 lg:mb-4'>
      <div className="pb-12">
        <main className="relative">
          <div className="w-full bg-gradient-to-t from-white to-black/30">
            <Image
              src='/boat.png'
              alt='demon'
              layout="responsive"
              objectFit="cover"
              width={600}
              height={400}
              className="mix-blend-overlay"
            />
          </div>
          <div className="2xl:max-container absolute left-2 sm:left-14 md:left-24 lg:left-64 top-10 lg:top-40 md:20 z-20 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-center text-2xl lg:text-6xl md:4xl font-serif font-bold text-white">
                Contact Us
              </h1>
              <div className="content-[''] bg-blue-500 h-[3px] w-[80%] left-0 bottom-0 rounded-xl duration-300"></div>
            </div>
            <div className="w-[510px] md:w-[730px] mt-14">
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque corrupti laboriosam nulla 
                repudiandae, sint reiciendis eligendi et ea cupiditate architecto!
              </p>
            </div>
          </div> 
        </main>
        <section className="py-12 lg:py-16 xl:py-20">
          <main className="wrapper px-6 md:px-10">
            <div className="grid items-start gap-12 lg:grid-cols-2 xl:gap-20">
              <div className="space-y-4">
                <div className="space-y-4 mb-12">
                  <div className="flex flex-col space-y-3 mb-8">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Get in touch</h1>
                    <div className="content-[''] bg-blue-500 h-[3px] w-[30%] left-0 bottom-0 rounded-xl duration-300"></div>
                  </div>
                  <p className="text-gray-800 md:text-xl">
                    We're here to help. Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 grid-rows-2 gap-6 sm:grid-cols-2">
                    <div className="space-y-2 flex flex-row items-center justify-center gap-4">
                      <GrMapLocation className="text-6xl transform transition duration-300 ease-in-out text-blue-600" />
                      <div className="space-y-1">
                        <span className="block font-medium text-black text-lg font-serif">LOCATION</span>
                        <p className="text-sm text-gray-700 leading-loose">
                          22 hailegebresilassie st. , Addis Ababa, Ethiopia
                        </p>
                      </div>  
                    </div>
                    <div className="space-y-2 flex flex-row items-center justify-start gap-4">
                      <MdOutlineMail className="text-4xl transform transition duration-300 ease-in-out text-blue-600" />
                      <div className="space-y-1">
                        <span className="block font-medium text-black text-lg font-serif">EMAIL</span>
                        <p className="text-sm text-gray-700 leading-loose">info@enatemploymentagency.com</p>
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-row items-center justify-start gap-4">
                      <FiPhoneCall className="text-4xl transform transition duration-300 ease-in-out text-blue-600" />
                      <div className="space-y-1">
                        <span className="block font-medium text-black text-lg font-serif">PHONE</span>
                        <p className="text-sm text-gray-700 leading-loose">+251-983-074-715</p>
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-row items-center justify-start gap-4">
                      <GiAlarmClock className="text-4xl transform transition duration-300 ease-in-out text-blue-600" />
                      <div className="space-y-1">
                        <span className="block font-medium text-black text-lg font-serif">OPEN HOUR</span>
                        <p className="text-sm text-gray-700 leading-loose">
                          Mon-Fri: 9:00 AM - 5:00 PM Sat-Sun: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-7">
                  <div className="border-t"></div>
                  <div className="flex flex-row items-center justify-between">
                    <h1 className="text-xl font-bold tracking-tighter sm:text-2xl text-black">OUR SOCIAL MEDIA</h1>
                    <div className="flex flex-row items-center justify-center gap-4 md:gap-8 text-3xl">
                      <RiInstagramFill className="transform hover:scale-105 transition duration-300 ease-in-out text-blue-600 hover:text-gray-400" />
                      {/* <FaInstagram className="transform hover:scale-105 transition duration-300 ease-in-out text-blue-600 hover:text-gray-400" /> */}
                      <FaFacebookSquare className="transform hover:scale-105 transition duration-300 ease-in-out text-blue-600 hover:text-gray-400" />
                      <FaTwitter className="transform hover:scale-105 transition duration-300 ease-in-out text-blue-600 hover:text-gray-400" />
                      <FaTelegram className="transform hover:scale-105 transition duration-300 ease-in-out text-blue-600 hover:text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-black">YOUR DETAILS</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-black">First name*</Label>
                    <Input id="first-name" placeholder="Your Name" className="bg-gray-300 border border-gray-300 text-black" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-address" className="text-black">Email Address*</Label>
                    <Input id="eamil-address" placeholder="email@yourmail.com" type="email" className="bg-gray-300 border border-gray-300 text-black" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black">Subject*</Label>
                  <Input id="subject" placeholder="Subject" className="bg-gray-300 border border-gray-300 text-black" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">Comments/Questions*</Label>
                  <Textarea className="min-h-[150px] resize-y bg-gray-300 border border-gray-300 text-black" id="message" placeholder="Your Message" />
                </div>
                <div className="w-full pt-4">
                  <Button className="px-12 py-6 text-white bg-blue-600 hover:bg-blue-800">Submit Message</Button>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
      <div className="max-container">
        <GoogleMapLocation />
      </div>
    </section>
  )
}

export default page;