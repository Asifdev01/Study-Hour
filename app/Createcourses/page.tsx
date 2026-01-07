"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Day = {
  dayNumber: number;
  title: string;
  description: string;
};

type Week = {
  weekNumber: number;
  weekTitle: string;
  days: Day[];
};

type CourseData = {
  courseTitle: string;
  courseOverview?: string;
  weeks: Week[];
};

const CreateCourses = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const router = useRouter();
    const [topic, setTopic] = useState<string>("");



  const handleGenerateCourse = async () => {
    if (!courseTitle.trim()) {
      alert("Please enter a course topic");
      return;
    }

    try {
      setError("");
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/createCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseTitle: courseTitle,
        }),
      });
      // parse response safely: try JSON, fall back to raw text
      const raw = await res.text();
      let data: any = null;
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch (parseErr) {
        data = { raw };
      }

      if (!res.ok) {
        const bodyMsg = data && (data.message || JSON.stringify(data));
        throw new Error(`Failed to generate course: ${res.status} ${bodyMsg || ''}`);
      }

      // store response and log it for debugging; do not render UI yet
      setCourseData(data);
      router.push("/Generatedcourse");
      // eslint-disable-next-line no-console
      console.log('Generate course response:', data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Generate course error', err);
      setError('Failed to generate course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[95%] mx-auto py-1 md:py-5 px-5 mt-1 md:mt-10 mb-10 bg-dot bg-[#E5E5E5]">
      
      {/* heading */}
      <div className="mt-20">
        <p className="text-2xl font-bold font-sans flex justify-center text-center">
          Create Your 30-Day Learning Roadmap
        </p>
        <p className="text-gray-600 mt-4 text-center font-sans w-full md:w-[50%] mx-auto">
          Enter any topic and we’ll generate a structured one-month course with daily goals, curated resources, and a clear learning path.
        </p>
      </div>

      {/* input section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
        
        <div className="w-full md:w-[30%] p-[2px] rounded-full 
            bg-linear-to-r from-[#3652FD] via-[#FF0000] to-[#302121] border-2">
          <input
            type="text"
            placeholder="Enter a course topic"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="w-full p-3 rounded-full bg-white outline-none border-transparent"
          />
        </div>

        {error && (
          <div className="w-full md:w-[30%] mb-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* generate button */}
        <button
          onClick={handleGenerateCourse}
          disabled={loading}
          className="
            px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-full
            hover:bg-blue-700 transition-colors
            shadow-[0_0_15px_rgba(54,82,253,0.3)]
            font-sans disabled:opacity-60
          "
        >
          {loading ? "Generating..." : "Generate Course"}
        </button>
      </div>

      {/* suggestions */}
      <div className="mt-5 pb-10 text-center">
        <p className="text-gray-600 font-sans text-1xl">
          Suggested topics:
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {[
            "Web Development",
            "AI and Machine Learning",
            "Mobile App Design",
            "Digital Marketing",
          ].map((topic) => (
            <button
              key={topic}
              onClick={() => setCourseTitle(topic)}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition-colors font-sans"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CreateCourses;
