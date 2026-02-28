import '../index.css';
import { Link, useParams } from "react-router-dom";
import Loader from './Loader';
import { useState } from 'react';


const ProductDetail = ({sneakers}) => {

    const {id} = useParams()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);    

    const sneaker = sneakers.find(snk => snk.id == id);

    if (!sneaker) {
        return <Loader />
    }

    const sneakerPhotos = [sneaker.gallery_360[0],sneaker.gallery_360[4],sneaker.gallery_360[13],sneaker.gallery_360[19],sneaker.gallery_360[25],sneaker.gallery_360[32]];
    const currentPhoto = sneakerPhotos[currentIndex];

    // photos slider
    const RENDERED_PHOTOS = 3;
    const slicedPhotos = sneakerPhotos.slice(startIndex, startIndex + RENDERED_PHOTOS)

    const next = () => {
        setStartIndex(prev => prev + RENDERED_PHOTOS > sneakerPhotos.length ? prev + 1 : prev)
    }

    const prev = () => {
        setStartIndex(prev => prev > 0 ? prev - 1 : prev)
    }
    


    return (
        <div>

            <div className='padding grid grid-cols-1 lg:grid-cols-2 gap-6'>

                {/* left side */}
                <div className='flex flex-col w-full '>

                    <div className='border w-full flex justify-center rounded-2xl border-gray-400'>
                        <img src={currentPhoto} alt= "Sneakers" width={500} height={300} className='object-cover'/>
                    </div>

                    <div className='flex gap-1.5 mt-1 px-4'>
                        <input 
                            type="button" 
                            value={"<"} 
                            onClick={prev}

                            className='font-palanquin text-xl px-2 cursor-pointer bg-amber-100'/>
                        {
                        slicedPhotos.map((photo,index) => (
                                <div 
                                    key={index} 
                                    tabIndex={0}
                                    onClick={() => {
                                        setCurrentIndex(startIndex + index)
                                    }}
                                    className={`border p-2 rounded-xl ${index === currentIndex ? "border-2 border-coral-red" : "border-gray-300 hover:border-coral-red hover:border-2 focus:border-2 focus:border-coral-red" } transition cursor-pointer`}>
                                    <img src={photo} alt="sneaker photo" />
                                </div>
                            ))
                        }
                        <input 
                            type="button" 
                            value={">"} 
                            onClick={next}
                            className='font-palanquin text-xl px-2 cursor-pointer bg-amber-100'/>

                    </div>
                </div>

                {/* right side*/}
                <div>
                    <p>{sneaker.title}</p>
                    <p>{sneaker.brand}</p>
                    <p>{sneaker.model}</p>
                    <p>{sneaker.category}</p>
                    <p>{sneaker.description}</p>
                </div>

            </div>

            
        </div>
    )

}

export default ProductDetail

