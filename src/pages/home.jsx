// use effect
import { useEffect } from 'react';

// router
import { Link } from 'react-router-dom';

// import components
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';

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
                background: "radial-gradient(ellipse 90% 90% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
            }}>
            <Navbar />
            <div className="flex justify-center items-center">
                <Content />
            </div>
            <Footer />
        </div>
    )
}

// content
function Content() {
    return (
        <div className="z-1 w-full h-full font-poppins mt-32
         bg-orange-100 dark:bg-transparent text-stone-800 dark:text-white">
            <div className='flex justify-center items-center flex-col gap-5
            c:px-5 d:px-0'>
                <h1 className="font-bold text-center mb-1
                a:text-7xl b:text-6xl c:text-5xl d:text-4xl" data-aos="fade-up" data-aos-delay="200">Quiz App!</h1>

                <h2 className="text-center font-semibold w-full mb-1
                c:text-3xl d:text-2xl" data-aos="fade-up" data-aos-delay="300">Test Your Knowledge. Learn Something New.</h2>

                <p className="text-center text-xl w-[40%] tracking-wide mb-1" data-aos="fade-up" data-aos-delay="400">
                    Welcome to the ultimate quiz experience powered by React and Tailwind CSS.
                    Whether you're brushing up on skills or just having fun, this app helps you learn, compete, and grow.
                </p>

                <Link to="/pages/category" data-aos="fade-up" data-aos-delay="500">
                    <button className="py-2 px-6 text-lg rounded-xl
                    border-2 border-stone-700 dark:border-gray-800 hover:bg-stone-700
                    hover:text-orange-50 hover:dark:bg-gray-800
                    text-stone-800 dark:text-white bg-transparent dark:bg-transparent">Get Started</button>
                </Link>
            </div>
        </div>
    )
}