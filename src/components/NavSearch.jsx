import { headerLogo } from '../assets/images'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../index.css'
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerSide from './HamburgerSide';
import { navLinks } from '../constants'


const NavSearch = ({search, setSearch, isListProduct, isHome}) => {

    const [isClosed, seIsClosed] = useState(true);

    return (
        <header className={`padding-x py-4 flex gap-7 items-center justify-between border-b border-b-gray-300
                        ${isHome ? "absolute z-10 w-full " : "static"}`}
        >
            <Link to={"/nike-app/"}>
                <img src= {headerLogo} alt="logo" />
            </Link>

            {/* conditionnal Searchbar rendering */}
            {isListProduct && 
            
            <div className='w-1/2 mx-auto'>
                <input 
                    type="text" 
                    id="search" 
                    value={search} 
                    onChange={e => setSearch(e.target.value)} 
                    placeholder="Search By Sneaker Model"
                    className='input p-2 border w-full'
                />
            </div> }

            {/* conditional NavLinks rendering */}
            {isHome &&
                <ul className='max-lg:hidden flex gap-16 font-montserrat text-lg text-slate-gray'>
                    {navLinks.map((link, index) => 
                        <li key={index} className='hover:underline hover:text-black underline-offset-2'>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    )}
                </ul>
            }
            
            {/* Hamburger */}
            <div className={`${isHome && "me-0 md:me-4 ml-30" }`}>
                <button
                    className='cursor-pointer'
                    onClick={() => seIsClosed(false)}
                >
                    <RxHamburgerMenu className='text-2xl'/>
                </button>
            </div>
            <HamburgerSide isClosed={isClosed} seIsClosed={seIsClosed}/>
        </header>
    )
}

export default NavSearch