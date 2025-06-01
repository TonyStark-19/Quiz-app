// import use params
import { useParams } from 'react-router-dom';

// import use state
import { useState } from 'react';

// import quizdata
import { quizData } from './quizdata';

// import Navbar
import { Navbar } from "./home";

// quiz page
export default function QuizPage() {
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
            <div className="quiz-page p-10 pt-36 text-center flex items-center flex-col h-screen
             bg-gray-950 text-white">
                <h1 className="text-5xl font-bold capitalize mb-6">{category} Quiz</h1>
                <p className="text-2xl">Quiz Completed!</p>
                <p className="text-xl mt-4">Your Score: {score} / {questions.length}</p>
            </div>
        );
    }

    // tracking current question
    const currentQuestion = questions[current];

    return (
        <div className="quiz-page pt-32 flex items-center flex-col h-screen
           bg-orange-100 dark:bg-gray-950 text-stone-800 dark:text-white">
            <h1 className="text-5xl font-bold capitalize mb-10">{category} Quiz</h1>
            <div className="border border-stone-700 dark:border-white py-6 px-7 rounded-lg w-full max-w-xl">
                <p className="text-2xl mb-4 font-semibold">
                    {current + 1}. {currentQuestion.question}
                </p>

                {currentQuestion.options.map((opt, i) => (
                    <div key={i} className="tracking-wide mb-3">
                        <label className="cursor-pointer text-xl p-3 pl-5 rounded-md 
                        bg-stone-600 dark:bg-gray-800 block text-orange-100 dark:text-white">
                            <input
                                type="radio"
                                name={`q${current}`}
                                checked={selectedOption === i}
                                onChange={() => handleOptionSelect(i)}
                                className="mr-3 scale-125 accent-orange-300 dark:accent-orange-500"
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