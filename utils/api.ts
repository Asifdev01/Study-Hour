// Define the shape of the data you're sending
interface CourseData {
  title: string;
  description: string;
  // Add other fields as per your backend requirements
}

// Define the shape of the successful response
interface CourseResponse {
  id: string;
  title: string;
  message?: string;
}

const API_BASE_URL: string =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function createCourse(data: CourseData): Promise<CourseResponse> {
  const res = await fetch(`${API_BASE_URL}/api/courses/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // Attempt to parse error message from server
    const errorData = await res.json().catch(() => ({})); 
    throw new Error(errorData.message || "Something went wrong");
  }

  return res.json();
}