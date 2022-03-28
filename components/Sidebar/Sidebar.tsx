import React from 'react'
import UserProfile from "../../public/assets/Image/User-profile.jpg"
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <div>
            <Image
                src={UserProfile}
                alt="Picture of the author"
                width={128}
                height={128}
                className='mx-auto rounded-full'
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Arpesh</span> Shrivastava
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href='
            ' download="name"><GiTie className='w-6 h-6' /> Download Resume</a>
            {/* //socials icons */}
            <div className="flex w-9/12 mx-auto my-5 justify-evenly text-green md:w-ful">
                <a href="#">
                    <AiFillYoutube className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="#">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="#">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            {/* address */}
            <div className="py-4 my-5 bg-gray-200" style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span className="">Noida, India</span>

                </div>
                <p className="my-2">arpesh.11@gmail.com</p>
                <p className="my-2">Mobile Number</p>
            </div>
            {/* button  */}
            <button className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
                onClick={() => window.open('mailto:arpesh.11@gmail.com')}>Email me</button>
            <button className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-greento-blue-500 hover:scale-105 focus:outline-none">UI Toggle</button>

        </div>
    )
}

export default Sidebar