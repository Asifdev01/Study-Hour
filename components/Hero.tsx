"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { usePathname } from "next/navigation";

const Hero = () => {
    const pathname = usePathname();

const buttonLinks=[
    { name: 'Create My Course', href: '/Createcourses' },
    { name: 'Explore Courses', href: '/Course' },
]
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-7 pt-10 w-[88%] mx-auto mb-17 md:min-h-screen  bg-grid
     md:-mt-25'>
        <div className="justify-center md:w-[40%] pt-5 sm:pt-15">
            <h1 className='md:text-3xl text-4xl font-bold mb-6 text-gray-800 font-sans'>
                Turn Any <span className="text-blue-600 text-4xl font-bold">Coding</span> Topic into
                 a 1-Month Learning Roadmap 
                 <span className="text-blue-600 text-4xl font-bold">{"</>"}</span>
            </h1>
            <p className='text-gray-500 mb-6 max-w-md font-sans'>
                Enter a programming topic and get a complete 30-day course with curated videos, daily goals, and a clear learning path—generated instantly.
             </p>

            {/* buttons */}
            
             <div className="flex flex-col md:flex-row w-fit gap-4">
                {buttonLinks.map((link, index) => (
                    <Link
                    key={link.name}
                    href={link.href}
                    className={`
                        scroll-smooth px-6 py-3 cursor-pointer rounded-full font-sans
                        transition-colors shadow-[0_0_15px_rgba(54,82,253,0.3)]
                        ${index === 1 ? "bg-white hover:bg-gray-200 border-gray-400 border-1" : "bg-blue-600 text-white hover:bg-blue-700"}
                        ${pathname === link.href ? " ring-2 ring-white/50" : ""}
                    `}
                    >
                    {link.name}
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                    </Link>
                ))}
            </div>


             
        </div>

        <div>
            <Image
                src="/studyimg.png"
                alt="study"
                width={430}
                height={750}
                className='hidden md:block'
                />
        </div>
      
    </div>
  )
}

export default Hero;

 
