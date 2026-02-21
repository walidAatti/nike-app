import { Link } from "react-router-dom"
import { shoe8 } from "../assets/images"

const QualityProducts = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col">
      {/* left side */}
      <div className="lg:w-2/5 w-3/5">
        <p className="font-palanquin font-bold text-5xl leading-13">We Provide You 
        <span className="text-coral-red "> Super Quality </span> 
          Shoes
        </p>

        <p className="text-slate-gray font-montserrat text-lg my-5">
          Ensuring premium comfort and style, 
          our meticulously crafted footwear is designed to elevate 
          your experience, providing you with unmatched quality, 
          innovation, and a touch of elegance.
        </p>

        <p className="text-slate-gray font-montserrat text-lg mb-10">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <Link to={'/products'}
            className="rounded-full py-3 px-6 text-lg text-white font-montserrat bg-coral-red hover:bg-[#e75747] transition-colors w-fit">
              View Details
        </Link>
      </div>
      
      {/* right side */}
      <div className="max-lg:mt-15">
        <img src={shoe8} alt="super quality shoe" width={570} height={522}/>
      </div>

    </div>
    
  )
}

export default QualityProducts