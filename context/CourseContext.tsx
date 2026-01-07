"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { Course } from "@/types/course";

interface CourseContextType {
  courseData: Course | null;
  setCourseData: (course: Course) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  const [courseData, setCourseDataState] = useState<Course | null>(null);

  // ✅ LOAD from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("generatedCourse");
    if (stored) {
      setCourseDataState(JSON.parse(stored));
    }
  }, []);





  // ✅ SAVE to localStorage
  const setCourseData = (course: Course) => {
    localStorage.setItem("generatedCourse", JSON.stringify(course));
    setCourseDataState(course);
  };

  return (
    <CourseContext.Provider value={{ courseData, setCourseData }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourse must be used within CourseProvider");
  }
  return context;
};
