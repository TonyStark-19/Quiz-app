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
import { FaCode, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

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
        <div className="min-h-screen w-full relative
            bg-[radial-gradient(125%_125%_at_50%_77%,#ffffff_40%,#f59e0b_100%)]
            dark:bg-[radial-gradient(ellipse_90%_90%_at_50%_0%,rgba(120,180,255,0.25)_0%,transparent_70%)] dark:bg-black">
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
]

// category page content
function CategoryContent() {
    // use navigate for quiz page navigation
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center c:gap-6 d:gap-2 pt-14 pb-8 w-full h-full font-poppins
        text-stone-800 dark:text-white">
            <h1 data-aos="fade-down" className="font-bold text-center mt-8 mb-4 border-stone-800 dark:border-white/30
            border-b-2 w-[75%] e:text-6xl a:text-[50px] b:text-[40px] d:text-[35px] d:px-4 a:pb-8 d:pb-4">Choose Quiz Category</h1>

            <div className="pb-10 px-5 mb-12 flex-wrap flex justify-center flex-row min-[500px]:gap-6 max-[500px]:gap-4
            b:pt-5 d:pt-3">
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
                            bg-stone-600 dark:bg-gray-800 hover:bg-stone-700 dark:hover:bg-gray-900 text-white"
                            onClick={() => navigate(`/quiz/${arr.title.toLowerCase().replace(/[^a-z0-9]/g, "")}`)}
                        >
                            Start Quiz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}