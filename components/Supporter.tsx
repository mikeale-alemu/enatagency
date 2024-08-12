import { FaApple } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { SiCocacola } from "react-icons/si";
import { SiAmazonfiretv } from "react-icons/si";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { SiVodafone } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { SiFord } from "react-icons/si";
import Image from "next/image";

const Supporter = () => {
  return (
    <main className="w-full my-16 py-8">
      <div className="flex flex-col items-center gap-3 md:gap-4 ">
        <h1 className="flex items-center justify-center bold-25 xs:bold-30 sm:regular-40 mb-8">Partner Network</h1>
        <div className="flex gap-10 lg:gap-14 items-center justify-center 2xl:max-container pl-[65%] xs:pl-[60%] sm:pl-[23%] md:pl-[2%] lg:pl-[0%] px-3 xl:center-items flex-row hide-scrollbar w-full overflow-x-auto overflow-y-hidden">
          <Image src="Supporters/logo3.svg" alt="logo3" width={67} height={29} className="hover:scale-105 hover:-translate-y-[3px] transition ease-in-out duration-700" />
          <Image src="Supporters/logo5.svg" alt="logo4" width={198} height={29} className="hover:scale-105 hover:-translate-y-1 transition ease-in-out duration-700" />
          <Image src="Supporters/logo2.svg" alt="logo2" width={168} height={29} className="hover:scale-105 hover:-translate-y-1 transition ease-in-out duration-700" />
          <Image src="Supporters/logo1.svg" alt="logo1" width={258} height={29} className="hover:scale-105 hover:-translate-y-1 transition ease-in-out duration-700" />
        </div>
      </div>
    </main>
  )
}

export default Supporter