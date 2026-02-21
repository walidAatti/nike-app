import { Link } from "react-router-dom"
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-15 items-center">
      {/* offer photo */}
      <div>
        <img src={offer} alt= "offer" height={687} width={773}/>
      </div>

      {/* offer description */}
      <div className="max-lg: mb-12 lg:w-3/5">

        <h1 className="font-palanquin font-bold text-4xl">
          <span className="text-coral-red">Special </span>
          Offer
        </h1>

        <p className="font-montserrat text-slate-gray text-lg mt-5">
          Embark on a shopping journey that redefines your experience with 
          unbeatable deals. From premier selections to incredible savings, 
          we offer unparalleled value that sets us apart.
        </p>

        <p className="font-montserrat text-slate-gray text-lg mt-5 mb-8">
          Navigate a realm of possibilities designed to fulfill your 
          unique desires, surpassing the loftiest expectations. 
          Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex gap-4 ">

            {/* shop now */}
            <Link to={'/products'}
              className="w-fit whitespace-nowrap flex gap-4 rounded-full py-3 px-6 text-lg text-white font-montserrat bg-coral-red hover:bg-[#e75747] transition-colors">
                Shop now
              <img src={arrowRight} alt="arrow"/>
            </Link>

            {/* learn more */}
            <Link to={'/products'}
              className="w-fit rounded-full py-3 px-6 text-lg font-montserrat border border-slate-gray hover:outline outline-gray-500">
                Learn More
            </Link>

        </div>

      </div>
    </div>
  )
}

export default SpecialOffer