// footer
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 mt-auto border-t border-stone-200/60 dark:border-gray-800/50 
            bg-white/30 dark:bg-black/20 backdrop-blur-sm font-poppins">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Copyright/Branding */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="text-stone-500 dark:text-gray-400 text-sm font-medium">
                        © {currentYear} <span className="text-stone-900 dark:text-white">Quizify</span>. All rights reserved.
                    </p>
                </div>

                {/* Main Credit */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100/50 dark:bg-gray-900/50 border
                border-stone-200 dark:border-gray-800">
                    <span className="text-stone-600 dark:text-gray-400 text-sm">
                        Made with <span className="text-red-500 animate-pulse">❤️</span> by
                    </span>
                    <a
                        href="https://github.com/TonyStark-19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-900 dark:text-white hover:text-amber-600 dark:hover:text-indigo-400 transition-colors text-sm font-bold"
                    >
                        Aditya Chandel
                    </a>
                </div>
            </div>
        </footer>
    );
}