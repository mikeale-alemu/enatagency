import Image from 'next/image'

type AchievementProp = {
  icon: string,
  numbers: number,
  title: string,
}

const AchievementItem = ({ icon, numbers, title }: AchievementProp) => {
  return (
    <div className="">
      <div className="bg-blue-500 p-8 lg:max-w-[300px] xl:rounded-5xl xl:px-16 xl:py-20 relative overflow-hidden rounded-3xl">
        <div className="">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className=''
          />
        </div>
        <h1 className="text-white text-2xl font-bold">{numbers}</h1>
        <p className=''>{title}</p>
      </div>
    </div>
  )
}

const Achievement = () => {
  return (
    <section className="flexCenter flex-col mb-20">
      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full h-[32rem] object-cover object-center 2xl:rounded-5xl"
        />
      </div>
      <div className="">
        
      </div>
    </section>
  )
}

export default Achievement