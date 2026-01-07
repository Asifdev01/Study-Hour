"use client";

const Video = () => {
  return (
    <div className="w-[90%] mx-auto bg-lines  pb-10 mt-10 mb-10">
      <div className="flex justify-start mt-10 mb-10 flex-col">
        <iframe
          className="w-full md:w-[65%] h-55 md:h-105 rounded-xl"
          height="300 md:h-600"
          src="https://www.youtube.com/embed/b4ba60j_4o8?si=--jlqNOrjMOdf1PV"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <p className="text-1xl  font-bold font-sans ml-5 mt-5">NextJs Complete Course in English</p>
        <p className="text-gray-700 mt-4 font-sans border-2 w-full md:w-[65%]
  p-2 flex justify-start items-start rounded-lg border-gray-300 text-sm bg-white">
          Learn Next.js from scratch with this comprehensive course covering everything from fundamentals to advanced concepts. Build real-world projects and master Next.js development.
        </p>
      </div>
    </div>
  )
}

export default Video
