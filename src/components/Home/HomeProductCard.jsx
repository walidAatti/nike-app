const HomeProductCard = ({ sneaker }) => {

    const price = sneaker.avg_price.toFixed(2)

        return (
            <div className="relative  rounded-xl pt-4 border-gray-300 hover:border-2 hover:border-coral-red transition aspect-video">
    
                <img src={sneaker.image} alt="sneaker image" width={400} className="w-4/5 mx-auto"/>
                <div className="p-4 space-y-1">
                    <p className="line-clamp-1 font-montserrat max-sm:text-[16px]">{sneaker.title }</p>
                    <p className="text-sm font-palanquin text-slate-gray line-clamp-1">{sneaker.brand}</p>
                    <p className="font-palanquin font-bold text-lg max-sm:text-[16px]">${price}</p>
                </div>
            </div>
    )
}

export default HomeProductCard