"use client";
import CourseCard from "@/components/CourseCard";
import { useCourse } from "@/context/CourseContext";
import Link from "next/link";
import { usePathname } from "next/navigation";




const Generatedcourse = () => {
    const pathname = usePathname();
    const {courseData} = useCourse();

    console.log("Generated Course:", courseData);

    if(!courseData){
        return(
            <div className="pt-20 text-center text-gray-500">
                No course generated.
            </div>
        );
    }


    const filterlink=[
        { name: 'All filters', href: '/Generatedcourse' },
        { name: 'Roadmap', href: '/Roadmap' },
        { name: 'Language', href: '/Generatedcourse' },
        { name: 'Level', href: '/Generatedcourse' },

    ]
  return (
    <div className="pt-5 w-[90%] md:w-[80%] mx-auto">
        <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] pt-5 rounded-lg">
            <p className="text-sm md:text-1xl text-gray-500 ">You searched for -  {courseData.courseTitle}</p>
            <p className="text-sm md:text-1xl text-black mt-5">Recommended Course in 
                <span className="font-bold"> {courseData.courseTitle}</span>
            </p>
            <hr className="my-5 border-gray-200 border-2 rounded-full"/>

        </div>
        <div className="mt-8 flex flex-wrap gap-3">
            {filterlink.map((link) => (
                <Link
                key={link.name}
                href={link.href}
                className={`px-2 md:px-4 py-2 cursor-pointer bg-white text-black rounded-full
                hover:bg-grey-700 transition-colors border border-gray-200 font-sans
                ${pathname === link.href ? " ring-2 ring-white/50" : ""}
                `}>
                    
                {link.name}
                </Link>
            ))}
             
        </div>

        <div className="mt-10">
            {/* course cards */}
            <CourseCard courses={[courseData]} />
        </div>
       
           
      
    </div>
  )
}

export default Generatedcourse
