// stat card component
export default function StatCard({ label, value, className = "" }) {
    return (
        <div className={`p-4 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-stone-100 dark:border-gray-800
        backdrop-blur-sm shadow-sm ${className}`}>
            <div className="text-2xl font-bold text-stone-900 dark:text-white">{value}</div>
            <div className="text-sm text-stone-500 dark:text-gray-500 font-medium">{label}</div>
        </div>
    )
}