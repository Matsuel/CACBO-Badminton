import GPS from "@/assets/gps.svg";
import Gymnase from "@/assets/Gymnase.png";
import Logo from "@/assets/cacbo.svg";
import Image from 'next/image'
import React from 'react'

const HomeHero = () => {
    return (
        <div
            className="flex flex-col items-center justify-center md:w-[80%] w-[90%] h-auto mt-5 bg-cover bg-center rounded-ten"
            style={{ backgroundImage: `url(${Gymnase.src})` }}>

            <div className="w-[100%] h-[485px] flex flex-row justify-center items-center">

                <div className="md:w-[80%] w-[90%] h-full flex flex-col justify-center gap-7 2xl:pl-28 xl:pl-20 lg:pl-16 md:pl-10 pl-5">
                    <h3 className="font-Shantell font-medium text-white 2xl:text-4xl xl:text-[32px] lg:text-[28px] text-2xl ">Bienvenue !</h3>

                    <h1 className="font-Montserrat font-bold text-white 2xl:text-8xl xl:text-[86px] lg:text-[76px] md:text-[66px] sm:text-[52px] text-[40px]">CACBO Badminton</h1>

                    <div className="flex flex-col items-start justify-center lg:gap-3 md:gap-2">
                        <h3 className="font-Inter font-normal text-white 2xl:text-3xl xl:text-[24px] lg:text-[20px] text-[18px]">Club de badminton
                            pour <strong>adultes</strong>, badistes depuis <strong>2007</strong></h3>

                        <div className="flex flex-row items-start justify-center gap-3">
                            <Image src={GPS} alt="gps" className="mt-1" />
                            <h3 className="font-Shantell font-medium text-white 2xl:text-3xl xl:text-[24px] lg:text-[20px] text-[18px]">
                                Carbon-Blanc (33)
                            </h3>
                        </div>
                    </div>

                </div>

                <div className="w-[20%] h-full flex flex-col justify-start items-center pt-14">

                    <div className="md:w-40 md:h-40 h-[100px] w-[100px] bg-white rounded-full sm:flex hidden flex-row justify-center items-center">
                        <Image src={Logo} alt="cacbo" className="md:w-[100px] w-[60px]" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeHero