import Image from "next/image";

export default function CoursesSection()  {
  return (
    <div className="w-[90%] mx-auto">
        {/* heading */}
      <div className="text-start mb-5">
        <h2 className="inline-block text-1xl font-light mb-4 text-gray-600 border-2 border-gray-300  p-3 rounded-full">
          Popular Courses
          </h2>
      </div>
    
    {/* texts */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-7 w-[88%] mx-auto">
        <div className="">
            <h1 className="text-black font-sans text-2xl font-stretch-20%">Transform Any Coding Topic into a Complete Learning Journey</h1>
        </div>
        <div className="md:w-[60%]">
            <p className="text-gray-600 hidden sm:block text-sm font-sans">Study Hour helps you convert a simple coding topic into a structured 30-day learning roadmap, complete with curated
             video resources, daily goals, and a clear progression path designed for real skill growth.
            </p>
        </div>
    </div>

    {/* courses icons section */}

    <div className="overflow-hidden w-full mt-10 mb-20">
        <div className="flex gap-6 animate-slide w-max animate-marquee">
            {[
            "/html.png",
            "/css.png",
            "/js.png",
            "/python.png",
            "/react.png",
            "/html.png",
            "/css.png",
            "/js.png",
            "/python.png",
            "/react.png",
            ].map((img, i) => (
            <div
                key={i}
                className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center shrink-0"
            >
                <Image src={img} alt="tech" width={50} height={50} />
            </div>
            ))}
        </div>
        </div>




    </div>
  )
}

 
