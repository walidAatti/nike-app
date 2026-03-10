import BrandCard from "../components/BrandCard";
import { Link } from "react-router-dom";
import HomeBrandCard from "../components/Home/HomeBrandCard";
import { logoAdidas, logoNike, logoAsics, logoAirJordan} from  "../assets/brands"
import { MdKeyboardArrowRight } from "react-icons/md";
const Brands = () => {

  const brands = [["Nike", logoNike], ["adidas", logoAdidas], ["Jordan", logoAirJordan], ["ASICS", logoAsics]];

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className='font-bold text-xl font-palanquin'>Top Brands</h2>
        <Link to="/nike-app/brands" className="flex items-center gap-1 text-slate-gray font-palanquin hover:underline underline-offset-2 hover:text-black">
            <p>See All</p>
            <MdKeyboardArrowRight />
        </Link>
      </div>

      {/* brand cards */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

        {brands.map((brand, index) => (
          <div key={index}>
            <Link to={`/nike-app/brands/${brand[0]}`} >
              <HomeBrandCard brand={brand} />
            </Link>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Brands