import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import { useEffect, useState } from "react"
import Brands from "./pages/Brands"
import Favorites from "./pages/Favorites"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {

    const [sneakers, setSneakers] = useState([]);
    const [originalSneakers, setOriginalSneakers] = useState([]);

    // favorites
    const [favourites, setFavourites] = useState(() => {
        const storedFavourites = localStorage.getItem("favourites");
        return storedFavourites ? JSON.parse(storedFavourites) : [];
    })

    
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }
    , [favourites])


    useEffect(() => {
    const fetchSneakers = async () => {
        
        try {
            const response = await fetch("/nike-app/sneakers.json")
            const snkrs = await response.json()
            setSneakers(snkrs.slice(0,300));
            setOriginalSneakers(snkrs.slice(0,300));

        } catch (error) {
            console.log("The error is: " + error)
        }
    }

    fetchSneakers();

    }, [])
    
    return (
    <>
        <ScrollToTop />
        <Routes>
            <Route path="/nike-app/" element ={<Home sneakers={sneakers}/>} />
            <Route path="/nike-app/products" element ={<Products sneakers={sneakers} originalSneakers={originalSneakers} 
                                                                setSneakers={setSneakers} favourites={favourites} 
                                                                setFavourites={setFavourites}/>} 
            />
            <Route path="/nike-app/products/:id" element ={<ProductDetail sneakers = {sneakers} favourites={favourites} setFavourites={setFavourites}/>} />
            <Route path="/nike-app/brands" element ={<Brands sneakers = {sneakers}/>} />
            <Route path="/nike-app/brands/:brand" element ={<Products sneakers={sneakers} originalSneakers={originalSneakers} 
                                                                        setSneakers={setSneakers} favourites={favourites} setFavourites={setFavourites}/>} 
            />
            <Route path="/nike-app/brands/:brand/:id" element ={<ProductDetail sneakers={sneakers} favourites={favourites} setFavourites={setFavourites}/>} />
            <Route path="/nike-app/favorites" element ={<Favorites favourites={favourites} setFavourites={setFavourites} sneakers={sneakers}/>} />
        </Routes>
    </>
    )
}

export default App