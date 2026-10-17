import { Link } from "react-router-dom";
import photoCard from "../assets/new images/photo_card.webp";

const CardPhoto = ({ photo, photoMobile }) => {
  const photo_id =
    photo === photoCard
      ? "019afff5-7151-7f39-81bb-90f88760c718"
      : "b010e0ef-d753-4573-92d0-5f581a38575f";

  return (
    <div>
      <div className="relative">
        <Link to={`/products/${photo_id}`} className="group">
        
          {/* <div
            className="absolute bottom-8 left-8 text-[14px] font-montserrat 
                    opacity-80  bg-white rounded-md p-2 cursor-pointer hover:opacity-70 transition duration-150"
          >
            See Details
          </div> */}
        

        <div>
          <img
            src={photo}
            alt="Photo Card"
            className="hidden md:block w-full object-cover object-center"
          />
          <img
            src={photoMobile}
            alt="Photo Card"
            className="block md:hidden w-full object-cover object-center"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors 
          duration-300 group-hover:bg-black/15" 
          />

        </Link>
      </div>
    </div>
  );
};

export default CardPhoto;
