// use effect
import { useEffect } from 'react';

// router
import { Link } from 'react-router-dom';

// import components
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import StatCard from '../Components/StatCard';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import quiz data
import { quizData } from './quizdata';

// home page
export default function Home() {

    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quad'
        });
    }, []);

    return (
        <div className="min-h-screen w-full selection:bg-amber-200 dark:selection:bg-indigo-500
            bg-white dark:bg-[#030712] transition-colors duration-500">

            {/* Background Decorative Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-100/50 dark:bg-indigo-950/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/50 dark:bg-purple-950/20 blur-[120px]" />
            </div>

            <div className="relative z-50">
                <Navbar />
            </div>

            <main className="relative pt-20">
                <Hero />
            </main>

            <Footer />
        </div>
    )
}

// hero content
function Hero() {

    // total topics
    const totalTopics = Object.keys(quizData).length;
    // To get the total number of questions across all categories:
    const totalQuestions = Object.values(quizData).reduce((acc, curr) => acc + curr.length, 0);

    return (
        <section className="container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
            <div className="max-w-4xl w-full text-center space-y-8">

                {/* Badge */}
                <div data-aos="fade-down" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-200 bg-amber-50
                dark:bg-indigo-950/30 dark:border-indigo-800 text-amber-700 dark:text-indigo-300 text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    Built with MERN Stack & Tailwind CSS
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-stone-900 dark:text-white"
                    data-aos="zoom-y-out" data-aos-delay="100">
                    Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 dark:from-indigo-400
                    dark:to-cyan-400">Knowledge</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-stone-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    data-aos="fade-up" data-aos-delay="200">
                    Master the most in-demand technologies with precision-crafted quizzes.
                    From <span className="text-stone-900 dark:text-white font-semibold">React internals</span> to
                    <span className="text-stone-900 dark:text-white font-semibold"> Backend architecture</span>
                    —test your skills across{totalTopics} specialized categories.
                </p>

                {/* CTA Buttons */}
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    data-aos="fade-up" data-aos-delay="300">

                    {/* Primary CTA */}
                    <Link to="/pages/category">
                        <button className="group relative px-8 py-4 bg-stone-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl
                        overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-stone-200 dark:shadow-none">
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100
                            transition-opacity duration-300" />
                        </button>
                    </Link>

                    {/* Secondary CTA */}
                    <button
                        onClick={() => window.location.href = 'mailto:your-email@example.com?subject=Quiz Category Suggestion'}
                        className="px-8 py-4 bg-white dark:bg-transparent border-2 border-stone-200 dark:border-gray-800 text-stone-700
                        dark:text-gray-300 font-bold rounded-2xl hover:bg-stone-50 dark:hover:bg-gray-900 transition-all flex items-center gap-2"
                    >
                        Suggest Categories
                    </button>
                </div>

                {/* Floating Stats/Features */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-16 max-w-3xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="400">

                    {/* Total individual questions in your database */}
                    <StatCard label="Active Questions" value={`${totalQuestions}+`} />

                    <StatCard label="Interview Ready" value="100%" />

                    {/* The actual number of categories available */}
                    <StatCard
                        label="Topics Covered"
                        value={totalTopics}
                        className="col-span-2 md:col-span-1"
                    />
                </div>
            </div>
        </section>
    )
}