import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/cacbo.svg'

const Navbar = () => {
    return (
        <nav className='w-full flex flex-col justify-center items-center'>

            {/* <Image src={Logo} alt='cacbo' /> */}

            <div className='w-full flex flex-row justify-between'>

                <div className='flex flex-row justify-center items-center'>
                    <Image src={Logo} alt='cacbo' width={50} height={50} />
                    <div className="w-[2px] h-full bg-redcolor"/>
                    <div className='flex flex-col justify-start'>
                        <h1>CACBO Badminton</h1>
                    </div>
                </div>

            </div>

            {/* <div >cc</div> */}
        </nav>
    )
}

export default Navbar