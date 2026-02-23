import { reviews } from "../constants"
import { star } from "../assets/icons"

const CustomersReviews = () => {
  return (
    <div>
      
      <div className="text-center">

        <h1 className="font-palanquin font-bold text-4xl">
          What Our 
          <span className="text-coral-red"> Customers </span>
          Say?
        </h1>

        <p className="font-montserrat text-slate-gray text-lg mt-5">
          Hear genuine stories from our satisfied 
          customers about their exceptional experiences with us.
        </p>
        
      </div>

        {/* customers reviews */}
        <div className="mt-25 max-md:mt-20 flex justify-between max-md:flex-col max-md:gap-y-20 max-md:items-center ">
          {reviews.map((review, index) => (
            <div key={index} className="w-2/5 max-md:w-full flex flex-col items-center text-center">
              <img  
                src= {review.imgURL} 
                alt="customer profile" 
                className="rounded-full w-30"
              />
              <p 
                className="font-montserrat text-slate-gray text-lg mt-5"
              >
                {review.feedback}
              </p>

              <div className="flex gap-3 my-3">
                  <img src={star} alt="star"/>
                  <span 
                    className="font-montserrat tracking-wider text-slate-gray"
                  >
                    ({review.rating})
                  </span>
              </div>

              <p className="font-palanquin text-2xl font-bold tracking-[.3px]">{review.customerName}</p>

            </div>
          ))}
        </div>
    </div>
  )
}

export default CustomersReviews