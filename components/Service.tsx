import Image from 'next/image'

  const Service = () => {
    return (
      <section className='relative'>
        <div className="absolute -top-16 w-full">
          <Image
            src='/96.png'
            alt='About Image'
            width={599}
            height={1045}
            className='object-cover object-center bg-cover opacity-70'
          />
        </div>
        <main className='flex flex-col py-14 pb-32 overflow-hidden lg:py-28 xl:flex-row z-10'>
          <div className="relative flex flex-col gap-7 items-start w-[598px] h-[359] -translate-x-0 left-[5%] lg:left-[140px] md:left-[7%]">
            <h1 className='regular-40'>Services</h1>
            <div className="flex flex-col w-[598px] gap-4">
              <p className='regular-20'>
                The Service-Driven Approach (SDA) is focused on services as primary units of value creation, design, development and
                operation.
              </p>
              <p className='regular-20'>
                Generation of data in accordance with an AI system that can forecast future demands for human resources in many fields.
              </p>
              <p className='regular-20'>
                A comprehensive Platform integrating both data and services driven approaches.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col w-[611px] z-20 right-0 left-[290px]">
            <Image
              src='/Best-th.png'
              alt='camp'
              width={611}
              height={461}
              className=''
            />
          </div>
        </main>
      </section>
    )
  }
  
  export default Service