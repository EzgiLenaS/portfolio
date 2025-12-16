import { Connections, Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
                <Image
                src="/els_logo.png"
                alt="logo"
                width={70}
                height={70}
                className='cursor-pointer hover:animate-slowspin'
                />

                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                    Ezgi Lena Sonmez
                </span>
            </a>

            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='cursor-pointer'>About Me</a>
                    <a href="#projects" className='cursor-pointer'>Projects</a>
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                </div>
            </div>

            <div className='flex flex-row gap-5'>
                {Connections.map((contact) => (
                    <a key={contact.name} href={contact.link} className='cursor-pointer' target="_blank" rel="noopener noreferrer">
                    <Image
                        src={contact.src}
                        alt={contact.name}
                        key={contact.name}
                        width={42}
                        height={42}
                    />
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar