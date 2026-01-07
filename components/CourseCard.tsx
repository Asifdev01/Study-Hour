"use client";

import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types/course";
import { useCourse } from "@/context/CourseContext"; // Adjust path as needed

interface Props {
  courses: Course[]; 
}

const CourseCard = ({ courses }: Props) => {
  const { setCourseData } = useCourse();

  return (
    <div className="w-full mt-5 flex flex-col md:flex-row gap-7">
      {courses.map((course, index) => (
        <Link
          key={index}
          href="/Video"
          className="w-full md:w-1/3"
          onClick={() => setCourseData(course)} // Saves course to context on click
        >
          <div
            className="h-full p-4 rounded-2xl cursor-pointer
              shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
              hover:shadow-[0px_6px_16px_rgba(0,0,0,0.32)]
              hover:-translate-y-1
              transition-all duration-300"
          >
            {/* <div className="relative w-full h-48">
              <Image
                src={course.thumbnail || "/placeholder-course.jpg"} 
                alt={course.courseTitle}
                fill
                className="object-cover rounded-lg"
              />
            </div> */}

            <h3 className="text-lg font-semibold mt-3 line-clamp-2">
              {course.courseTitle}
            </h3>
            
            <p className="text-gray-600 text-xs mt-1 line-clamp-2">
              {course.courseOverview}
            </p>
{/* 
            <p className="text-gray-500 text-xs mt-1">
              {course.instructor || "Expert Instructor"}
            </p>

            <div className="flex justify-between items-center mt-4 text-sm">
              <span className="font-medium">⭐ {course.rating || "4.5"}</span>
              <span className="text-gray-600 text-xs">{course.duration || "Self-paced"}</span>
              <span className="text-green-600 font-semibold">
                {course.price || "Free"}
              </span>
            </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseCard;