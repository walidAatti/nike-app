import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


const Categories = () => {
    const categories = ["Lifestyle", "Performance", "Boots", "Slides & Sandals"]
    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <h2 className='font-bold text-xl font-palanquin'>Shop by Category</h2>
                <Link to="/nike-app/products" className="flex items-center gap-1 text-slate-gray font-palanquin hover:underline underline-offset-2 hover:text-black">
                    <p>See All</p>
                    <MdKeyboardArrowRight />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
                <Link key={index} to={category !== "Slides & Sandals" ? `/nike-app/products?category=${category}` : `/nike-app/products?category=${"Slides+%26+Sandals"}`}>
                    <div key={index} className='rounded-lg font-boldonse text-gray-500 text-center 
                h-62.5 flex items-center justify-center bg-gray-200 text-xl
                hover:scale-105 transition duration-200 cursor-pointer hover:text-black'
                >
                    {category}
                </div>
                </Link>
            ))}
        </div>
        </div>
    )
}

export default Categories