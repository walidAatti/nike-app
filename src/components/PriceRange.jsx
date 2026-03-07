import { IoIosArrowUp } from "react-icons/io";

const PriceRange = ({minPrice, setMinPrice, maxPrice, setMaxPrice, isPriceOpened, setIsPriceOpened}) => {
    return (
        <div className="border-b border-gray-300 pb-3">
            {/* Title */}
            <div className='font-bold font-montserrat pb-1 flex justify-between items-center'>
                <p className='font-bold font-montserrat'>Price Range</p>
                <div 
                    className='text-3xl me-3 cursor-pointer'
                    onClick={() => {
                        setIsPriceOpened(!isPriceOpened);
                    }}
                >
                    <p className={`text-slate-gray transition duration-300 ${!isPriceOpened && "rotate-180"}`}>
                        <IoIosArrowUp />
                    </p>
                </div>
            </div>

            {/* Inputs */}
            <div className={`space-y-3 ${!isPriceOpened && "hidden"}`}>
                {/* Min Price */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="minPrice" className="text-sm text-slate-gray">
                        Min Price
                    </label>
                    <input 
                        type="number" 
                        id="minPrice"
                        min={minPrice}
                        onChange={(e) => {
                            setMinPrice(Number(e.target.value));
                        }}
                        placeholder="0"
                        className="border border-gray-300 rounded-lg p-2 text-sm"
                    />
                </div>

                {/* Max Price */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="maxPrice" className="text-sm text-slate-gray">
                        Max Price
                    </label>
                    <input 
                        type="number" 
                        max={maxPrice}
                        id="maxPrice"
                        
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        placeholder="5000"
                        className="border border-gray-300 rounded-lg p-2 text-sm"
                    />
                </div>

                {/* Display Range */}
                <div className="pt-2 text-sm text-slate-gray">
                    ${minPrice} - ${maxPrice}
                </div>
            </div>
        </div>
    )
}

export default PriceRange