import { Achievements } from '@/constants'
import Image from 'next/image'

type AchievementProp = {
  icon: string,
  numbers: number,
  title: string,
}

const AchievementItem = ({ icon, numbers, title }: AchievementProp) => {
  return (
    <div className=""> {/* bg-gradient-to-t from-black/20 to-black/20 */}
      <div className="relative flex flex-col items-center gap-1 sm:gap-3 bg-black/10 bg-opacity-30 backdrop-blur-md shadow-md  w-[149px] h-[187px] xs:w-[186px] xs:h-[219px] sm:w-[253px] sm:h-[291px] xl:rounded-5xl xl:px-16 overflow-hidden rounded-3xl">
        <div className="sm:mt-11 mt-9">
          <Image
            src={icon}
            alt={title}
            width={74}
            height={24}
            className='w-[48px] sm:w-[74px]'
          />
        </div>
        <h1 className="text-white bold-20 xs:bold-32 sm:bold-36 md:bold-40">+{numbers}</h1>
        <p className='bold-14 xs:bold-18 md:bold-20 text-center text-white'>{title}</p>
      </div>
    </div>
  )
}

const Achievement = () => {
  return (
    <section className="realtive flexCenter flex-col mb-20">
      <div className="flexCenter max-container relative w-full bg-gradient-to-t from-blue-700/40 to-blue-700/40 2xl:rounded-5xl">
        <Image 
          src="/photo2.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full h-[32rem] bg-center mix-blend-overlay object-cover 2xl:rounded-5xl"
        />
      </div>
      <div className="absolute flex flex-col gap-4 md:gap-6 -translate-y-[187px] xs:-translate-y-[217px] sm:-translate-y-64 lg:-translate-y-36 items-center">
        <h1 className="bold-36 sm:bold-40 lg:bold-60 text-center text-white xs:w-96 sm:w-[564px] md:w-[700px] lg:w-[1100px]">We are the best Foreign Employment agency to improve your deals</h1>
        <p className="bold-30 md:bold-32 lg:bold-32 text-center text-blue-300 w-80 xs:w-96 sm:w-[564px] md:w-[700px] lg:w-[900px]">We work directly for our clients and client's interests first.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 -mt-20 md:-mt-28 gap-3 xs:gap-5 sm:gap-7 md:gap-10">
        {Achievements.map((Item) => (
          <AchievementItem key={Item.title} {...Item} />
        ))}
      </div>
    </section>
  )
}

export default Achievement