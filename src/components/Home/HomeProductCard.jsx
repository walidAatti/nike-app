const HomeProductCard = ({ sneaker }) => {

    const price = sneaker.avg_price.toFixed(2)
    const fallbackImage = "https://placehold.co/400x400/FFFFFF/9CA3AF.png?text=Image+Unavailable";

        return (
            <div className="relative  rounded-xl pt-4 border-gray-300 hover:border-2 hover:border-coral-red transition aspect-video">

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
                </div>
            </div>
    )
}

export default HomeProductCard