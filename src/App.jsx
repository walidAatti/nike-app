import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { useEffect, useState } from "react";
import Brands from "./pages/Brands";
import Favorites from "./pages/Favorites";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/404";

const App = () => {
  const [sneakers, setSneakers] = useState([]);
  const [originalSneakers, setOriginalSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // favorites
  const [favourites, setFavourites] = useState(() => {
    const storedFavourites = localStorage.getItem("favourites");
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch("/sneakers.json");
        const snkrs = await response.json();
        setSneakers(snkrs.slice(0, 600));
        setOriginalSneakers(snkrs.slice(0, 300));
      } catch (error) {
        console.log("The error is: " + error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSneakers();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home sneakers={originalSneakers} />} />
        <Route
          path="/products"
          element={
            <Products
              sneakers={sneakers}
              originalSneakers={originalSneakers}
              setSneakers={setSneakers}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              sneakers={sneakers}
              favourites={favourites}
              setFavourites={setFavourites}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/brands" element={<Brands sneakers={sneakers} />} />
        <Route
          path="/brands/:brand"
          element={
            <Products
              sneakers={sneakers}
              originalSneakers={originalSneakers}
              setSneakers={setSneakers}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
        <Route
          path="/brands/:brand/:id"
          element={
            <ProductDetail
              sneakers={sneakers}
              favourites={favourites}
              setFavourites={setFavourites}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favourites={favourites}
              setFavourites={setFavourites}
              sneakers={sneakers}
            />
          }
        />

        {/* NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
