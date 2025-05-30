// import Navbar
import { Navbar } from "./home";

export default function CategoryPage() {
    return (
        <div className="containerh-screen">
            <Navbar />
            <CategoryContent />
        </div>
    )
}

// category page content
function CategoryContent() {
    return (
        <div className="content flex justify-center items-center flex-col gap-6 pt-10 w-full h-full bg-orange-50 dark:bg-gray-950  text-stone-800 dark:text-white">\
            <h1 className="text-5xl font-bold text-center">Choose Quiz Category</h1>

            <div className="box-wrap pt-5 flex justify-center flex-row gap-4">
                <div className="flex justify-center items-center box w-48 border-2 pt-2 pb-2 border-gray-500 rounded-md">
                    <h2 className="text-3xl font-bold">HTML</h2>
                </div>
            </div>
        </div>
    )
}