import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import PriceRange from "./PriceRange";

const FilterSideBar = ({filteredSneakers, searchParams, setSearchParams, brand}) => {


    const [isCategoryOpened, setIsCategoryOpened] = useState(true);
    const [isBrandOpened, setIsBrandOpened] = useState(true);
    const [isGenderOpened, setIsGenderOpened] = useState(true);
    const [isPriceOpened, setIsPriceOpened] = useState(true);
    // range slider
    const MAX = 5000
    const MIN = 0

    const minPriceParam = parseInt(searchParams.get("minPrice")) || MIN;
    const maxPriceParam = parseInt(searchParams.get("maxPrice")) || MAX;

    

    // count Products in categories 
    const categories = filteredSneakers.map(s => s.breadcrumbs[1]).filter(Boolean).map(s=> s.value)
    
    // top Categories
    const topCategories = [...new Set(categories)].slice(0,6)

    const brands = filteredSneakers.map(sneaker => sneaker.brand)
    const sortedBrands = [...new Set(brands)].sort((a,b) => b - a);

    // searchParams
    const brandsParam = searchParams.getAll("brand");
    const categoriesParam = searchParams.getAll("category");

    // gender 
    const genders = ["All", "women", "men", "kids", "unisex"]
    const genderParam = searchParams.get('gender')

    

    return (
        <div className="border-gray-300 space-y-3">

            {/* testing */}
            <button 
                className="border border-gray-300 rounded-lg p-2 cursor-pointer"
                onClick={() => setSearchParams({})}>
                Reset Filters
            </button>

            {/* CATEGORIES Filter */}
            <div className="border-y border-gray-300 py-3">
                {/* Arrow Button */}
                <div className='font-bold font-montserrat pb-1 flex justify-between items-center '>
                    <p>Categories</p>
                    <div 
                        className='text-3xl me-3 cursor-pointer'
                        onClick={() => {
                            setIsCategoryOpened(!isCategoryOpened);
                        }}
                        >
                            <p className={`text-slate-gray transition duration-300 ${ !isCategoryOpened && "rotate-180"}`}>
                                <IoIosArrowUp />
                            </p>
                    </div>
                </div>

                {/* Top Categories */}
                <ul className={`${!isCategoryOpened && "hidden"}`}>
                    {
                    topCategories.map((category,index) => (
                        <li key={index} className="flex gap-2 ">

                            <input 
                                type="checkbox" 
                                name="checkCategory" 
                                className="scale-125" 
                                id={`checkCategory${index}`}
                                checked={categoriesParam.includes(category)}
                                onChange={() => {
                                    // copy of params object
                                    const params = new URLSearchParams(searchParams);
                                    if(categoriesParam.includes(category)) {
                                        // remove the brand
                                        const newCategories = categoriesParam.filter(categ => categ != category); 
                                        params.delete("category");
                                        newCategories.forEach(newCategory => {
                                            params.append("category", newCategory)
                                        });
                                        
                                    } else {
                                        params.append("category", category)
                                    }

                                    setSearchParams(params)
                                }

                                
                            }
                            />

                            <label htmlFor={`checkCategory${index}`} className="pb-0.5">
                                <span> {category}</span>
                            </label>

                        </li>
                    ))
                    }
                </ul>
            </div>

            { !brand && (
            <>
            {/* Brands Filter */}
            <div className="border-b border-gray-300 pb-3">
                {/* Arrow Button */}
                <div className='font-bold font-montserrat pb-1 flex justify-between items-center '>
                    <p>Brand</p>
                    <div 
                        className='text-3xl me-3 cursor-pointer'
                        onClick={() => {
                            setIsBrandOpened(!isBrandOpened);
                        }}
                        >
                            <p className={`text-slate-gray transition duration-300 ${ !isBrandOpened && "rotate-180"}`}>
                                <IoIosArrowUp />
                            </p>
                    </div>
                </div>

                
                <ul className={`${!isBrandOpened && "hidden"}`}>
                    {
                    sortedBrands.map((brand,index) => (
                        <li key={index} className="flex gap-2 ">
                            <input 
                                type="checkbox" 
                                name="checkBrand" 
                                className="scale-125" 
                                id={`checkBrand${index}`}
                                checked={brandsParam.includes(brand)}
                                onChange={() => {
                                    // copy of params object
                                    const params = new URLSearchParams(searchParams);
                                    if(brandsParam.includes(brand)) {
                                        // remove the brand
                                        const newBrands = brandsParam.filter(br => br != brand); 
                                        params.delete("brand");
                                        newBrands.forEach(newBrand => {
                                            params.append("brand", newBrand)
                                        });
                                        
                                    } else {
                                        params.append("brand", brand)
                                    }

                                    setSearchParams(params)
                                }

                                
                            }
                            />
                            <label htmlFor={`checkBrand${index}`} className="pb-0.5">
                                <span> {brand}</span>
                            </label>
                        </li>
                    ))
                    }
                </ul>
                
            </div>
            </>
            )}

            {/* Gender Filter */}
            <div className="border-b border-gray-300 pb-3">
                {/* Arrow Button */}
                <div className='font-bold font-montserrat pb-1 flex justify-between items-center'>
                    <p>Gender</p>
                    <div 
                        className='text-3xl me-3 cursor-pointer'
                        onClick={() => {
                            setIsGenderOpened(!isGenderOpened);
                        }}
                    >
                        <p className={`text-slate-gray transition duration-300 ${!isGenderOpened && "rotate-180"}`}>
                            <IoIosArrowUp />
                        </p>
                    </div>
                </div>

                {/* Gender Options */}
                <ul className={`${!isGenderOpened && "hidden"}`}>
                    {
                    genders.map((gender, index) => (
                        <li key={index} className="flex gap-2">
                            <input 
                                type="radio" 
                                name="checkGender" 
                                className="scale-130" 
                                id={`checkGender${index}`}
                                checked={genderParam === gender}
                                onChange={() => {
                                    const params = new URLSearchParams(searchParams);
                                    if (genderParam === gender) {
                                        params.delete("gender")
                                    }
                                    else {
                                        params.set("gender", gender)
                                    }
                                    setSearchParams(params)
                                }}
                            />
                            <label htmlFor={`checkGender${index}`} className="pb-0.5">
                                <span>{gender}</span>
                            </label>
                        </li>
                    ))
                    }
                </ul>
            </div>

            {/* Price Range */}
            <PriceRange 
                minPrice={minPriceParam} 
                setMinPrice={(val) => {
                    const params = new URLSearchParams(searchParams);
                    params.set("minPrice", val);
                    setSearchParams(params);
                }}
                maxPrice={maxPriceParam}
                setMaxPrice={(val) => {
                    const params = new URLSearchParams(searchParams);
                    params.set("maxPrice", val);
                    setSearchParams(params);
                }}
                isPriceOpened={isPriceOpened} setIsPriceOpened={setIsPriceOpened}
            />


        </div>
    )
}

export default FilterSideBar