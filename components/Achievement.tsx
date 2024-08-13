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
      <div className="relative flex flex-col items-center gap-3 bg-[#007AFF26] border-[2px] border-white/40 backdrop-blur-3xl backdrop-brightness-200 shadow-md w-[213px] h-[261px] xs:w-[253px] xs:h-[291px] xl:rounded-5xl xl:px-16 overflow-hidden rounded-3xl">
        <div className="mt-11">
          <Image
            src={icon}
            alt={title}
            width={74}
            height={24}
            className=''
          />
        </div>
        <h1 className="text-white bold-36 xs:bold-40">+{numbers}</h1>
        <p className='bold-16 xs:bold-20 text-center text-white'>{title}</p>
      </div>
    </div>
  )
}

const Achievement = () => {
  return (
    <section className="realtive flexCenter flex-col mb-20">
      <div className="flexCenter max-container relative w-full bg-gradient-to-t from-black/40 to-black/40 2xl:rounded-5xl">
        <Image 
          src="/photo2.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full h-[32rem] bg-center mix-blend-overlay object-cover 2xl:rounded-5xl"
        />
      </div>
      <div className="absolute flex flex-col gap-4 md:gap-6 -translate-y-[147px] sm:-translate-y-36 lg:-translate-y-36 items-center">
        <h1 className="bold-36 sm:bold-40 lg:bold-60 text-center text-white xs:w-96 sm:w-[564px] md:w-[700px] lg:w-[1100px]">We are the best Foreign Employment agency to improve your deals</h1>
        <p className="bold-30 md:bold-32 lg:bold-32 text-center text-blue-300 w-80 xs:w-96 sm:w-[564px] md:w-[700px] lg:w-[900px]">We work directly for our clients and client's interests first.</p>
      </div>
      {/* grid-cols-2 lg:grid-cols-4 */}
      <div className="2xl:max-container xl:center-items flex flex-row -mt-28 xs:-mt-36 lg:-mt-[182px] gap-3 hide-scrollbar pl-[6%] xl:pl-[0%] w-full xs:gap-5 sm:gap-7 md:gap-10 overflow-x-auto overflow-y-hidden">
        {Achievements.map((Item) => (
          <AchievementItem key={Item.title} {...Item} />
        ))}
      </div>
    </section>
  )
}

export default Achievement