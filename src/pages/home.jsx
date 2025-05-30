// router
import { Link } from 'react-router-dom';

// home page
export default function Home() {
    return (
        <div className="container h-screen">
            <Navbar />
            <Content />
        </div>
    )
}

// navbar
export function Navbar() {
    return (
        <div className="navbar fixed z-3 w-full bg-red-300 p-4">
            <div className="head text-2xl font-semibold">Quiz App</div>
        </div>
    )
}

// content
function Content() {
    return (
        <div className="content flex justify-center items-center flex-col gap-6 pt-10 h-full">
            <h1 className="text-7xl font-bold text-center">Quiz App!</h1>
            <h2 className="text-4xl text-center font-semibold">Test Your Knowledge. Learn Something New.</h2>
            <p className="text-center text-xl max-w-xl">
                Welcome to the ultimate quiz experience powered by React and Tailwind CSS. Whether you're brushing up on skills or just having fun, this app helps you learn, compete, and grow.
            </p>
            <Link to="/pages/category">
                <button className="bg-purple-300 pt-2 pb-2 pr-3 pl-3 text-lg rounded-md">Get Started</button>
            </Link>
        </div>
    )
}