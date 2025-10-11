// import useEffect and useState
import { useEffect, useState } from 'react';

// import Link
import { Link } from 'react-router-dom';

// react icons
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

// navbar component
export function Navbar({ disableNav }) {

    // theme toggle
    const [isDark, setIsDark] = useState(() => {
        // initialize from localStorage
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    // toggle button
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="flex a:justify-evenly b:justify-around d:justify-between flex-row w-full border-stone-800
        dark:border-white font-poppins a:pt-10 d:pt-5 b:px-0 d:px-8">
            <div className="c:text-[26px] font-bold d:text-[22px] text-stone-800 dark:text-white">
                {disableNav ? (
                    <span className="cursor-not-allowed opacity-50 
                    flex flex-row items-center justify-center gap-2">Quiz App</span>
                ) : (
                    <Link to="/"
                        className='flex flex-row items-center justify-center gap-2'>Quiz App
                    </Link>
                )}
            </div>

            <button
                onClick={toggleTheme}
                className="c:p-2.5 d:p-0 rounded-full text-stone-800 dark:text-white hover:bg-[#f59e0b]/40
                hover:text-white dark:hover:bg-gray-800 transition"
            >
                {isDark ? <CiLight className='text-2xl' /> : < MdOutlineDarkMode className='text-2xl' />}
            </button>
        </div>
    )
}