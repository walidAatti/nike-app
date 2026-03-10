import hero from '../assets/new images/hero.webp'
import jordanCollection from '../assets/new images/jordan_collection.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div className='relative'>
                <Link to="/nike-app/brands/Jordan">
                    <div className='absolute bottom-8 left-8 text-[14px] font-montserrat 
                        opacity-80 bg-white rounded-md p-2 cursor-pointer hover:opacity-70 transition duration-150'
                    >
                        Discover More
                    </div>
                </Link>
                <img src={hero} alt="Hero Background" className='hidden md:block w-full object-cover object-center '/>
                <img src={jordanCollection} alt="Hero Background" className='block md:hidden w-full object-cover object-center '/>
            </div>
        </div>
    )
}

export default Hero