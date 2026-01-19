"use client";

import Link from "next/link";
import { useCourse } from "@/context/CourseContext";

interface Course {
  courseTitle: string;
  courseOverview: string;
}

interface Props {
  courses?: Course[];
}

const CourseCard = ({ courses = [] }: Props) => {
  const { setCourseData } = useCourse();

  if (!courses.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No courses available
      </p>
    );
  }

  return (
    <div className="w-full mt-2 flex flex-col md:flex-row">
      {courses.map((course, index) => (
        <Link
          key={index}
          href="/Video"
          className="w-full md:w-1/3"
          onClick={() => setCourseData(course)}
        >
          <div
            className="h-full p-4 rounded-2xl cursor-pointer
              shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
              hover:shadow-[0px_6px_16px_rgba(0,0,0,0.32)]
              hover:-translate-y-1
              transition-all duration-300"
          >
            <img
              src="/temp.png"
              alt={`${course.courseTitle} thumbnail`}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <div className="flex flex-row items-start">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-green-500">
                   &lt;/&gt;
                </span>
              </div>

              <h3 className="text-md font-semibold mt-2 ml-3 line-clamp-2">
                {course.courseTitle}
              </h3>
            </div>

            <p className="text-gray-500 text-xs mt-2 line-clamp-2">
              This topic provides a brief understanding of the key concepts, purpose, and importance of the subject. It highlights the main ideas and explains how they are relevant in real-world scenarios. {course.courseOverview}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseCard;
