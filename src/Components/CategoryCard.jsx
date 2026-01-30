// import useNavigate
import { useNavigate } from "react-router-dom";

// category card
export default function CategoryCard({ item, delay }) {
    const navigate = useNavigate();
    const slug = item.title.toLowerCase().replace(/[^a-z0-9]/g, "");

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="group relative p-6 rounded-3xl bg-white dark:bg-gray-900/40 border border-stone-200 dark:border-gray-800 
                       hover:border-amber-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 
                       hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-indigo-500/10 hover:-translate-y-2 flex flex-col"
        >
            {/* Icon Header */}
            <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center text-2xl bg-stone-100 dark:bg-gray-800 ${item.color}
            group-hover:scale-110 transition-transform`}>
                {item.icon}
            </div>

            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">{item.title}</h3>

            <p className="text-stone-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
            </p>

            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-stone-100 dark:bg-gray-800 text-stone-500
                    dark:text-gray-400">
                        {item.info.split('|')[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-amber-100 dark:bg-indigo-900/40 text-amber-700
                    dark:text-indigo-300">
                        {item.info.split('|')[1]}
                    </span>
                </div>

                <button
                    onClick={() => navigate(`/quiz/${slug}`)}
                    className="w-full py-3 rounded-xl font-bold text-sm transition-all
                               bg-stone-900 dark:bg-white text-white dark:text-black
                               hover:bg-amber-600 dark:hover:bg-indigo-500 dark:hover:text-white"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
}