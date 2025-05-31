// use effect
import { useEffect, useState } from 'react';

// router
import { Link } from 'react-router-dom';

// home page
export default function Home() {
    return (
        <div className="container h-screen">
            <Navbar />
            <Content />
        </div>
    )
}

// navbar
export function Navbar() {

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
        <div className="navbar flex justify-between flex-row p-4 fixed z-3 w-full border-b-2 
        border-stone-800 dark:border-white bg-orange-50 dark:bg-gray-950">
            <Link to="/">
                <div className="head text-2xl font-bold text-stone-800 dark:text-white">Quiz App</div>
            </Link>
            <button
                onClick={toggleTheme}
                className="px-3 py-1 rounded-md
                text-stone-800 dark:text-white border border-stone-800 dark:border-white hover:bg-stone-200 dark:hover:bg-gray-700 transition"
            >
                {isDark ? '🌞 Light' : '🌙 Dark'}
            </button>
        </div>
    )
}

// content
function Content() {
    return (
        <div className="content flex justify-center items-center flex-col gap-6 pt-10 w-full h-full
         bg-orange-50 dark:bg-gray-950  text-stone-800 dark:text-white">
            <h1 className="text-7xl font-bold text-center">Quiz App!</h1>
            <h2 className="text-4xl text-center font-semibold">Test Your Knowledge. Learn Something New.</h2>
            <p className="text-center text-xl max-w-xl">
                Welcome to the ultimate quiz experience powered by React and Tailwind CSS. Whether you're brushing up on skills or just having fun, this app helps you learn, compete, and grow.
            </p>
            <Link to="/pages/category">
                <button className="pt-2 pb-2 pr-4 pl-4 text-lg rounded-md
                 border-2 border-stone-600 dark:border-gray-700 hover:bg-stone-600 hover:text-orange-50 hover:dark:bg-gray-700
                 text-stone-800 dark:text-white bg-transparent dark:bg-transparent">Get Started</button>
            </Link>
        </div>
    )
}