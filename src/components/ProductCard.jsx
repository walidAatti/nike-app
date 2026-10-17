import { IoHeart } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";


const ProductCard = ({ sneaker, isPriceSorted, favourites = [], setFavourites, relatedProductId, isRelated}) => {

    const isFavourite = favourites.includes(sneaker.id)
    // image state
    const fallbackImage = "https://placehold.co/400x400/FFFFFF/9CA3AF.png?text=Image+Unavailable";
    // toggle favorite
    const toggleFavorite = sneaker => {
        if (favourites.find(favourite => favourite === sneaker.id)) {
            setFavourites(favourites.filter(favourite => favourite !== sneaker.id))

        } else {
            setFavourites([sneaker.id,...favourites])
        }
    }

    // toggle favorite
    const toggleFavoriteRelated = relatedProductId => {
        if (favourites.find(favourite => favourite === relatedProductId)) {
            setFavourites(favourites.filter(favourite => favourite !== relatedProductId))

        } else {
            setFavourites([relatedProductId,...favourites])
        }
    }

    const price = sneaker.avg_price.toFixed(2)
    return (
        <div className="relative border shadow-xl rounded-xl pt-4 overflow-hidden border-gray-300 hover:border-2  hover:border-coral-red transition">
            <button 
                onClick={(e) => {
                    e.preventDefault()
                    isRelated ? toggleFavoriteRelated(relatedProductId) : toggleFavorite(sneaker)
                }}
                className={`absolute top-2 right-2 text-xl text-coral-red cursor-pointer`}>
                    {isFavourite ? <IoHeart/> : <IoMdHeartEmpty/>}
            </button>
            
            {/* image fallback */}
            <div className="h-50 flex items-center justify-center">
                <img
                    src={sneaker.image || fallbackImage}
                    alt={sneaker.title}
                    className="w-4/5 h-full object-contain"
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackImage;
                    }}
                />
            </div>
            
            <div className="p-4 space-y-1">
                <p className="line-clamp-1 font-montserrat max-sm:text-[16px]">{sneaker.title }</p>
                <p className="text-sm font-palanquin text-slate-gray line-clamp-1">{sneaker.brand}</p>
                <p className="font-palanquin font-bold text-lg max-sm:text-[16px]">${price}</p>
                
                {isPriceSorted &&
                    <p className="font-montserrat max-sm:text-sm">
                        Weekly Orders: 
                        <span className="font-bold text-slate-gray text-lg max-sm:text-sm"> {sneaker.weekly_orders}</span>
                    </p> 
                }
            </div>
        </div>
    )
}

export default ProductCard