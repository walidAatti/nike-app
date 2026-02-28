import '../index.css';
import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard";
import NavSearch from "../components/NavSearch";
import FilterSideBar from '../components/FilterSideBar';
import { Link } from "react-router-dom";
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import ProductList from '../components/ProductList';

const Products = ({sneakers, setSneakers, originalSneakers}) => {
    
    const [search, setSearch] = useState("");
    const [isPriceSorted, setIsPriceSorted] = useState(false);
    const [isListProduct, setisListProduct] = useState(true);

    // scroll to top
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    // pagination 
    const ITEMS_PAGE = 50
    const pages = Math.ceil(sneakers.length / ITEMS_PAGE);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * ITEMS_PAGE;
    const lastIndex = startIndex + ITEMS_PAGE;
    const slicedSneakers = sneakers.slice(startIndex, lastIndex);


    const filteredSneakers = sneakers.filter(sneaker => sneaker.model.toLowerCase().includes(search.trim().toLowerCase()))

    return (
        <div className="2xl:container mx-auto">

            {/* Nav search */}
            <NavSearch search= {search} setSearch={setSearch} isListProduct={isListProduct}/> 

                {
                sneakers.length !== 0 ?

                <div className='px-2 sm:px-16 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-5'>
                    {/* Filter Sidebar */}
                    <section>
                        <FilterSideBar />
                    </section>
                
                <div className="md:col-span-2 lg:col-span-4 grid gap-2 md:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-16 sm:py-12 relative">
                    {/* Sort */}
                    <div className='absolute top-0 flex justify-between w-full items-center max-sm:items-start gap-1 max-sm:flex-col'>

                        {/* Page Links */}
                        <div className='font-palanquin text-sm text-slate-gray'>
                            <Link to={`/nike-app/`} className='hover:underline underline-offset-[1.5px]'>Home</Link>
                            <span> / </span>
                            <Link to={`/nike-app/products`} className='hover:underline underline-offset-[1.5px]'>Sneakers</Link>
                        </div>

                        {/* sorting */}
                        <div className='flex items-center gap-2'>

                            {search.trim() && <p 
                                                className='max-sm:hidden font-montserrat text-sm text-slate-gray'>
                                                    results:<span className='font-bold'> {filteredSneakers.length}</span>
                                            </p>
                            }

                            <Sorting sneakers={filteredSneakers} setSneakers={setSneakers} originalSneakers={originalSneakers}  setIsPriceSorted={setIsPriceSorted}/>
                        </div>
                    </div>

                    {/* Product List */}
                    <ProductList sneakers={filteredSneakers} isPriceSorted={isPriceSorted}/>


                    {/* Pagination */}
                    {/* <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}

                </div>
            </div>

                :
                <Loader />
            }


        </div>
    )

}

export default Products

// 20
// "https://api.kicks.dev/v3/stockx/products"