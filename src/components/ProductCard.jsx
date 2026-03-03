
const ProductCard = ({ sneaker,isPriceSorted }) => {
    const price = sneaker.avg_price.toFixed(2)
    return (
        <div className="border shadow-xl rounded-xl pt-4 overflow-hidden border-gray-300 hover:border-2  hover:border-coral-red transition">
            <img src={sneaker.image} alt="sneaker image" width={400} className="w-4/5 mx-auto"/>
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