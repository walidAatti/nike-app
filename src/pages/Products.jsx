import '../index.css';
import { useState, useEffect} from "react";
import NavSearch from "../components/NavSearch";
import FilterSideBar from '../components/FilterSideBar';
import { Link, useParams, useSearchParams } from "react-router-dom";
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import ProductList from '../components/ProductList';

const Products = ({sneakers, setSneakers, originalSneakers, favourites, setFavourites}) => {

    // use Search Params
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [search, setSearch] = useState("");
    const [isPriceSorted, setIsPriceSorted] = useState(false);
    const isListProduct = true;

    // pagination 
    const ITEMS_PAGE = 10
    const pages = Math.ceil(sneakers.length / ITEMS_PAGE);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * ITEMS_PAGE;
    const lastIndex = startIndex + ITEMS_PAGE;
    const slicedSneakers = sneakers.slice(startIndex, lastIndex);

    // Brands
    const {brand} = useParams();

    const filteredBrandSneakers = brand 
                                ?
                                sneakers.filter(sneaker => sneaker.brand === brand)
                                :
                                sneakers;

    const filteredOriginalSneakers = brand 
                                ? originalSneakers.filter(sneaker => sneaker.brand === brand)
                                : originalSneakers;


    // Params keys
    const brandsParam = searchParams.getAll("brand") ;
    const categoriesParam = searchParams.getAll("category") ;
    const genderParam = searchParams.get("gender");
    const minPriceParam = parseInt(searchParams.get("minPrice")) || 0;
    const maxPriceParam = parseInt(searchParams.get("maxPrice")) || 5000;
        
    const filteredSneakers = filteredBrandSneakers.filter(sneaker => sneaker.title.toLowerCase().includes(search.trim().toLowerCase()))
                                                .filter(sneaker => brandsParam.length === 0 || brandsParam.includes(sneaker.brand))
                                                .filter(sneaker => categoriesParam.length === 0 || categoriesParam.includes(sneaker.breadcrumbs[1]?.value))
                                                .filter(sneaker => (!genderParam || genderParam == "All") || sneaker.gender === genderParam)
                                                .filter(sneaker=>  
                                                                    sneaker.avg_price >= minPriceParam && sneaker.avg_price <= maxPriceParam                                                      
                                                )

    return (
        <div className="2xl:container mx-auto">

            {/* Nav search */}
            <NavSearch search={search} setSearch={setSearch} isListProduct={isListProduct}/>

                {
                sneakers.length !== 0 ?

                <div className='px-2 sm:px-16 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-5'>
                    {/* Filter Sidebar */}
                    <section>
                        <FilterSideBar  filteredSneakers={originalSneakers} setSneakers={setSneakers} 
                                        searchParams={searchParams} setSearchParams={setSearchParams}
                                        brand ={brand}
                        />
                    </section>
                
                <div className="md:col-span-2 lg:col-span-4 grid gap-2 md:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-16 sm:py-12 relative">
                    {/* Sort */}
                    <div className='absolute top-0 flex justify-between w-full items-end max-sm:items-start gap-1 max-sm:flex-col'>

                        {/* Page Links */}
                        <div className='font-palanquin text-sm text-slate-gray '>
                            <Link to={`/nike-app/`} className='hover:underline underline-offset-[1.5px]'>Home</Link>
                            <span> / </span>

                            {
                            brand ? (
                            <>
                            <Link to={`/nike-app/brands`} className='hover:underline underline-offset-[1.5px]'>Brands</Link>
                            <span> / </span>
                            <Link to={`/nike-app/brands/${brand}`} className='hover:underline underline-offset-[1.5px]'>{brand}</Link>
                            </>
                            ) : (
                            <Link to={`/nike-app/products`} className='hover:underline underline-offset-[1.5px]'>Sneakers</Link>
                            )
                            }
                            
                        </div>

                        {/* sorting */}
                        <div className='flex max-sm:flex-row-reverse items-center gap-2'>

                            {(search.trim() || filteredSneakers.length < originalSneakers.length || genderParam == "All") && <p 
                                                className=' font-montserrat text-sm text-slate-gray'>
                                                    results:<span className='font-bold'> {filteredSneakers.length}</span>
                                            </p>
                            }

                            <Sorting sneakers={filteredSneakers} setSneakers={setSneakers} originalSneakers={filteredOriginalSneakers}  setIsPriceSorted={setIsPriceSorted}/>
                        </div>
                    </div>



                    <ProductList sneakers={filteredSneakers} brand={brand} isPriceSorted={isPriceSorted} favourites={favourites} setFavourites={setFavourites}/>


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
