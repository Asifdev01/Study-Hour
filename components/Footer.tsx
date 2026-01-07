"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
   const pathname = usePathname();
  
    const navLinks = [
      { name: 'Home', href: '/' },
      { name: 'Courses', href: '/Course' },
      { name: 'Roadmaps', href: '/Roadmap' },
      { name: 'About Us', href: '/About' },
      { name: 'Contact Us', href: '/Contact' },
    ];

  return (
    <footer className="relative w-[90%] md:w-[97%] justify-center mx-auto bg-black py-6 p-5 mt-10 rounded-2xl mb-4">
      <p className="text-gray-400 flex text-1xl text-center items-start mr-5 font-sans">Let's</p>
      <p className="text-2xl md:text-4xl font-mono items-start mt-2 text-amber-50 font-bold text-white-300 ">Study Hours{"</>"}</p>
      <p className="text-gray-400 flex text-sm md:text-2xl text-center items-start mr-5 underline font-sans">studyhours@gmail.com</p>

      {/* social media links */}

      <div className="flex gap-5 text-1xl text-black mt-5 items-end justify-end bg-gray-100 w-fit p-3 rounded-full">
        <FaGithub className="hover:text-black cursor-pointer h-6 w-6" />
        <FaLinkedin className="hover:text-blue-600 cursor-pointer h-6 w-6" />
        <FaTwitter className="hover:text-sky-500 cursor-pointer h-6 w-6" />
        <FaInstagram className="hover:text-pink-500 cursor-pointer h-6 w-6" />
    </div>


    <div className="flex flex-col md:flex-row mt-10 items-start md:items-center justify-between gap-6">
        {/* courses */}
        <div className="flex gap-3.5 flex-wrap text-sm md:text-1l justify-start text-gray-400 font-sans ">
          {navLinks.map((link) => (
            <Link
            key={link.name}
            href={link.href}
            className={`hover:text-white transition-colors font-sans 
              ${pathname === link.href ? " text-white" : ""}`}
            >
            {link.name}
            </Link>
          ))}
        </div>

        {/*footer logo */}
            <div className="flex items-start md:items-center">
                <div className="w-10 h-10  mx-auto bg-gradient-to-br from-blue-500 to-purple-600 
                rounded-lg flex items-center justify-center underline">
                  <span className="text-white text-sm">◆</span>
                </div>
            </div>
            
        {/* licence */}
        <div>
            <p className="text-gray-400 flex text-sm text-center items-start font-sans">© 2026 Study Hour. All rights reserved.</p>
        </div>
    </div>

   

    {/* underline */}
    <hr className="mt-5 rounded-full border-1 border-gray-300" />

    </footer>
  )
}
export default Footer;

 
