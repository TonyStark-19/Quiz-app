// use effect
import { useEffect, useState } from 'react';

// router
import { Link } from 'react-router-dom';

// react icons
import { RiReactjsFill } from "react-icons/ri";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// home page
export default function Home() {

    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="h-screen w-full"
            style={{
                background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
            }}>
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

// navbar
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
        <div className="flex justify-between flex-row fixed z-10 w-full border-b-2 
        border-stone-800 dark:border-white bg-orange-100 dark:bg-gray-950
        c:p-4 d:p-3">
            <div className="text-2xl font-bold text-stone-800 dark:text-white">
                {disableNav ? (
                    <span className="cursor-not-allowed opacity-50 
                    flex flex-row items-center justify-center gap-2">Quiz App
                        <RiReactjsFill className='mt-1 b:text-3xl c:text-2xl text-cyan-500' /></span>
                ) : (
                    <Link to="/"
                        className='flex flex-row items-center justify-center gap-2'>Quiz App
                        <RiReactjsFill className='mt-1 b:text-3xl c:text-2xl text-cyan-500' />
                    </Link>
                )}
            </div>

            <button
                onClick={toggleTheme}
                className="px-3 py-1 rounded-md
                text-stone-800 dark:text-white border-2 border-stone-600 dark:border-gray-800
                hover:bg-stone-600 hover:text-white dark:hover:bg-gray-800 transition"
            >
                {isDark ? '🌞 Light' : '🌙 Dark'}
            </button>
        </div>
    )
}

// content
function Content() {
    return (
        <div className="z-1 flex justify-center items-center pt-10 w-full h-full
         bg-orange-100 dark:bg-transparent text-stone-800 dark:text-white">
            <div className='flex justify-center items-center flex-col gap-5
            c:px-5 d:px-0' data-aos="fade-down">
                <h1 className="font-bold text-center
                a:text-7xl b:text-6xl c:text-5xl d:text-4xl">Quiz App!</h1>

                <h2 className="text-center font-semibold
                c:text-3xl c:max-w-2xl d:text-2xl d:max-w-96">Test Your Knowledge. Learn Something New.</h2>

                <p className="text-center text-xl
                c:max-w-xl c:w-full c:tracking-wide d:tracking-normal d:w-80">
                    Welcome to the ultimate quiz experience powered by React and Tailwind CSS.
                    Whether you're brushing up on skills or just having fun, this app helps you learn, compete, and grow.
                </p>

                <Link to="/pages/category">
                    <button className="pt-2 pb-2 pr-4 pl-4 text-lg rounded-lg
                    border-2 border-stone-700 dark:border-gray-800 hover:bg-stone-700
                    hover:text-orange-50 hover:dark:bg-gray-800
                    text-stone-800 dark:text-white bg-transparent dark:bg-transparent">Get Started</button>
                </Link>
            </div>
        </div>
    )
}

// footer
export function Footer() {
    return (
        <div className='absolute bottom-3 flex justify-center items-center w-full
        bg-orange-100 dark:bg-transparent text-stone-800 dark:text-white'>
            <p>Made with ❤️ by Aditya chandel</p>
        </div>
    )
}