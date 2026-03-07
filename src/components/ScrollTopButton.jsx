import { useState, useEffect } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        window.history.scrollRestoration = "manual";
        window.scrollTo(0, 0);

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    if (!showButton) return null;

    return (
        <div className='fixed bottom-5 right-5 rounded-full'>
            <button 
            onClick={scrollToTop}
            className='cursor-pointer text-xl md:text-2xl p-2 md:p-3 shadow opacity-70 bg-white
                    border border-slate-200 rounded-full hover:opacity-90 hover:border-slate-300'
            >
                <IoArrowUpOutline />
            </button>
        </div>
    )
};

export default ScrollTopButton;