import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./components/ProductDetail"
import { useEffect, useState } from "react"


const App = () => {

    const [sneakers, setSneakers] = useState([]);
    const [originalSneakers, setOriginalSneakers] = useState([]);

    useEffect(() => {
    const fetchSneakers = async () => {
        
        try {
            const response = await fetch("/nike-app/sneakers.json")
            const snkrs = await response.json()
            setSneakers(snkrs.slice(0,100));
            setOriginalSneakers(snkrs.slice(0,100));

        } catch (error) {
            console.log("The error is: " + error)
        }
    }

    fetchSneakers();

    }, [])
    
    return (
        <Routes>
            <Route path="/nike-app/" element ={<Home />} />
            <Route path="/nike-app/products" element ={<Products sneakers = {sneakers} originalSneakers = {originalSneakers} setSneakers={setSneakers}/>} />
            <Route path="/nike-app/products/:id" element ={<ProductDetail sneakers = {sneakers}/>} />
        </Routes>
    )
}

export default App