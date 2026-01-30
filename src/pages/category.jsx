// import Navbar and footer
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import CategoryCard from "../Components/CategoryCard";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import use effect
import { useEffect } from 'react';

// import icons
import { FaCode, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

// array for box content
const categories = [
    {
        title: "C Language",
        description: "Strengthen your understanding of the foundational programming language. Pointers, loops, arrays — master the building blocks.",
        info: "10 Questions | Beginner friendly",
        icon: <FaCode />,
        color: "text-gray-500"
    },
    {
        title: "Cpp",
        description: "Test your knowledge of object-oriented programming, STL, and advanced logic-building techniques",
        info: "12 Questions | Intermediate Level",
        icon: <TbBrandCpp />,
        color: "text-red-400"
    },
    {
        title: "OOPS Concept",
        description: "Dive into core OOP concepts — encapsulation, inheritance, polymorphism, and abstraction",
        info: "10 Questions | Theory + Conceptual",
        icon: <FaCode />,
        color: "text-red-400"
    },
    {
        title: "HTML",
        description: "Explore the basics of web structure. Tags, forms, elements — everything you need to build strong foundations",
        info: "10 Questions | Beginner Friendly",
        icon: <FaHtml5 />,
        color: "text-orange-500"
    },
    {
        title: "CSS",
        description: "Test your styling skills with quizzes on selectors, layouts, animations, and responsive design",
        info: "12 Questions | Beginner to Intermediate",
        icon: <FaCss3Alt />,
        color: "text-blue-500"
    },
    {
        title: "JavaScript",
        description: "Challenge your logic, syntax, and knowledge of JS concepts like arrays, functions, and DOM manipulation",
        info: "15 Questions | Mixed Difficulty",
        icon: <IoLogoJavascript />,
        color: "text-yellow-500"
    },
    {
        title: "React JS",
        description: "Master components, hooks, props, and state management in the world’s most popular frontend library",
        info: "12 Questions | Intermediate to Advanced",
        icon: <RiReactjsFill />,
        color: "text-cyan-500"
    },
    {
        title: "Bootstrap",
        description: "Understand the core components, grid system, and classes that make responsive design fast and easy",
        info: "10 Questions | Beginner Level",
        icon: <FaBootstrap />,
        color: "text-violet-600"
    },
    {
        title: "Tailwind CSS",
        description: "Test your knowledge of utility-first CSS. Classes, responsiveness, and layouting made quick and clean",
        info: "10 Questions | UI Focused",
        icon: <RiTailwindCssFill />,
        color: "text-teal-500"
    },
    {
        title: "Git & GitHub",
        description: "Version control your knowledge! Commands, branches, commits, and collaboration — test it all",
        info: "10 Questions | CLI + GitHub Basics",
        icon: <FaGithub />,
        color: "text-gray-700"
    },
    {
        title: "Node.js",
        description: "Test your backend basics — event loop, modules, async JS, and server-side logic",
        info: "12 Questions | Backend Fundamentals",
        icon: <FaNodeJs />,
        color: "text-green-600"
    },
    {
        title: "Express.js",
        description: "Routers, middleware, APIs, and server creation — evaluate your Express.js knowledge",
        info: "10 Questions | API Focused",
        icon: <SiExpress />,
        color: "text-gray-800"
    },
    {
        title: "MongoDB",
        description: "Strengthen your NoSQL understanding — documents, collections, aggregation, and queries",
        info: "12 Questions | Database Focused",
        icon: <SiMongodb />,
        color: "text-green-500"
    },
    {
        title: "Java",
        description: "Test your understanding of OOP, JVM, collections, and core Java concepts",
        info: "15 Questions | Intermediate Level",
        icon: <FaJava />,
        color: "text-orange-700"
    },
    {
        title: "Python",
        description: "Variables, lists, loops, OOP, and problem-solving — evaluate your Python fundamentals",
        info: "12 Questions | Beginner to Intermediate",
        icon: <FaPython />,
        color: "text-blue-400"
    },
    {
        title: "SQL",
        description: "Queries, joins, constraints, normalization — master the essentials of relational databases",
        info: "15 Questions | Query Based",
        icon: <GrMysql />,
        color: "text-cyan-700"
    }
];

// category page
export default function CategoryPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#030712] transition-colors duration-500">
            {/* Background Orbs to match Home Page */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-amber-100/40 dark:bg-indigo-950/20 blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-orange-100/40 dark:bg-purple-950/20 blur-[100px]" />
            </div>

            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-16 text-center" data-aos="fade-down">
                        <h1 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white mb-4">
                            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600
                            dark:from-indigo-400 dark:to-cyan-400">Challenge</span>
                        </h1>
                        <p className="text-stone-500 dark:text-gray-400 max-w-xl mx-auto">
                            Pick a category to test your skills. Each quiz is designed to simulate real-world interview questions.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((item, idx) => (
                            <CategoryCard key={idx} item={item} delay={idx * 50} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}