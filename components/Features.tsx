
import { FEATURES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface CampProps {
  image: string;
  title: string;
  description: string;
}

const CampSite = ({ image, title, description }: CampProps) => {
  return (
    <div className='relative group cursor-pointer'>
      <div className="h-[408px] w-[284px] overflow-hidden rounded-[20px]">
        <Image
          src={image}
          alt={`${title}'s image`}
          layout="fit"
          width={304}
          height={418}
          className="h-[408px] w-full bg-cover bg-center bg-no-repeat object-fill transform group-hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full ">
        <h3 className='text-black regular-16'>{title}</h3>
      </div>
      <div className="absolute min-w-[284px]  translate-y-0 group-hover:-translate-y-[216px] transition-all left-0 w-full bg-black
        bg-opacity-70 py-7 pb-10 px-6  duration-300 ease-in-out rounded-b-[20px] overflow-hidden">
        <h3 className="regular-16 mb-7 text-white">{title}</h3>
        <p className="w-[210px] regular-14 mb-10 text-white">{description}</p>
        <Link href="#" className="absolute right-7 bold-14 text-white">
          More
        </Link>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="2xl:max-container relative flex flex-col">
      <h2 className="regular-40 mb-14 text-center">Featured Destinations</h2>
      <div className="hide-scrollbar px-10 flex h-[408px] w-full items-start justify-start gap-5 overflow-x-auto overflow-y-hidden">
        {FEATURES.map((items) => {
          return (
            <CampSite 
              image={items.image}
              title={items.title}
              description={items.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Features
