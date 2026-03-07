import { Link } from "react-router-dom"
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";


const HamburgerSide = ({isClosed, seIsClosed}) => {
    
    {/* stop scrolling */}
    {useEffect(() => {
        !isClosed ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    // cleanup
    return () => {
        document.body.style.overflow = "auto";
    }

    },[isClosed])}

    return (
        <>
            {/* Backdrop overlay */}
            {!isClosed && (
                <div 
                    className="fixed inset-0 z-30 bg-black/50"
                    onClick={() => seIsClosed(true)}
                />
            )}

            

        <div 
            className={`fixed z-50 top-0 right-0 w-full md:w-1/2 lg:w-1/3 
            shadow-2xl min-h-screen bg-white flex gap-4 flex-col items-start p-2.5 
            transform transition-transform duration-300 ease-out
            ${isClosed ? "translate-x-full" : "translate-x-0"}`}            
        >

            <button 
                className="text-3xl p-2 ml-auto cursor-pointer hover:bg-gray-100 text-slate-gray rounded-full"
                onClick={(e) => {
                    seIsClosed(true)
                }}
            >
                <IoCloseOutline/>
            </button>
            
            <ul className="w-full border-y">
                <li className="border-b text-lg font-montserrat bg-gray-50 cursor-pointer transition p-3.5  hover:bg-gray-100">
                    <Link to={'/nike-app/'} onClick={() => seIsClosed(true)}>Home</Link>
                </li>
                
                <li className="border-b text-lg font-montserrat bg-gray-50 cursor-pointer transition p-3.5 hover:bg-gray-100">
                    <Link to={'/nike-app/products'} onClick={() => seIsClosed(true)}>Products</Link>
                </li>
                
                <li className="border-b bg-gray-50 text-lg font-montserrat cursor-pointer transition p-3.5 hover:bg-gray-100">
                    <Link to={'/nike-app/brands'} onClick={() => seIsClosed(true)}>Brands</Link>
                </li>
                
                <li className="bg-gray-50 text-lg font-montserrat cursor-pointer transition p-3.5 hover:bg-gray-100">
                    <Link to={'/nike-app/favorites'} onClick={() => seIsClosed(true)}>Favorites</Link>
                </li>


            </ul>
            
            
        </div>
    </>
    )
}

export default HamburgerSide