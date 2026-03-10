import { headerLogo } from '../assets/images'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../index.css'
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerSide from './HamburgerSide';
import { navLinks } from '../constants'
import { IoSearch } from "react-icons/io5";
import SearchBar from './SearchBar';

const NavSearch = ({search, setSearch, isListProduct, isHome, isBrandPage, isDetailPage, isFavoritePage}) => {

    const [isClosed, seIsClosed] = useState(true);
    const [ShowSearch, setShowSearch] = useState(false)

    return (
        <header className={`2xl:container w-full p-3 sm:px-16 py-4 flex max-sm:gap-2 gap-7 items-center justify-between border-b border-b-gray-300
                        ${isHome ? "fixed z-10 bg-white ": "static"}`}
        >
            <Link to={"/nike-app/"} className={`${ShowSearch ? "max-sm:hidden" : 'block'}`}>
                <p className='font-boldonse text-lg'>SNEAKER</p>
            </Link>

                    <SearchBar search= {search} setSearch={setSearch} isListProduct={isListProduct} 
                    ShowSearch={ShowSearch} setShowSearch={setShowSearch} isHome={isHome} isBrandPage={isBrandPage} isFavoritePage={isFavoritePage}/>

            {/* conditional NavLinks rendering */}
            {isHome &&
                <ul className='max-lg:hidden flex gap-16 font-montserrat text-lg text-slate-gray'>
                    {navLinks.map((link, index) => 
                        <li key={index} className='hover:underline hover:text-black underline-offset-2'>
                            <Link to={link.href}>{link.label}</Link>
                        </li>
                    )}
                </ul>
            }
            
            {/* Hamburger */}
            <div className={`${isHome && "me-0 md:me-4 ml-30" }`}>

                <button className={`${(isHome || isDetailPage) ? 'hidden' : 'sm:hidden'}`} onClick={() => setShowSearch(true)}>
                    {ShowSearch ? <IoSearch className='hidden'/> : <IoSearch className='text-2xl me-1.5 text-gray-500 cursor-pointer hover:scale-105 hover:text-gray-600'/>}
                </button>

                <button
                    className='cursor-pointer'
                    onClick={() => {
                        seIsClosed(false)
                    }}
                >
                    <RxHamburgerMenu className='text-2xl'/>
                </button>
            </div>
            <HamburgerSide isClosed={isClosed} seIsClosed={seIsClosed}/>
        </header>
    )
}

export default NavSearch