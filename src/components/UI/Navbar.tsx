"use client";
import { Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full h-auto flex flex-row items-center justify-between bg-white px-5 py-3 rounded-xl'>
            <Image
                src="/logo.svg"
                alt="CACBO Badminton Logo"
                width={48}
                height={48}
                className='cursor-pointer'
            />

            <div className='flex flex-row items-center gap-5'>
                <Button href='/contact'>
                    <Mail size={14} />
                    Nous contacter
                </Button>
                <button
                    className='text-redcolor'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? <Menu size={25} /> : <X size={25} />}
                </button>
            </div>

        </nav>
    )
}

export default Navbar;
