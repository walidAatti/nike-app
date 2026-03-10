import HomeProductsList from "../components/Home/HomeProductsList"
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";


const NikeBrand = ({sneakers}) => {

  const nikeSneakers = sneakers.filter(sneaker => sneaker.brand === "Nike").slice(0, 4)

  return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <h2 className='font-bold text-xl font-palanquin'>Nike</h2>
                <Link to="/nike-app/Nike" className="flex items-center gap-1 text-slate-gray font-palanquin hover:underline underline-offset-2 hover:text-black">
                    <p>See All</p>
                    <MdKeyboardArrowRight />
                </Link>
                
            </div>

            {/* products */}
            <HomeProductsList sneakers={nikeSneakers} />
        </div>
    )
}

export default NikeBrand