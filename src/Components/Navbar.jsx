// import useEffect and useState
import { useEffect, useState } from 'react';

// import Link
import { Link } from 'react-router-dom';

// react icons
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

// Navbar
export function Navbar({ disableNav }) {
    // theme toggle
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Handle initial mount to prevent "flash" of light mode
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-4 py-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3
                bg-white/70 dark:bg-gray-950/70 backdrop-blur-md 
                border border-stone-200/50 dark:border-gray-800/50 rounded-2xl shadow-sm">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    {disableNav ? (
                        <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                            <div className="w-8 h-8 bg-gradient-to-tr from-amber-500 to-orange-600 dark:from-indigo-500 dark:to-cyan-400 rounded-lg" />
                            <span className="font-bold text-xl tracking-tight text-stone-800 dark:text-white">
                                Quizify
                            </span>
                        </div>
                    ) : (
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-gradient-to-tr from-amber-500 to-orange-600 dark:from-indigo-500 dark:to-cyan-400
                            rounded-lg transition-transform group-hover:rotate-12" />
                            <span className="font-extrabold text-xl tracking-tight text-stone-900 dark:text-white">
                                Quizify
                            </span>
                        </Link>
                    )}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {!disableNav && (
                        <div className="hidden md:flex items-center gap-6 mr-4">
                            <Link to="/pages/category" className="text-sm font-medium text-stone-600 dark:text-gray-400 hover:text-amber-600
                            dark:hover:text-indigo-400 transition-colors">
                                Categories
                            </Link>
                            <a
                                href="https://github.com/TonyStark-19/Quiz-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-gray-400 hover:text-amber-600
                                dark:hover:text-indigo-400 transition-colors"
                            >
                                <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                                <span>Star on GitHub</span>
                            </a>
                        </div>
                    )}

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="relative p-2 rounded-xl bg-stone-100 dark:bg-gray-900 text-stone-800 dark:text-white 
                        border border-stone-200 dark:border-gray-800 hover:scale-110 active:scale-95 transition-all"
                        aria-label="Toggle Theme"
                    >
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            {isDark ? (
                                <HiOutlineSun className="text-xl text-amber-400 transition-all" />
                            ) : (
                                <HiOutlineMoon className="text-xl text-stone-600 transition-all" />
                            )}
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}