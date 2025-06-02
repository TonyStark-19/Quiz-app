// import Navbar
import { Navbar } from "./home";

// import use navigate
import { useNavigate } from "react-router-dom";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import use effect
import { useEffect } from 'react';

// category page
export default function CategoryPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <CategoryContent />
        </div>
    )
}

// array for box content
const array = [
    {
        title: "C",
        description: "Strengthen your understanding of the foundational programming language. Pointers, loops, arrays — master the building blocks.",
        info: "10 Questions | Beginner friendly"
    },
    {
        title: "Cpp",
        description: "Test your knowledge of object-oriented programming, STL, and advanced logic-building techniques",
        info: "12 Questions | Intermediate Level"
    },
    {
        title: "OOPS Concept",
        description: "Dive into core OOP concepts — encapsulation, inheritance, polymorphism, and abstraction",
        info: "10 Questions | Theory + Conceptual"
    },
    {
        title: "HTML",
        description: "Explore the basics of web structure. Tags, forms, elements — everything you need to build strong foundations",
        info: "10 Questions | Beginner Friendly"
    },
    {
        title: "CSS",
        description: "Test your styling skills with quizzes on selectors, layouts, animations, and responsive design",
        info: "12 Questions | Beginner to Intermediate"
    },
    {
        title: "JavaScript",
        description: "Challenge your logic, syntax, and knowledge of JS concepts like arrays, functions, and DOM manipulation",
        info: "15 Questions | Mixed Difficulty"
    },
    {
        title: "React JS",
        description: "Master components, hooks, props, and state management in the world’s most popular frontend library",
        info: "12 Questions | Intermediate to Advanced"
    },
    {
        title: "Bootstrap",
        description: "Understand the core components, grid system, and classes that make responsive design fast and easy",
        info: "10 Questions | Beginner Level"
    },
    {
        title: "Tailwind CSS",
        description: "Test your knowledge of utility-first CSS. Classes, responsiveness, and layouting made quick and clean",
        info: "10 Questions | UI Focused"
    },
    {
        title: "Git & GitHub",
        description: "Version control your knowledge! Commands, branches, commits, and collaboration — test it all",
        info: "10 Questions | CLI + GitHub Basics"
    }
]

// category page content
function CategoryContent() {
    const navigate = useNavigate();

    return (
        <div className="content flex-col gap-6 pt-28 w-full h-full
         bg-orange-100 dark:bg-gray-950  text-stone-800 dark:text-white">
            <h1 data-aos="fade-down" className="font-bold text-center
            a:text-6xl b:text-5xl d:text-4xl">Choose Quiz Category</h1>

            <div className="box-wrap pb-10 px-5 flex-wrap flex justify-center flex-row gap-4
            a:pt-14 b:pt-10 d:pt-8">
                {array.map((arr, idx) => (
                    <div className="flex flex-col justify-center box w-96 border-2 py-4 px-5 rounded-lg
                   border-stone-600 dark:border-gray-500 text-stone-800 dark:text-white" key={idx} data-aos="fade-up">
                        <h2 className="text-2xl font-bold">{arr.title}</h2>
                        <h4 className="mt-2">{arr.description}</h4>
                        <p className="mt-2">{arr.info}</p>
                        <button
                            className="rounded-md p-1 mt-3
                             bg-stone-700 dark:bg-gray-800 hover:bg-stone-600 dark:hover:bg-gray-900 text-orange-50 dark:text-white"
                            onClick={() => navigate(`/quiz/${arr.title.split(" ")[0].toLowerCase()}`)}
                        >
                            Start Quiz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}