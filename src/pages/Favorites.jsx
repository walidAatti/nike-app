import NavSearch from "../components/NavSearch"
import { useState } from "react"
import ProductList from "../components/ProductList"
import { Link } from "react-router-dom"

const Favorites = ({favourites, setFavourites, sneakers}) => {

    const [search, setSearch] = useState("");
    const isFavoritePage = true
    const favoriteProducts = sneakers.filter(sneaker => favourites.includes(sneaker.id))
                                    .filter(sneaker => sneaker.title.toLowerCase().includes(search.toLowerCase()))

    
    return (
        <div className="2xl:container mx-auto">
            <NavSearch search= {search}  setSearch={setSearch} isFavoritePage={isFavoritePage}/>

            {/* Page Links */}
            <div className='font-palanquin px-3 sm:px-16 text-sm text-slate-gray p-3'>
                <Link to={`/nike-app/`} className='hover:underline underline-offset-[1.5px]'>Home</Link>
                <span> / </span>
                <Link to={`/nike-app/favorites`} className='hover:underline underline-offset-[1.5px]'>Favorites</Link>
            </div>
            
            <div className="px-3 sm:px-16 pb-4 md:pb-6 grid max-[450px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-4">
                <ProductList favourites={favourites} favoriteProducts={favoriteProducts} setFavourites={setFavourites} isFavoritePage={isFavoritePage}/>
            </div>

        </div>
    )
}

export default Favorites