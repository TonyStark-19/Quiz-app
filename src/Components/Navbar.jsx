// import useEffect and useState
import { useEffect, useState } from 'react';

// import Link
import { Link } from 'react-router-dom';

// react icons
import { CiLight, CiDark } from "react-icons/ci";

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

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="flex justify-evenly flex-row w-full
        border-stone-800 dark:border-white bg-orange-100 dark:bg-transparent pt-10 font-poppins">
            <div className="text-[26px] font-bold text-stone-800 dark:text-white">
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
                className="p-2.5 rounded-full
                text-stone-800 dark:text-white border-2 border-stone-600 dark:border-transparent
                hover:bg-stone-600 hover:text-white dark:hover:bg-gray-800 transition"
            >
                {isDark ? <CiLight className='text-2xl' /> : < CiDark className='text-2xl' />}
            </button>
        </div>
    )
}