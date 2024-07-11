import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className=''>
      <div className="relative group z-20 flex flex-1 flex-col">
        <div className="w-full bg-gradient-to-t from-white to-black/70">
          <Image
            src='/heroimage1.jpg'
            alt='Hero Image'
            layout='responsive'
            width={363}
            height={284}
            className="w-screen min-h-screen mix-blend-overlay bg-cover bg-center"
          />
        </div>
        <div className="absolute w-[759px] h-[294px] gap-2 -translate-x-0 -translate-y-[50%] top-[315px] left-[4%] lg:left-[110px] md:left-[6%]">
          <h1 className='text-white bold-20 lg:bold-30'>Discover Your Next Adventure</h1>
          <h1 className="xl:max-w-[757px] xl:max-h-[757px] text-white bold-52 lg:bold-75">
            Find your <span className="text-blue-500 font-black font-serif">dream</span> job abroad
          </h1>
          <div className="max-w-5xl lg:mr-auto pr-5 md:pr-10 xl:pr-0 w-full">
            <p className="regular-18 mt-6 text-white/80 xl:max-w-[769px] xl:max-h-[89px]">
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