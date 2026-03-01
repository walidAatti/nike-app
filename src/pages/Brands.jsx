import { Link } from "react-router-dom";
import NavSearch from "../components/NavSearch";
import { useState } from "react";

const Brands = ({sneakers}) => {    

    const isBrandPage = true;
    const [search, setSearch] = useState("");
    

    // Count sneakers per brand
    const brandsWithCount = sneakers.reduce((acc, sneaker) => {
        acc[sneaker.brand] = (acc[sneaker.brand] || 0) + 1;
        return acc;
    }, {});

    const brands = Object.entries(brandsWithCount);
    const sortedBrands = brands.sort((a,b) => b[1] - a[1]);
    
    // filtering
    const filteredBrands = sortedBrands.filter(brand => brand[0].toLowerCase().includes(search.trim().toLowerCase()))

    return (
        <div className="2xl:container mx-auto">

            <NavSearch search= {search} setSearch={setSearch} isBrandPage={isBrandPage}/>


            <div className='px-3 sm:px-16 pt-4 pb-2 font-palanquin text-sm text-slate-gray'>
                <Link to={`/nike-app/`} className='hover:underline underline-offset-[1.5px]'>Home</Link>
                <span> / </span>
                <Link to={`/nike-app/brands`} className='hover:underline underline-offset-[1.5px]'>Brands</Link>
            </div>

            {/* brands List */}
            <div className="px-3 sm:px-16 pb-4 grid max-[450px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBrands.map((brand,index) => (
                    <Link key={index} to={`/nike-app/brands/${brand[0]}`} className=" ">

                        <div key={index} className="border border-gray-50 shadow aspect-video flex flex-col gap-2 overflow-hidden">
                            <div className="flex flex-1 bg-gray-50 hover:bg-gray-100 transition duration-200 justify-center items-center font-montserrat font-light text-slate-gray max-sm:text-3xl text-4xl text-center">
                                <p>{brand[0]}</p>
                            </div>
                            <div className="px-2 pb-2">
                                {/* <p  className="text-sm text-slate-gray"><span className="font-palanquin capitalize hover:underline underline-offset-2 transition duration-200">{brand[0]}</span></p> */}
                                <p className="text-sm text-slate-gray"><span className="font-palanquin text-base ">{brand[1]}</span> product(s) </p>
                            </div>
                        </div>
                        
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Brands