import { Link } from "react-router-dom"
import HomeProductsList from "../components/Home/HomeProductsList"
import { MdKeyboardArrowRight } from "react-icons/md"

const PopularProducts = ({sneakers}) => {

    const popularSneakers = sneakers.sort((a,b) => b.weekly_orders - a.weekly_orders).slice(0,8);

    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <h2 className='font-bold text-xl font-palanquin'>Popular Products</h2>
                <Link to="/nike-app/products" className="flex items-center gap-1 text-slate-gray font-palanquin hover:underline underline-offset-2 hover:text-black">
                    <p>See All</p>
                    <MdKeyboardArrowRight />
                </Link>

            </div>

            {/* products */}
            <HomeProductsList sneakers={popularSneakers} />
        </div>
    )
}

export default PopularProducts