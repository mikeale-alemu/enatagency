import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='relative'>
      <div className="absolute left-[905px] -top-16 w-full">
        <Image
          src='/9267.png'
          alt='About Image'
          width={599}
          height={1045}
          className='object-cover object-center bg-cover opacity-70'
        />
      </div>
      <main className='flex flex-col py-10 pb-32 gap-2 overflow-hidden lg:py-20 xl:flex-row z-10'>
        <div className="relative z-20 flex flex-col w-[611px]">
          <Image
            src='/Frame-1.png'
            alt='about image'
            width={611}
            height={461}
            className=''
          />
        </div>
        <div className="relative flex flex-col gap-7 items-start w-[598px] h-[359] -translate-x-0 left-[4%] lg:left-[110px] md:left-[6%]">
          <h1 className='regular-40'>About Us</h1>
          <div className="flex flex-col w-[598px] gap-4">
            <p className='regular-20'>
              The Service-Driven Approach (SDA) is focused on services as primary units of value creation, design, development and
              operation.
            </p>
            <p className='regular-20'>
              Generation of data in accordance with an AI system that can forecast future demands for human resources in many fields.
            </p>
            <p className='regular-20'>
              A comprehensive Platform integrating both data and services driven approaches.
            </p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default About