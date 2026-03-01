import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = ({sneakers, isPriceSorted, brand}) => {
    return <>
      {/* SNEAKERS LIST */}
        {sneakers.map( sneaker =>
            <Link key={sneaker.id} to ={brand ? `/nike-app/brands/${brand}/${sneaker.id}` : `/nike-app/products/${sneaker.id}`}> 
                <ProductCard sneaker={sneaker} isPriceSorted={isPriceSorted}/>
            </Link>
        )}
    </>
}

export default ProductList