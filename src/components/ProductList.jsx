import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";


const ProductList = ({sneakers, isPriceSorted, brand, favourites, setFavourites, isFavoritePage, favoriteProducts}) => {
    return <>
      {/* SNEAKERS LIST */}
        
        {
        isFavoritePage ? 

        favoriteProducts.length > 0 
        ?
        favoriteProducts.map(favourite =>
            <Link key={favourite.id} to ={`/nike-app/products/${favourite.id}`}> 
                <ProductCard sneaker={favourite} isPriceSorted={isPriceSorted} favourites={favourites} setFavourites={setFavourites}/>
            </Link>
        )
        :
        <div className="col-span-full py-40 text-center flex justify-center items-center">
            <p className="font-montserrat text-2xl text-coral-red">Your favorite page is Empty</p>
        </div>

        
        :
        sneakers.length > 0 
        ?
        sneakers.map( sneaker =>
            <Link key={sneaker.id} to ={brand ? `/nike-app/brands/${brand}/${sneaker.id}` : `/nike-app/products/${sneaker.id}`}> 
                <ProductCard sneaker={sneaker} isPriceSorted={isPriceSorted} favourites={favourites} setFavourites={setFavourites}/>
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