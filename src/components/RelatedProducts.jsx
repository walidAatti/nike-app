import { useRef } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const RelatedProducts = ({sneakers, brand, category, id}) => {

    const scrollRef = useRef(null);

    const scroll = (x) => {
    scrollRef.current.scrollBy({
        left: x * 300,
        behavior: "smooth",
    });
    };

    // sneakers filtering
    const relatedSneakers = sneakers.filter( sneaker => sneaker.brand === brand && sneaker.category === category && sneaker.id !== id).slice(0,10);

    return ( <>
        <p className="text-lg text-slate-gray font-montserrat">Related Products</p>


        
        <div className="relative md:px-12">

            {  
            relatedSneakers.length > 0 ? (
            <>

           {/* Left arrow */}
            <button
                onClick={() => scroll(-1)}
                className="
                hidden sm:flex
                absolute left-0 top-1/2 -translate-y-1/2
                z-10
                bg-white/90
                rounded-full
                p-2
                shadow
                cursor-pointer
            "
            >
                <GoArrowLeft />

            </button>



            <div className="flex gap-4 overflow-x-auto overflow-scroll snap-x snap-mandatory scrollbar-hide" ref={scrollRef}>

            { 

            relatedSneakers.map(product => (
                <Link 
                    key={product.id} 
                    to={`/nike-app/products/${product.id}`} 
                    className="shrink-0 snap-start w-1/4"
                >
                    <ProductCard sneaker={product} />
                </Link>
            ))
            }
            </div>

            {/* Right arrow */}
            <button
            onClick={() => scroll(1)}
            className="
                hidden sm:flex
                absolute right-0 top-1/2 -translate-y-1/2
                z-10
                bg-white/90
                rounded-full
                p-2
                shadow
                cursor-pointer
            "
            >
                <GoArrowRight />

            </button>

            </>
            ) : (
            <div className="p-20 flex items-center justify-center">
                <p className="font-montserrat text-2xl text-coral-red">No Related Products for this Item</p>
            </div>
        )}

        </div>
    </>
    )
}

export default RelatedProducts