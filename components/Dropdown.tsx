"use client";

import { useEffect,  useRef, useState } from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const ref = useRef(null);

    const languages = [
        {code: 'EN', label: 'English'},
        {code: 'HI', label: 'Hindi'},
        {code: 'OR', label: 'Odia'},
        {code: 'TA', label: 'Tamil'},
        {code: 'TE', label: 'Telegu'},
        {code: 'ML', label: 'Malayali'}
    ];


      useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);



  return (
    <div ref={ref} className="cursor-pointer relative flex items-center">
        <div>
            {isOpen && (
                <div 
                ref={ref}
                className=" absolute left-full ml-2 flex items-center gap-1 bg-white border rounded-full 
                shadow-lg px-2 py-1 z-30">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                            key={lang.label}
                            onClick={() => {
                                setSelectedLanguage(lang.label);
                                setIsOpen(false);
                            }}
                            className="px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors
                             block w-full text-left"
                            >
                            {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            <button
                ref={ref}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border-2 border-gray-500 rounded-md text-sm bg-white text-gray-600"
                >{selectedLanguage}
                <span>{"   >"}</span>
            </button>
        </div>
      
    </div>
  )
}

export default Dropdown
