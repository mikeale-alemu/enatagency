import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

type FAQProp = {
    title: string;
    content: string;
}

const FAQItem = ({ title, content}: FAQProp) => {

    const [isFaq, setIsFaq] = useState(false);

  return (
    <div className=''>
      <div className="">
        <hr className="h-px my-[25px] bg-[#B3B3B3] border-0"></hr>
        <div
          onClick={() => setIsFaq(!isFaq)} 
          className="flex justify-between gap-8 sm:gap-20 cursor-pointer">
          <div className="bold-15 xs:bold-16 sm:textXl lg:bold-16 2xl:textXl">{title}</div>
          <IoIosArrowDown className={`${isFaq && "rotate-180"} my-auto duration-500 ease-in-out`} />
        </div>
      </div>
      <div className={`${isFaq ? 'block' : 'hidden'} w-[307px] xs:w-[384px] sl:w-[571px] sm:w-[611px] md:w-[693px] lg:w-[611px] 2xl:w-[693px] px-0 xs:px-1 ms:px-5 py-[10px] regular-8 xs:regular-10 sl:regular-12 sm:regular-14 md:regular-15`}>{content}</div>
    </div>
  )
}

export default FAQItem