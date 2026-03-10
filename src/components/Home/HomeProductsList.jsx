import { Link } from 'react-router-dom'
import HomeProductCard from './HomeProductCard'
const HomeProductsList = ({ sneakers }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
        {sneakers.map(sneaker => (
            <Link key={sneaker.id} to={`/nike-app/products/${sneaker.id}`}>
                <HomeProductCard sneaker={sneaker} />
            </Link>
        ))}
        </div>
    )
}

export default HomeProductsList