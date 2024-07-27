"use client";

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import React, { createContext, useRef } from 'react';

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className='relative 2xl:max-container' id='about'>
      <div className="absolute left-[715px] -top-16 w-full">
        <Image
          src='/9267.png'
          alt='About Image'
          width={599}
          height={1045}
          className='object-cover object-center bg-cover opacity-80'
        />
      </div>
      <main className='relative flex flex-col py-10 pb-32 gap-10 xl:gap-2  overflow-hidden lg:py-20 xl:flex-row z-10'>
        <motion.div
        ref={ref} 
        initial={{ x: -100, opacity: 0 }}
        animate={ isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay:0.2, x: { type: 'spring', stiffness:60 } }}
        
        className="relative z-20 flex flex-col items-end w-[611px]">
          <Image
            src='/Frame-1.png'
            alt='about image'
            width={611}
            height={461}
            className='bg-cover bg-no-repeat bg-[50%]'
          />
        </motion.div>
        <motion.div
        ref={ref} 
        initial={{ x: 100, opacity: 0 }}
        animate={ isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay:0.2, x: { type: 'spring', stiffness:60 } }}

        className="relative flex flex-col gap-6 items-start -translate-x-0 -translate-y-3 left-[4%] lg:left-[110px]
          md:left-[6%] w-[598px]">
          <h1 className='regular-40'>About Us</h1>
          <div className="flex flex-col w-[598px] gap-4">
            <p className='regular-18 w-[328px] xs:w-[387px] sm:w-[597px]'>
              ENAT Foreign Employment Agent PLC is a leading overseas recruitment agency based
              in Addis Ababa, Ethiopia, renowned for its exceptional services in connecting
              qualified candidates with suitable job opportunities abroad. With a highly skilled team of professionals, we have established ourselves as a trusted name in the
              industry.
            </p>
            <p className='regular-18 w-[328px] xs:w-[387px] sm:w-[597px]'>
              One of our core strengths lies in our commitment to excellence. We prioritize
              delivering high-quality services to both our clients and candidates.  
            </p>
            <p className='regular-18 w-[328px] xs:w-[387px] sm:w-[597px]'>
              As a recognized agency, we specialize in providing Ethiopian housemaids to Saudi
              Arabia, Dubai, and Jordan, meeting the demand for domestic help in these regions.
              Furthermore, we have established agreements with Jordanian companies to supply
              skilled and semi-skilled professionals, thus contributing to the development of the
              workforce in Jordan.
            </p>
          </div>
        </motion.div>
      </main>
    </section>
  )
}

export default About