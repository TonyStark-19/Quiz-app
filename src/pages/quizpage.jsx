// import use params and link
import { useParams, Link } from 'react-router-dom';

// import use state
import { useState, useEffect } from 'react';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import quizdata
import { quizData } from './quizdata';

// import Navbar and footer
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';

// quiz page
export default function QuizPage() {

    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    // Show result
    const [showResult, setShowResult] = useState(false);

    return (
        <div className="min-h-screen w-full relative
            bg-[radial-gradient(125%_125%_at_50%_80%,#ffffff_40%,#f59e0b_100%)]
            dark:bg-[radial-gradient(ellipse_90%_90%_at_50%_0%,rgba(120,180,255,0.25)_0%,transparent_70%)] dark:bg-black">
            <Navbar disableNav={!showResult} />
            <Quiz showResult={showResult} setShowResult={setShowResult} />
            <div className="pt-10">
                <Footer />
            </div>
        </div>
    )
}

// quiz
function Quiz({ showResult, setShowResult }) {
    const { category } = useParams();
    const questions = quizData[category];
    const [current, setCurrent] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);

    // store user's answers
    const [answers, setAnswers] = useState([]);

    // show review answers
    const [showReview, setShowReview] = useState(false);

    // if category is incorrect
    if (!questions) {
        return <div className="p-10 text-red-600 text-2xl">Category not found</div>;
    }

    // to handle selected options
    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    // handle next question
    const handleNext = () => {
        const isCorrect = questions[current].options[selectedOption] === questions[current].answer;

        // 🆕 store selected answer & correctness
        setAnswers(prev => [
            ...prev,
            {
                question: questions[current].question,
                selected: questions[current].options[selectedOption],
                correct: questions[current].answer,
                isCorrect
            }
        ]);

        if (isCorrect) setScore(prev => prev + 1);

        if (current + 1 < questions.length) {
            setCurrent(prev => prev + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    // map short category keys to full names
    const categoryNames = {
        C: "C language",
        oops: "Oops concept",
        bootstrap: "Bootstrap css",
        tailwind: "Tailwind CSS",
        git: "Git & GitHub",
        react: "React.js",
        javascript: "JavaScript",
        html: "HTML",
        nodejs: "Node.js",
        expressjs: "Express.js",
        mongodb: "MongoDB",
        sql: "SQL",
        python: "Python",
        java: "Java",
    };

    // 🧾 SHOW RESULTS + REVIEW SECTION
    if (showResult) {
        return (
            <div className="text-center flex justify-center items-center min-h-screen text-stone-800 dark:text-white">
                <div className='flex justify-center items-center flex-col max-w-3xl w-full px-5'>

                    {/* ✅ Only show result summary when review is NOT visible */}
                    {!showReview && (
                        <div
                            className="w-full flex justify-center items-center flex-col mt-[-100px]"
                        >
                            <h1 className="font-bold capitalize c:text-5xl c:mb-6 d:text-4xl d:mb-4" data-aos="fade-down">
                                {categoryNames[category] || category} Quiz
                            </h1>

                            <p className="c:text-2xl d:text-xl" data-aos="fade-up">🎉 Quiz Completed!</p>

                            <p className="text-xl c:mt-4 d:mt-3" data-aos="fade-up" data-aos-delay="200">
                                Your Score: <span className="font-semibold text-orange-400">{score}</span> / {questions.length}
                            </p>

                            <p className="text-xl text-stone-800 dark:text-white 
                                c:max-w-lg c:w-full c:mt-6 d:mt-4 d:max-w-sm"
                                data-aos="fade-in" data-aos-delay="400">
                                {score === questions.length
                                    ? "Excellent! You nailed it! 🏆"
                                    : score >= questions.length / 2
                                        ? "Great effort! Keep practicing. 💪"
                                        : "Don't worry! Try again to improve your score. 🚀"}
                            </p>

                            {/* ✅ Buttons for retry, more quiz, and review toggle */}
                            <div className="mt-8 flex flex-wrap justify-center gap-4" data-aos="zoom-in" data-aos-delay="600">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-orange-600 hover:bg-orange-700 text-white rounded-md c:px-6 c:py-2 d:px-3 d:py-2"
                                >
                                    Retry Quiz
                                </button>

                                <Link to="/pages/category">
                                    <button
                                        className="bg-gray-700 hover:bg-gray-600 text-white rounded-md c:px-6 c:py-2 d:px-3 d:py-2"
                                    >
                                        Take more quiz
                                    </button>
                                </Link>

                                <button
                                    onClick={() => setShowReview(true)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-md c:px-6 c:py-2 d:px-3 d:py-2"
                                >
                                    Show Review Answers
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ✅ Review Section */}
                    {showReview && (
                        <div
                            className="mt-10 text-left w-full pt-10"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h2 className="a:text-4xl d:text-[28px] text-center font-semibold mb-5 a:pb-5 d:pb-3 border-b-2 border-stone-600 dark:border-white/30">📝 Review Answers</h2>

                            <div className='flex justify-center items-center flex-col'>
                                {answers.map((ans, index) => (
                                    <div
                                        key={index}
                                        className="mb-5 bg-white/10 p-4 rounded-lg border border-stone-600 dark:border-gray-700 a:w-[850px] d:w-full"
                                    >
                                        <p className="font-semibold mb-2">
                                            Q{index + 1}. {ans.question}
                                        </p>
                                        <p
                                            className={`mb-1 ${ans.isCorrect ? "text-green-500" : "text-red-500"}`}
                                        >
                                            Your Answer: {ans.selected}
                                        </p>
                                        {!ans.isCorrect && (
                                            <p className="text-blue-400">
                                                Correct Answer: {ans.correct}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* 🆕 Buttons inside review section */}
                            <div className="mt-4 mb-10 flex flex-wrap justify-center gap-4">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-orange-600 hover:bg-orange-700 text-white rounded-md c:px-6 c:py-2 d:px-3 d:py-2"
                                >
                                    Retry Quiz
                                </button>

                                <Link to="/pages/category">
                                    <button
                                        className="bg-gray-700 hover:bg-gray-600 text-white rounded-md c:px-6 c:py-2 d:px-3 d:py-2"
                                    >
                                        Take more quiz
                                    </button>
                                </Link>

                                <button
                                    onClick={() => setShowReview(false)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-md c:px-6 c:py-2 d:px-3 d:py-2"
                                >
                                    Hide Review
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // tracking current question
    const currentQuestion = questions[current];

    return (
        <div className="a:pt-20 d:pt-16 c:px-5 px-2.5 flex items-center flex-col min-h-screen text-stone-800 dark:text-white">
            <h1 data-aos="fade-down" className="font-bold capitalize border-stone-800 dark:border-white/30 border-b-2
            e:w-[50%] d:w-[80%] text-center e:pb-8 d:pb-4 c:mb-10 e:text-5xl b:text-[40px] d:text-[35px] d:mb-8">
                {categoryNames[category] || category} Quiz</h1>

            <div data-aos="fade-up" className="border-2 border-stone-800 dark:border-white/30 dark:border-white rounded-lg
                e:w-[60%] a:w-[80%] b:w-[85%] d:w-[100%] a:py-5 a:px-6 d:py-4 d:px-5">
                <p className="mb-4 font-semibold b:text-2xl d:text-xl">
                    Q {current + 1} : {currentQuestion.question}
                </p>

                {currentQuestion.options.map((opt, i) => (
                    <div key={i} className="tracking-wide mb-3">
                        <label className="cursor-pointer rounded-md flex items-center bg-stone-600 dark:bg-gray-800
                        text-white dark:text-white dark:hover:bg-gray-800/70 hover:bg-stone-700
                        c:p-3 c:pl-5 d:p-2 d:pl-4 c:text-xl max-c:text-[18px]">
                            <input
                                type="radio"
                                name={`q${current}`}
                                checked={selectedOption === i}
                                onChange={() => handleOptionSelect(i)}
                                className="mr-3 mt-1 cursor-pointer accent-orange-300 dark:accent-orange-500
                                c:scale-125 d:scale-100"
                            />
                            {opt}
                        </label>
                    </div>
                ))}

                <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className="mt-2 px-4 py-2 w-full cursor-pointer uppercase
                    bg-orange-600 text-white rounded-md hover:bg-orange-700 disabled:opacity-50"
                >
                    {current === questions.length - 1 ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
}