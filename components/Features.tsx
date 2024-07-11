import { FEATURES } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Features = () => {
  return (
    <section className="flex flex-col py-4 ">
      <h2 className="regular-40 mb-14 text-center">Featured Destinations</h2>
      <div className="relative pt-2 pb-6 overflow-x-auto">
      {/* overflow-x-scroll scroll whitespace-nowrap scroll-smooth */}
        <div className="flex items-center justify-center gap-6 w-full hide-scrollbar overflow-x-auto"> 
          {FEATURES.map((expert) => {
            return (
              <div key={expert.id} className="relative group w-[284px] h-[408px] cursor-pointer overflow-hidden rounded-2xl">
                <Image
                  src={expert.image}
                  alt={`${expert.title}'s image`}
                  layout="responsive"
                  width={337}
                  height={418}
                  className="rounded-lg bg-cover object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white  px-4 py-2 rounded-full ">
                  <h3 className='text-black regular-16'>{expert.title}</h3>
                </div>
                <div className="absolute bottom-0 translate-y-[218px] group-hover:translate-y-0 transition-all left-0 w-full bg-black
                  bg-opacity-70 text-white py-7 pb-10 px-6 rounded-b-lg  duration-300 ease-in-out">
                  <h3 className="regular-16 mb-7">{expert.title}</h3>
                  <p className="w-[210px] regular-14 mb-10">{expert.description}</p>
                  <Link href="#" className="absolute right-7 bold-14">
                    More
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features