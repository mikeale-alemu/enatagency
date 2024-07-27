"use client";

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

  const Service = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section id='services' className='relative 2xl:max-container'>
        <div className="absolute -top-16 w-full">
          <Image
            src='/96.png'
            alt='About Image'
            width={599}
            height={1045}
            className='object-cover object-center opacity-70 bg-cover'
          />
        </div>
        <main className='flex flex-col py-14 gap-10 xl:gap-1 pb-32 overflow-hidden lg:py-28 xl:flex-row z-10'>
          <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={ isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay:0.2, x: { type: 'spring', stiffness:60 } }}

          className="relative flex flex-col gap-7 items-start w-[598px] h-[359] -translate-x-0 -translate-y-3 left-[5%] lg:left-[140px] md:left-[7%]">
            <h1 className='regular-40'>Services</h1>
            <div className="flex flex-col w-[598px] gap-4">
              <p className='regular-18 w-[328px] xs:w-[387px] sm:w-[597px] md:w-[615px]'>
                Overseas Job Placement: We specialize in sourcing and connecting individuals with
                employment opportunities abroad. Our extensive network and expertise allow us to
                cater to various industries and positions, ensuring the right match for candidates.
              </p>
              <p className='regular-18 w-[328px] xs:w-[387px] sm:w-[597px] md:w-[615px]'>
                We provide personalized support and guidance throughout the entire recruitment
                process, ensuring satisfaction and success for individuals seeking overseas
                employment.
              </p>
              <p className='regular-18 w-[328px] xs:w-[387px] sm:w-[597px] md:w-[615px]'>
                Pre-Departure Training and Orientation: We offer comprehensive training programs
                for individuals preparing to work abroad. These programs equip candidates with the
                necessary skills, cultural awareness, and practical knowledge to adapt to their new work environments.
              </p>
            </div>
          </motion.div>
          <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }}
          animate={ isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay:0.2, x: { type: 'spring', stiffness:60 } }}
          
          className="relative flex flex-col w-[611px] z-20 right-0 left-0 sm:left-10 md:left-20 lg:left-44 xl:left-[180px]">
            <Image
              src='/51.jpeg'
              alt='camp'
              width={611}
              height={461}
              className=''
            />
          </motion.div>
        </main>
      </section>
    )
  }
  
  export default Service