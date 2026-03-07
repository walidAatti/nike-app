import { star } from "../assets/icons"
import { products } from "../constants"
import { arrowRight } from "../assets/icons"
import { Link } from "react-router-dom"



const PopularProducts = () => {
  const randomRating = Math.random() + 4
  return (
    <div >
      <h1 className="text-5xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</h1>
      <p className="mt-5 text-slate-gray leading-6 font-montserrat">Experience top-notch quality and style with our 
        sought-after selections. Discover a world of comfort, design, and value</p>
      {/* products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10 mt-15">
          {products.map((product,index) => (
            <div 
              key={index}
              className="text-lg"
            >
              <img src={product.imgURL} alt="product image"/>
              <div className="flex gap-3 mt-4">
                <img src={star} alt="star"/>
                <span className="font-montserrat tracking-wider text-slate-gray">({randomRating.toFixed(1)})</span>
              </div>
              <p className="mt-2 font-bold font-palanquin">{product.name}</p>
              <p className="mt-1 font-montserrat text-coral-red">{product.price}</p>
            </div>
          ))}
      </div>

      <Link to={'/nike-app/products'}
          className="mt-10 rounded-full py-3 px-6 text-lg text-white font-montserrat bg-coral-red flex gap-4 hover:bg-[#e75747] transition-colors w-fit mx-auto">
            See More
            <img src={arrowRight} alt="arrow" />
      </Link>

    </div>
  )
}

export default PopularProducts