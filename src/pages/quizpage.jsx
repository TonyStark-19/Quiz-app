// import use params
import { useParams } from 'react-router-dom';

// import use state
import { useState, useEffect } from 'react';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import quizdata
import { quizData } from './quizdata';

// import Navbar
import { Navbar } from "./home";

// router
import { Link } from 'react-router-dom';

// quiz page
export default function QuizPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="container min-h-screen">
            <Navbar />
            <Quiz />
        </div>
    )
}

// quiz
function Quiz() {
    const { category } = useParams();
    const questions = quizData[category];
    const [current, setCurrent] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // if category is incorrect
    if (!questions) {
        return <div className="p-10 text-red-600 text-2xl">Category not found</div>;
    }

    // to handle selected options
    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    // to handle next question
    const handleNext = () => {
        if (questions[current].options[selectedOption] === questions[current].answer) {
            setScore(score + 1);
        }

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    // to show result
    if (showResult) {
        return (
            <div className="quiz-page text-center flex justify-center items-center flex-col min-h-screen 
             bg-orange-100 dark:bg-gray-950 text-stone-800 dark:text-white">
                <h1 className="text-5xl font-bold capitalize mb-6" data-aos="fade-down">{category} Quiz</h1>

                <p className="text-2xl" data-aos="fade-up">🎉 Quiz Completed!</p>
                <p className="text-xl mt-4" data-aos="fade-up" data-aos-delay="200">
                    Your Score: <span className="font-semibold text-orange-400">{score}</span> / {questions.length}
                </p>

                <p className="mt-6 text-xl text-stone-800 dark:text-white" data-aos="fade-in" data-aos-delay="400">
                    {score === questions.length
                        ? "Excellent! You nailed it! 🏆"
                        : score >= questions.length / 2
                            ? "Great effort! Keep practicing. 💪"
                            : "Don't worry! Try again to improve your score. 🚀"}
                </p>

                <div className="mt-8 flex gap-4" data-aos="zoom-in" data-aos-delay="600">
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
                    >
                        Retry Quiz
                    </button>

                    <Link to="/pages/category">
                        <button
                            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
                        >
                            Take more quiz
                        </button>
                    </Link>
                </div>
            </div>
        );
    }


    // tracking current question
    const currentQuestion = questions[current];

    return (
        <div className="quiz-page pt-32 flex items-center flex-col h-screen
           bg-orange-100 dark:bg-gray-950 text-stone-800 dark:text-white">
            <h1 data-aos="fade-down" className="text-5xl font-bold capitalize mb-10">{category} Quiz</h1>
            <div data-aos="fade-up" className="border border-stone-700 dark:border-white py-6 px-7 rounded-lg w-full max-w-xl">
                <p className="text-2xl mb-4 font-semibold">
                    {current + 1}. {currentQuestion.question}
                </p>

                {currentQuestion.options.map((opt, i) => (
                    <div key={i} className="tracking-wide mb-3">
                        <label className="cursor-pointer text-xl p-3 pl-5 rounded-md 
                        bg-stone-700/95 dark:bg-gray-800 block text-orange-100 dark:text-white
                        dark:hover:bg-gray-800/70 hover:bg-stone-800/90">
                            <input
                                type="radio"
                                name={`q${current}`}
                                checked={selectedOption === i}
                                onChange={() => handleOptionSelect(i)}
                                className="mr-3 cursor-pointer scale-125 accent-orange-300 dark:accent-orange-500"
                            />
                            {opt}
                        </label>
                    </div>
                ))}

                <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className="mt-2 px-4 py-2 w-20 bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-50"
                >
                    {current === questions.length - 1 ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
}