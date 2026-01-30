// import use params
import { useParams } from 'react-router-dom';

// import use state
import { useState, useEffect } from 'react';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import quizdata
import { quizData } from './quizdata';

// import components
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import ResultView from '../Components/ResultView';

// quiz page
export default function QuizPage() {
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#030712] transition-colors duration-500 overflow-x-hidden">
            {/* Background Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-100/30 dark:bg-indigo-950/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/30 dark:bg-purple-950/20 blur-[120px]" />
            </div>

            <Navbar disableNav={!showResult} />

            <main className="flex-grow pt-28 pb-12 px-4 relative z-10 flex flex-col items-center">
                <Quiz showResult={showResult} setShowResult={setShowResult} />
            </main>

            <Footer />
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
    const [answers, setAnswers] = useState([]);
    const [showReview, setShowReview] = useState(false);

    if (!questions) return <div className="p-10 text-red-500 font-bold text-center">Category not found</div>;

    const progress = ((current + 1) / questions.length) * 100;

    const handleNext = () => {
        const isCorrect = questions[current].options[selectedOption] === questions[current].answer;
        setAnswers(prev => [...prev, {
            question: questions[current].question,
            selected: questions[current].options[selectedOption],
            correct: questions[current].answer,
            isCorrect
        }]);

        if (isCorrect) setScore(prev => prev + 1);

        if (current + 1 < questions.length) {
            setCurrent(prev => prev + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return <ResultView
            score={score}
            total={questions.length}
            answers={answers}
            showReview={showReview}
            setShowReview={setShowReview}
        />;
    }

    return (
        <div className="w-full max-w-3xl" data-aos="fade-up">
            {/* Progress Header */}
            <div className="mb-8 space-y-4">
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-sm uppercase tracking-widest font-bold text-stone-500 dark:text-gray-500">
                            {category} Challenge
                        </h2>
                        <h1 className="text-2xl md:text-3xl font-black text-stone-900 dark:text-white">
                            Question {current + 1} <span className="text-stone-400 font-medium">/ {questions.length}</span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-amber-500 dark:text-indigo-400">{Math.round(progress)}%</span>
                    </div>
                </div>
                <div className="h-2 w-full bg-stone-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-600 dark:from-indigo-500 dark:to-cyan-400 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <div className="p-8 md:p-10 rounded-[2rem] bg-white dark:bg-gray-900/40 border border-stone-200 dark:border-gray-800 shadow-xl
            shadow-stone-200/50 dark:shadow-none backdrop-blur-md">
                <p className="text-xl md:text-2xl font-bold text-stone-800 dark:text-white mb-8 leading-relaxed">
                    {questions[current].question}
                </p>

                <div className="space-y-3">
                    {questions[current].options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedOption(i)}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group
                                ${selectedOption === i
                                    ? "border-amber-500 bg-amber-50/50 dark:border-indigo-500 dark:bg-indigo-500/10 text-stone-900 dark:text-white"
                                    : "border-stone-100 dark:border-gray-800 hover:border-stone-300 dark:hover:border-gray-700 text-stone-600 dark:text-gray-400"
                                }`}
                        >
                            <span className="font-semibold text-lg">{opt}</span>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                                ${selectedOption === i ? "border-amber-500 dark:border-indigo-500 bg-amber-500 dark:bg-indigo-500"
                                    : "border-stone-300 dark:border-gray-600"}`}>
                                {selectedOption === i && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className="mt-10 w-full py-4 rounded-2xl font-black text-lg uppercase tracking-widest transition-all
                        bg-stone-900 dark:bg-white text-white dark:text-black
                        hover:scale-[1.02] active:scale-95 disabled:opacity-30 disabled:hover:scale-100 shadow-lg"
                >
                    {current === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                </button>
            </div>
        </div>
    );
}