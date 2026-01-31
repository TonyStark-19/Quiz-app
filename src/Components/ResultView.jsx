// import Link
import { Link } from "react-router-dom";

// result view
export default function ResultView({ score, total, answers, showReview, setShowReview }) {
    // percentage
    const percentage = (score / total) * 100;

    return (
        <div className="w-full max-w-4xl animate-in fade-in zoom-in duration-500">
            {!showReview ? (
                <div className="text-center space-y-8 py-10">
                    <div className="relative inline-block">
                        <div className="text-[8rem] md:text-[10rem] font-black text-stone-100 dark:text-gray-900 leading-none">
                            {Math.round(percentage)}%
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white">{score} / {total}</span>
                            <span className="text-stone-500 font-bold uppercase tracking-widest text-sm">Your Score</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-stone-900 dark:text-white">
                            {percentage === 100 ? "Absolute Legend! 🏆" : percentage >= 50 ? "Great Work! 💪" : "Keep Learning! 🚀"}
                        </h2>
                        <p className="text-stone-500 dark:text-gray-400">You've completed the challenge. Here's how you performed.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <button onClick={() => window.location.reload()} className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold
                        rounded-2xl transition-all shadow-lg shadow-amber-200 dark:shadow-none">Retry Quiz</button>

                        <button onClick={() => setShowReview(true)} className="px-8 py-4 bg-stone-900 dark:bg-gray-800 text-white font-bold
                        rounded-2xl transition-all">Review Answers</button>

                        <Link to="/pages/category" className="px-8 py-4 bg-white dark:bg-transparent border-2 border-stone-200 dark:border-gray-800
                        text-stone-700 dark:text-gray-300 font-bold rounded-2xl transition-all hover:bg-stone-50 dark:hover:bg-gray-900 text-center">
                            Try More Categories</Link>
                    </div>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="flex justify-between items-center my-10">
                        <h2 className="text-3xl font-black text-stone-900 dark:text-white">Review</h2>
                        <button onClick={() => setShowReview(false)} className="text-amber-600 dark:text-indigo-400 font-bold">Back to Summary</button>
                    </div>
                    <div className="grid gap-4">
                        {answers.map((ans, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-gray-900/40 border border-stone-200 dark:border-gray-800 backdrop-blur-sm">
                                <p className="font-bold text-stone-900 dark:text-white mb-4">Q{i + 1}. {ans.question}</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className={`p-3 rounded-xl border
                                        ${ans.isCorrect ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400'
                                            : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'}`}>
                                        <span className="text-[10px] uppercase font-black block mb-1">Your Answer</span>
                                        {ans.selected}
                                    </div>

                                    {!ans.isCorrect && (
                                        <div className="p-3 rounded-xl border bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20
                                        dark:border-blue-800 dark:text-blue-400">
                                            <span className="text-[10px] uppercase font-black block mb-1">Correct Answer</span>
                                            {ans.correct}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}