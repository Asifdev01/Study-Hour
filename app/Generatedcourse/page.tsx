"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";

const Generatedcourse = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");

  const [courseData, setCourseData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch course by ID
  useEffect(() => {
    if (!courseId) {
      setError("Course ID missing");
      setLoading(false);
      return;
    }

    const fetchCourse = async () => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/createCourse/${courseId}`
    );

    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON");
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Failed to fetch course");
    }

    setCourseData(data);
  } catch (err) {
    console.error("Fetch course error:", err);
    setError("Unable to load course");
  } finally {
    setLoading(false);
  }
};


    fetchCourse();
  }, [courseId]);

  // 🔹 UI states
  if (loading) {
    return (
      <div className="pt-20 text-center text-gray-500">
        Loading course...
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="pt-20 text-center text-gray-500">
        Course not found
      </div>
    );
  }

  const filterlink = [
    { name: "All filters", href: "" },
    { name: "Roadmap", href: "/Roadmap" },
    { name: "Language", href: "" },
    { name: "Level", href: "" },
  ];

  return (
    <div className="pt-5 w-[90%] md:w-[80%] mx-auto">
      {/* Header */}
      <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] pt-5 rounded-lg p-5">
        <p className="text-sm md:text-xl text-gray-500">
          You searched for – {courseData.courseTitle}
        </p>

        <p className="text-sm md:text-xl text-black mt-5">
          Recommended Course in
          <span className="font-bold"> {courseData.courseTitle}</span>
        </p>

        <hr className="my-5 border-gray-200 border-2 rounded-full" />
      </div>

      {/* Filters */}
      <div className="mt-5 flex flex-wrap gap-3">
        {filterlink.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`px-2 md:px-4 py-2 cursor-pointer bg-white text-black rounded-full
              hover:bg-gray-100 transition-colors border border-gray-200 font-sans
              ${pathname === link.href ? "ring-2 ring-blue-500/50" : ""}
            `}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="mt-5 mb-10 flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-full">
          <CourseCard courses={[courseData]} />
        </div>

        {/* <div className="w-full md:w-full">
          <CourseCard courses={[courseData]} />
        </div> */}
      </div>
    </div>
  );
};

export default Generatedcourse;
