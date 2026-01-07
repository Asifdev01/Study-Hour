export interface CourseDay {
  dayNumber: number;
  title: string;
  description: string;
}

export interface CourseWeek {
  weekNumber: number;
  weekTitle: string;
  days: CourseDay[];
}

export interface Course {
  courseTitle: string;
  courseOverview: string;
  weeks: CourseWeek[];
}
