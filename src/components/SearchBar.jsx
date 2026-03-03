import { IoSearch } from "react-icons/io5";
import { MdOutlineCancel } from 'react-icons/md';

const SearchBar = ({search, setSearch, isListProduct, isBrandPage, ShowSearch, setShowSearch}) => {


    return <>
        
        {(isListProduct || isBrandPage) &&
                    
                    <div className={`w-1/2 mx-auto relative max-sm:grow ${ShowSearch ? "inline" : "max-sm:hidden"}`}>
                        <input 
                            type="text" 
                            id="search" 
                            value={search} 
                            onChange={e => setSearch(e.target.value)} 
                            placeholder= {isListProduct ? "Search By Sneaker Name" : "Search By Brand"}
                            className={`input p-2 px-7 border w-full max-sm:placeholder:text-sm  }`}
                        />
        
                        {/* search button  */}
                        <button>
                            <IoSearch className={`text-gray-400 absolute left-2 max-sm:text-sm top-1/2 -translate-y-1/2`}/>
                        </button>
        
                        {/* search button  */}
                        <button 
                                className={`sm:hidden cursor-pointer text-slate-gray bg-gray-50 hover:bg-gray-300 
                                transition rounded-full p-0.5 absolute right-3 text-lg top-1/2 -translate-y-1/2`}
                                onClick={() => {
                                    setSearch("");
                                    setShowSearch(false);
                                }}
                        >
                                
                            <MdOutlineCancel />
                        </button>
                        
                    </div> 
        }
    </>
}

export default SearchBar