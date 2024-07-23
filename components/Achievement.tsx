import { Achievements } from '@/constants'
import Image from 'next/image'

type AchievementProp = {
  icon: string,
  numbers: number,
  title: string,
}

const AchievementItem = ({ icon, numbers, title }: AchievementProp) => {
  return (
    <div className="">
      <div className="relative flex flex-col items-center gap-3 bg-gradient-to-t from-blue-800/70 to-blue-400/50 w-[231px] h-[259px] sm:w-[253px] sm:h-[291px] xl:rounded-5xl xl:px-16 overflow-hidden rounded-3xl">
        <div className="sm:mt-11 mt-9">
          <Image
            src={icon}
            alt={title}
            width={74}
            height={24}
            className=''
          />
        </div>
        <h1 className="text-white sm:bold-36 bold-32">+ {numbers}</h1>
        <p className='bold-18 sm:bold-20 text-center text-white'>{title}</p>
      </div>
    </div>
  )
}

const Achievement = () => {
  return (
    <section className="realtive flexCenter flex-col mb-20">
      <div className="flexCenter max-container relative w-full bg-gradient-to-t from-black/50 to-black/50 2xl:rounded-5xl">
        <Image 
          src="/photo2.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full h-[32rem] bg-center mix-blend-overlay object-cover 2xl:rounded-5xl"
        />
      </div>
      <div className="absolute flex flex-col gap-4 md:gap-6 -translate-y-64 lg:-translate-y-36 items-center">
        <h1 className="bold-40 lg:bold-60 text-center text-white w-96 md:w-[700px] lg:w-[1100px]">We are the best Foreign Employment agency to improve your deals</h1>
        <p className="bold-30 md:bold-32 lg:bold-32 text-center text-blue-300 w-96 md:w-[700px] lg:w-[900px]">We work directly for our clients and client's interests first.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 -mt-28 gap-10">
        {Achievements.map((Item) => (
          <AchievementItem key={Item.title} {...Item} />
        ))}
      </div>
    </section>
  )
}

export default Achievement