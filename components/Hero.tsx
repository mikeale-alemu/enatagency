'use client';

import { sliderHome } from '@/constants';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Hero = ({ autoSlide= false }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const privSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const nextIndex = isFirstIndex ? sliderHome.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  }

  const nextSlide = () => {
    const isLastIndex = currentIndex === sliderHome.length - 1;
    const nextIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  useEffect(() => {
    if (autoSlide) {
    const slideInterval = setInterval(nextSlide, 6000)
    return () => clearInterval(slideInterval);
    }
  }, [autoSlide, currentIndex]);

  return (
    <section className=''>
      <div className="relative group z-20 flex flex-1 flex-col">
        {/* <div className="w-full bg-gradient-to-t from-white to-black/70">
          <Image
            src='/heroimage1.jpg'
            alt='Hero Image'
            layout='responsive'
            width={363}
            height={284}
            className="w-screen min-h-screen mix-blend-overlay bg-cover bg-center"
          />from-black/70 to-black/40
        </div> */}
        <div className="w-full bg-gradient-to-t from-black/70 to-black/40">
          <Image
            src={`${sliderHome[currentIndex].url}`}
            alt='home image'
            layout='responsive'
            width={363}
            height={284}
            className="w-full max-h-screen mix-blend-overlay"
          />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 md:right-6 sm:right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 md:left-6 sm:left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={privSlide} size={30} />
        </div>
        <div className="absolute bottom-16 right-0 left-0">
          <div className="flex flex-row items-center justify-center gap-3">
            {sliderHome.map((_, i) => (
              <div key={i} className={`{transition-all w-2 h-2 bg-white rounded-full ${ currentIndex === i ? 'p-1' : "bg-opacity-50" }`} />
            ))}
          </div>
        </div>
        <div className="absolute w-[759px] h-[294px] gap-2 -translate-x-0 -translate-y-[50%] top-52 sm:top-60 md:top-72 xl:top-[315px] left-[6%] lg:left-[110px] md:left-[6%]">
          <h1 className='text-white bold-18 md:bold-20 lg:bold-30 font-serif '>Discover Your Next Adventure</h1>
          <h1 className="w-[354px] sm:w-[435px] md:w-[487px] lg:w-[642px] xl:w-[737px] text-white bold-40 sm:bold-52 md:bold-60 lg:bold-75">
            Find your <span className="text-blue-600 font-black font-serif">dream</span> job abroad
          </h1>
          <div className="max-w-5xl lg:mr-auto pr-5 md:pr-10 xl:pr-0 w-full">
            <p className="regular-14 md:regular-18 font-serif mt-6 text-white/80 w-[446px] sm:w-[579px] md:w-[687px] lg:w-[769px] xl:max-h-[89px]">
              The Ethiopian Labor Market Information System empowers individuals, businesses, and nations by connecting skilled Ethiopian workers with domestic and
              global employment opportunities, fostering economic growth and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero