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
        <div className="h-screen w-full
            bg-[radial-gradient(125%_125%_at_50%_90%,#ffffff_35%,#f59e0b_100%)]
            dark:bg-[radial-gradient(ellipse_90%_90%_at_50%_0%,rgba(120,180,255,0.25)_0%,transparent_70%)] dark:bg-black">
            <div className="fixed w-full">
                <Navbar />
            </div>
            <Content />
            <Footer />
        </div>
    )
}

// content
function Content() {
    return (
        <div className="w-full h-full flex justify-center items-center font-poppins text-stone-800 dark:text-white">
            <div className='flex justify-center items-center flex-col gap-5 c:px-5 d:px-0'>
                <h1 className="font-bold text-center mb-1 e:text-7xl a:text-6xl b:text-5xl d:text-4xl"
                    data-aos="fade-up" data-aos-delay="200">Quiz App!</h1>

                <h2 className="text-center font-semibold w-full mb-1 e:text-3xl d:w-[80%] d:text-[20px]"
                    data-aos="fade-up" data-aos-delay="300">Test Your Knowledge. Learn Something New.</h2>

                <p className="text-center text-xl tracking-wide mb-1 e:text-xl d:text-[16px] e:w-[40%] a:w-[50%]
                b:w-[60%] d:w-[70%]" data-aos="fade-up" data-aos-delay="400">
                    Welcome to the ultimate quiz experience powered by React and Tailwind CSS.
                    Whether you're brushing up on skills or just having fun, this app helps you learn, compete, and grow.
                </p>

                <Link to="/pages/category" data-aos="fade-up" data-aos-delay="500">
                    <button className="py-2 px-6 text-lg rounded-xl border-2 border-stone-700 dark:border-gray-800
                    hover:bg-stone-700 hover:text-white hover:dark:bg-gray-800 text-stone-800 dark:text-white
                    bg-transparent">Get Started</button>
                </Link>
            </div>
        </div>
    )
}