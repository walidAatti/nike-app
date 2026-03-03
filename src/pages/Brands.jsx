import { Link } from "react-router-dom";
import NavSearch from "../components/NavSearch";
import { useState } from "react";
import BrandCard from "../components/BrandCard";

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

            <NavSearch search= {search}  setSearch={setSearch} isBrandPage={isBrandPage}/>


            <div className='px-3 sm:px-16 pt-4 pb-2 font-palanquin text-sm text-slate-gray'>
                <Link to={`/nike-app/`} className='hover:underline underline-offset-[1.5px]'>Home</Link>
                <span> / </span>
                <Link to={`/nike-app/brands`} className='hover:underline underline-offset-[1.5px]'>Brands</Link>
            </div>

            {/* brands List */}
            <div className="px-3 sm:px-16 pb-4 grid max-[450px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-4">
                { filteredBrands.length > 0
                ?
                filteredBrands.map((brand,index) => (
                    <Link key={index} to={`/nike-app/brands/${brand[0]}`}>
                        {/* Brand Card */}
                        <BrandCard brand={brand}/>

                    </Link>
                ))
                :
                <div className="col-span-full py-40 text-center flex justify-center items-center">
                        <p className="font-montserrat text-2xl text-coral-red">We don't have a Brand with this name</p>
                </div>
                }
            </div>
        </div>
    )
}

export default Brands