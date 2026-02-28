import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
    return (
        <header className='py-8 padding-x absolute z-10 w-full 2xl:container '>

            <nav className='flex justify-between items-center'>
                <a href="/">
                    <img src={headerLogo} alt="Logo" />
                </a>

                <ul className='max-lg:hidden flex gap-16 font-montserrat text-lg text-slate-gray'>
                    {navLinks.map((link, index) => 
                        <li key={index}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    )}
                </ul>

                <div className='max-lg:hidden text-xl font-montserrat mr-30'>
                    <a href="/">Login</a>
                    <span> / </span>
                    <a href="/">Explore</a>
                </div>

                {/* hamburger icon */}
                <img src={hamburger} alt="hamburger" width={25} className='lg:hidden'/>

            </nav>
        </header>
    )
}

export default Nav