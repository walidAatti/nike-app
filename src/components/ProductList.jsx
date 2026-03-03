import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";


const ProductList = ({sneakers, isPriceSorted, brand}) => {
    return <>
      {/* SNEAKERS LIST */}
        
        {
        sneakers.length > 0 
        ?
        sneakers.map( sneaker =>
            <Link key={sneaker.id} to ={brand ? `/nike-app/brands/${brand}/${sneaker.id}` : `/nike-app/products/${sneaker.id}`}> 
                <ProductCard sneaker={sneaker} isPriceSorted={isPriceSorted}/>
            </Link>
        )
        :
        <div className="col-span-full py-40 text-center flex justify-center items-center">
            <p className="font-montserrat text-2xl text-coral-red">No Related Products for this Item</p>
        </div>
    }
    </>
}

export default ProductList