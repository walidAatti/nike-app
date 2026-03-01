import '../index.css';
import { Link, useParams } from "react-router-dom";
import Loader from './Loader';
import { useState, useEffect } from 'react';
import Footer from '../sections/Footer';
import RelatedProducts from './RelatedProducts';
import NewsLetter from '../sections/NewsLetter';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import NavSearch from './NavSearch';




const ProductDetail = ({sneakers}) => {
    
    const {brand, id} = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);

    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // description
    const [isOpened, setIsOpened] = useState(true)
    // market statistics
    const [isMarketOpened, setIsMarketOpened] = useState(true)

    // fins sneaker
    const sneaker = sneakers.find(snk => snk.id == id);

    // loader condition
    if (!sneaker) {
        return <Loader />
    }
    
    const price = sneaker.avg_price.toFixed(2)

    // image Carousel
    const sneakerPhotos = [sneaker.gallery_360[0],sneaker.gallery_360[4],sneaker.gallery_360[25],sneaker.gallery_360[19]];
    const currentPhoto = sneakerPhotos[currentIndex];

    const next = () => setCurrentIndex(prev => prev < sneakerPhotos.length - 1 ? prev + 1 : prev = 0);
    const prev = () => setCurrentIndex(prev => prev > 0 ? prev - 1 : prev = sneakerPhotos.length - 1);



    return (
        <div className="2xl:container mx-auto">


            <NavSearch />

            <div className='m-2.5 md:m-4 lg:mx-16  border-b-gray-300 pb-12 pt-7 max-md:pt-6.5 grid grid-cols-1 lg:grid-cols-2 gap-6 relative'>

            {/* Page Links */}
            <div className='font-palanquin text-sm text-slate-gray absolute top-0 mb-4 line-clamp-1'>
                <Link to={`/nike-app/`} className='hover:underline underline-offset-[1.5px]'>Home</Link>
                <span> / </span>

                {/* Conditional rendering of Links based on Brands*/}
                {
                brand ? 
                (
                <>
                <Link to={`/nike-app/brands`} className='hover:underline underline-offset-[1.5px]'>Brands</Link>
                <span> / </span>
                <Link to={`/nike-app/brands/${brand}`} className='hover:underline underline-offset-[1.5px]'>{brand}</Link>
                </>
                ) : (
                <Link to={`/nike-app/products`} className='hover:underline underline-offset-[1.5px]'>Sneakers</Link>
                )
                }

                <span> / </span>
                <Link to={`/nike-app/products/${id}`} className='hover:underline underline-offset-[1.5px]'>{sneaker.model}</Link>
            </div>

                {/* left side */}
                <div className='flex flex-col w-full'>

                    <div className='border w-full flex justify-between items-center p-2 max-sm:p-1 rounded-2xl border-gray-400 aspect-video'>
                        <button 
                            onClick={prev}
                            className='font-palanquin p-1 md:p-3.5 
                            cursor-pointer bg-gray-100 text-slate-gray hover:bg-gray-200 transition rounded-full'>
                                <GoChevronLeft />
                        </button>
                        
                        <img 
                            src={currentPhoto} 
                            alt= "Sneaker" height={300} className='max-w-4/5 object-cover relative -z-10'/>

                        <button 
                            onClick={next}
                            className='font-palanquin p-1 md:p-3.5
                            cursor-pointer bg-gray-100 text-slate-gray hover:bg-gray-200 transition rounded-full'>
                                <GoChevronRight />
                        </button>

                    </div>

                    <div className='flex gap-1.5 mt-1'>
                        
                        {
                        sneakerPhotos.map((photo,index) => (
                                <div 
                                    key={index} 
                                    tabIndex={0}
                                    onClick={() => {
                                        setCurrentIndex(index)
                                    }}
                                    className={`border grow p-1 rounded-xl 
                                        ${index === currentIndex ? "border-2 border-coral-red" : "border-gray-300 hover:border-gray-300 hover:border-2" } 
                                            transition cursor-pointer`}>
                                    <img src={photo} alt="sneaker photo" className='w-full max-h-30 object-contain aspect-square'/>
                                </div>
                            ))
                        }
                    </div>

                </div>

                {/* right side*/}
                <div className='p-4 max-md:p-0'>
                    <p className='font-montserrat font-bold text-lg mb-4'>{sneaker.title}</p>
                    {/* details */}
                    <div className='pt-1 flex gap-10 max-sm:gap-8 flex-wrap max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-3'>
                        <div>
                            <p className='text-slate-gray'>Brand</p>
                            <p className='font-bold text-lg'>{sneaker.brand}</p>
                        </div>
                        <div>
                            <p className='text-slate-gray'>Model</p>
                            <p className='font-bold text-lg'>{sneaker.model}</p>
                        </div>
                        <div>
                            <p className='text-slate-gray'>SKU</p>
                            <p className='font-bold text-lg'>{sneaker.sku}</p>
                        </div>
                        <div>
                            <p className='text-slate-gray'>Category</p>
                            <p className='font-bold text-lg'>{sneaker.category}</p>
                        </div>
                        <div>
                            <p className='text-slate-gray'>Average Price</p>
                            <p className='font-bold text-lg'>${price}</p>
                        </div>
                        <div>
                            <p className='text-slate-gray'>Weekly Orders</p>
                            <p className='font-bold text-lg'>{sneaker.weekly_orders}</p>
                        </div>
                        <div>
                            <p className='text-slate-gray'>Rank</p>
                            <p className='font-bold text-lg'>#{sneaker.rank}</p>
                        </div>
                    </div>

                    {/* description */}
                    <div className='mt-8 pb-2 border-b'>

                        <div className='font-bold font-montserrat pb-2 flex justify-between items-center '>
                            <p >Description:</p>
                            <p 
                                className='text-3xl me-3 cursor-pointer'
                                onClick={() => {
                                    setIsOpened(!isOpened);
                                }}
                            >
                                <div className='text-slate-gray'>
                                    {isOpened ? <IoIosArrowUp /> : <IoIosArrowDown /> }
                                </div>
                            </p>
                        </div>
                        <p className={`font-montserrat pb-2 text-slate-gray ${isOpened ? "block" : "hidden"}`}>{sneaker.description}</p>
                    </div>


                    {/* Market statistics */}
                    <div className='mt-5 pb-2 border-b'>

                        <div className='font-bold font-montserrat pb-2 flex justify-between items-center '>
                            <p >Market Statistics Last Week:</p>
                            <p 
                                className='text-3xl me-3 cursor-pointer'
                                onClick={() => {
                                    setIsMarketOpened(!isMarketOpened);
                                }}
                            >
                                <div className='text-slate-gray'>
                                    {isMarketOpened ? <IoIosArrowUp /> : <IoIosArrowDown /> }
                                </div>
                            </p>
                        </div>
                        <div 
                            className={`font-montserrat pb-2 grid grid-cols-1 gap-3 sm:grid-cols-2  md:grid-cols-3 ${isMarketOpened ? "block" : "hidden"}`}
                        >

                            <div>
                                <p className='text-slate-gray'>Sales Count</p>
                                <p className='text-lg'>{sneaker.weekly_orders}</p>
                            </div>

                            <div>
                                <p className='text-slate-gray'>Average Price</p>
                                <p className=' text-lg'>${(sneaker.avg_price).toFixed(2)}</p>
                            </div>

                            <div>
                                <p className='text-slate-gray'>Price Range</p>
                                <p className='text-lg'>${sneaker.min_price} - ${sneaker.max_price}</p>
                            </div>

                            <div>
                                <p className='text-slate-gray'>Mid Point Price</p>
                                <p className='text-lg'>${(sneaker.max_price + sneaker.min_price) / 2}</p>
                            </div>

                            <div>
                                <p className='text-slate-gray'>Estimated Revenue</p>
                                <p className='text-lg'>${(sneaker.avg_price * sneaker.weekly_orders).toLocaleString("en-US")}</p>
                            </div>
                            
                            

                        </div>
                    </div>
                    


                </div>

            </div>

            <section className='mx-3 lg:mx-16 space-y-3 border-y pt-4 pb-12 border-y-gray-300'>
                <RelatedProducts id={id} brand={sneaker.brand} urlBrand={brand} category={sneaker.category}  sneakers={sneakers}/>
            </section>

            <section className='padding '>
                <NewsLetter />
            </section>

            <section className='bg-black padding'>
                <Footer />
            </section>
        </div>
    )

}

export default ProductDetail
