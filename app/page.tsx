import React from 'react'
import { Header } from '@/components/Header/header'
import Image from 'next/image'

export const Home = () => {
  return (
    <div>
        <Header></Header>
      <div className='flex flex-col md:flex-row h-[80%]'> 
          <div className='w-1/2 flex-row justify-center'>
            <h1 className='w-[496px] h-[189px] text-[40px] justify-center pl-[50px] pt-[100px]  text-[#000000] leading-[65.8px] font-bold font-[Libre]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
              <p className='w-[800px] h-[147px] text-[30px] justify-center pl-[50px] pt-[150px] text-[#787054] leading-[49.35px] font-medium font-[Libre]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>\
                <button className='w-[288px] h-[58px] text-[30px] text-[#FFFFFF] mt-[180px] ml-[50px] font-medium font-[Libre] leading-[37.5px] bg-[#A29875] rounded-lg'>Explore Now</button>
          </div>
      <div className='w-1/2 flex justify-center pt-[50px] pl-[300px]' >
      <div className='w-[442px] h-[611px] p-5'>
        <Image src={"/Images/image.svg"}
        alt='svg image'
        width={400}
        height={600}></Image>
      </div>
    
        </div>
      </div>
    </div>
  )
}

export default Home;
