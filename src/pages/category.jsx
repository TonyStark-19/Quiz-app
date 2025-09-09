// import Navbar and footer
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import use navigate
import { useNavigate } from "react-router-dom";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import use effect
import { useEffect } from 'react';

// react icons
import { FaCode, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";

// category page
export default function CategoryPage() {

    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="min-h-screen relative"
            style={{
                background: "radial-gradient(ellipse 90% 90% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
            }}>
            <Navbar />
            <CategoryContent />
            <Footer />
        </div>
    )
}

// array for box content
const array = [
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
    }
]

// category page content
function CategoryContent() {
    // use navigate for quiz page navigation
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center gap-6 pt-14 pb-8 w-full h-full font-poppins
        bg-orange-100 dark:bg-transparent text-stone-800 dark:text-white">
            <h1 data-aos="fade-down" className="font-bold text-center mt-8 mb-4 pb-8 border-white/30 border-b-2 w-[75%]
            a:text-6xl b:text-5xl d:text-4xl d:px-4">Choose Quiz Category</h1>

            <div className="pb-10 px-5 mb-12 flex-wrap flex justify-center flex-row min-[500px]:gap-6 max-[500px]:gap-4
            a:pt-5 b:pt-5 d:pt-8">
                {array.map((arr, idx) => (
                    <div className="flex flex-col justify-center border-2 py-5 px-5 rounded-lg min-[1250px]:w-96 max-[1250px]:w-80
                    max-[1050px]:w-96 max-[850px]:w-80 max-[700px]:w-full
                    border-stone-600 dark:border-gray-500 text-stone-800 dark:text-white" key={idx} data-aos="fade-up">
                        <h2 className="text-[22px] font-bold flex flex-row gap-3 mb-2 items-center">{arr.title}
                            <div className={arr.color}>{arr.icon}</div>
                        </h2>

                        <h4 className="min-[500px]:mt-2.5 max-[500px]:mt-2 tracking-wide mb-2">{arr.description}</h4>

                        <p className="min-[500px]:mt-2.5 max-[500px]:mt-2 tracking-wide mb-1">{arr.info}</p>

                        <button
                            className="rounded-md p-1.5 mt-3
                            bg-stone-600 dark:bg-gray-800 hover:bg-stone-700 dark:hover:bg-gray-900 text-orange-50
                            dark:text-white"
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