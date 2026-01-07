import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Roadmap() {
  return (
    <div className="pt-10 pb-10 px-5 md:px-10 lg:px-20 bg-gray-100 mid-h-screen">
      <Image src="/roadmap.png" alt="Roadmap" width={1920} height={700} />
    </div>
  )
}

