import React from 'react'
import {Poppins} from "next/font/google"
import Link from 'next/link'

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Insta = () => {
  return (
    <>
      <div className='w-full h-[450px] inset-0 bg-[url("/static/bginsta.jpg")] flex-col relative bg-cover bg-center flex justify-center items-center max-[770px]:mt-[4rem] max-[470px]:h-[350px]'>
      <div className='absolute inset-0 z-10 backdrop-blur-[3px]'></div>

      <p className={`font-[700] text-[60px] z-20 ${PoppinsFont} max-[840px]:text-[50px] max-[840px]:font-[600] max-[470px]:text-[35px] text-black`}>Our Facebook</p>
      <p className={`font-[400] text-[20px] z-20 ${PoppinsFont} max-[470px]:text-[16px] text-black`}>Follow our store on Facebook</p>
      <button className='font-[400] text-[20px] px-5 py-3 shadow-xl shadow-gray-600 z-30 bg-white rounded-full mt-5 max-[840px]:text-[16px] max-[470px]:px-3 text-black max-[470px]:py-2'><Link href={"https://www.instagram.com/areeb_ahmed549/"}>Follow us</Link></button>

      </div>
    </>
  )
}

export default Insta