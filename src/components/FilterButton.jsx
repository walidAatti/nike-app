import { useState } from "react";
import FilterSideBar from "./FilterSideBar"
import { FaFilter } from "react-icons/fa6";

const FilterButton = ({ filteredSneakers, setSneakers, searchParams, setSearchParams, brand }) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return <>
        <div>
            <div className="text-end">
                <button 
                    className="border border-gray-50 bg-gray-100 text-gray-900 rounded-lg py-2 px-6 text-md hover:bg-gray-200 transition-all duration-200 font-montserrat cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="text-gray-500"><FaFilter /></span>
                </button>
            </div>
            {isClicked && (
                <FilterSideBar
                    filteredSneakers={filteredSneakers}
                    setSneakers={setSneakers}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    brand={brand}
                />
            )}
        </div>
    </>
}

export default FilterButton
