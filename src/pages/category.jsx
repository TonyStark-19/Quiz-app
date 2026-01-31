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
        slug: "c",
        description: "Master pointers, memory management, and the maximal munch rule in foundational C programming.",
        info: "10 Questions | Placement Prep",
        icon: <FaCode />,
        color: "text-gray-500"
    },
    {
        title: "Cpp",
        slug: "cpp",
        description: "Test your knowledge of STL containers, virtual functions, and runtime polymorphism.",
        info: "12 Questions | Intermediate Level",
        icon: <TbBrandCpp />,
        color: "text-red-500"
    },
    {
        title: "OOPS Concept",
        slug: "oops",
        description: "Deep dive into the 4 pillars: Abstraction vs Encapsulation and Composition vs Inheritance.",
        info: "10 Questions | Theory + Conceptual",
        icon: <FaCode />,
        color: "text-blue-600"
    },
    {
        title: "HTML",
        slug: "html",
        description: "Focus on Semantic HTML5, Accessibility (A11y), and metadata for modern web structure.",
        info: "10 Questions | Web Standards",
        icon: <FaHtml5 />,
        color: "text-orange-500"
    },
    {
        title: "CSS",
        slug: "css",
        description: "Challenge your skills on Specificity, the Box Model, and modern Responsive Design.",
        info: "10 Questions | Layout Logic",
        icon: <FaCss3Alt />,
        color: "text-blue-500"
    },
    {
        title: "JavaScript",
        slug: "javascript",
        description: "Advanced JS: Closures, Event Loop, Promises, and the nuances of Type Coercion.",
        info: "12 Questions | Technical Round",
        icon: <IoLogoJavascript />,
        color: "text-yellow-500"
    },
    {
        title: "React JS",
        slug: "react",
        description: "Master Reconciliation, the Virtual DOM, and optimization hooks like useMemo and useCallback.",
        info: "10 Questions | Frontend Expert",
        icon: <RiReactjsFill />,
        color: "text-cyan-500"
    },
    {
        title: "Bootstrap",
        slug: "bootstrap",
        description: "Breakpoints, the 12-column grid system, and utility-first layout transitions.",
        info: "10 Questions | UI Frameworks",
        icon: <FaBootstrap />,
        color: "text-violet-600"
    },
    {
        title: "Tailwind CSS",
        slug: "tailwind",
        description: "Utility-first design, JIT engine, and mobile-first breakpoint strategies.",
        info: "10 Questions | Modern Styling",
        icon: <RiTailwindCssFill />,
        color: "text-teal-500"
    },
    {
        title: "Git & GitHub",
        slug: "git",
        description: "Workflow mastery: Staging, Merging vs Rebasing, and PR collaboration.",
        info: "10 Questions | Version Control",
        icon: <FaGithub />,
        color: "text-gray-700"
    },
    {
        title: "Node.js",
        slug: "nodejs",
        description: "Backend architecture: Event Loop, Libuv, Streams, and Non-blocking I/O.",
        info: "10 Questions | Runtime Expert",
        icon: <FaNodeJs />,
        color: "text-green-600"
    },
    {
        title: "Express.js",
        slug: "expressjs",
        description: "RESTful API design, Middleware Request-Response cycle, and Error Handling.",
        info: "10 Questions | API Architecture",
        icon: <SiExpress />,
        color: "text-amber-500 dark:text-stone-300"
    },
    {
        title: "MongoDB",
        slug: "mongodb",
        description: "NoSQL patterns: BSON, Aggregation Pipelines, and Database Indexing.",
        info: "10 Questions | NoSQL Database",
        icon: <SiMongodb />,
        color: "text-green-500"
    },
    {
        title: "Java",
        slug: "java",
        description: "Explore JVM architecture, Garbage Collection, and the Java Collection Framework.",
        info: "10 Questions | Corporate Level",
        icon: <FaJava />,
        color: "text-orange-700"
    },
    {
        title: "Python",
        slug: "python",
        description: "GIL, List Comprehensions, Generators, and the foundation of Data Science.",
        info: "10 Questions | AI/ML Ready",
        icon: <FaPython />,
        color: "text-blue-400"
    },
    {
        title: "SQL",
        slug: "sql",
        description: "Relational mastery: Joins, Normalization, and the ACID properties of transactions.",
        info: "10 Questions | RDBMS Expert",
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
                    <header className="mb-16 mt-10 text-center" data-aos="fade-down">
                        <h1 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white mb-4">
                            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600
                            dark:from-indigo-400 dark:to-cyan-400">Challenge</span>
                        </h1>
                        <p className="text-stone-500 dark:text-gray-400 max-w-xl mx-auto">
                            Pick a category to test your skills. Each quiz is designed to simulate real-world interview questions.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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