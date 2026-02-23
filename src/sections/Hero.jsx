import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants"
import { Link } from "react-router-dom"

const Hero = () => {
    const [currentShoe, setShoe] = useState(bigShoe1);


    return (
        <section 
        className=" flex flex-col gap-10 justify-center min-h-screen xl:flex-row ">
            {/* First Section */}
            <div className="xl:w-2/5 padding-x flex flex-col items-start justify-center pt-28">
                <p className=" font-montserrat text-coral-red text-xl">Our Summer Collections</p>
                <div className="capitalize text-8xl font-palanquin font-bold max-sm:text-7xl relative z-10 mt-11 lg:leading-30 max-lg:leading-25 max-md:leading-20">
                    <span className="relative z-10 xl:whitespace-nowrap pr-10 py-4 xl:bg-white">The New arrival </span>
                    <br />
                    <span className="text-coral-red">Nike</span> shoes
                </div>

                <p 
                    className="mt-6 font-montserrat text-xl text-slate-gray tracking-wide leading-9">
                    Discover stylish Nike arrivals, quality comfort, 
                    and innovation for your active life</p>

                <Link to="/products" 
                    className="mt-10 rounded-full py-3 px-6 text-lg text-white font-montserrat bg-coral-red flex gap-4 hover:bg-[#e75747] transition-colors">
                        Shop now
                        <img src={arrowRight} alt="arrow" />
                </Link>

                <div className="mt-12 flex gap-15 flex-wrap">
                    {statistics.map((stat,index) => (
                        <div key={index}>
                            <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
                            <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Section */}
            <div className="bg-hero bg-cover bg-center min-h-screen flex justify-center relative items-center w-full xl:mr-16 xl:ml-5">
                <img src={currentShoe} alt="bigshoe"/>

            {/* cards */}
                <div className="flex gap-10 absolute -bottom-20 max-sm:-bottom-10">                               
                {shoes.map((shoe, index) => (
                    <div 
                        key={index} 
                        tabIndex={0}
                        onClick={() => setShoe(shoe.bigShoe)} 
                        className="bg-card bg-cover bg-center rounded-xl p-7  cursor-pointer outline-offset-1 outline-amber-600 hover:outline-3 focus:outline-3"
                    >
                        <img src={shoe.thumbnail} alt="shoe"/>
                    </div>
                ))}
            </div>

            </div>

            


        </section>
    )
}

export default Hero