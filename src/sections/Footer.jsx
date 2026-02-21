import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <div>

            <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-end max-xl:justify-items-start max-xl:gap-y-15">

            <div className="space-y-5 max-xl:col-span-full">
                <img src={footerLogo} alt="nike logo" className="w-37.5"/>
                <p 
                    className="text-gray-300 leading-7 font-montserrat"
                >
                    Get shoes ready for the new term at your nearest Nike store. 
                    Find Your perfect Size In Store. Get Rewards
                </p>
            

                <div className="flex gap-5">
                    {socialMedia.map( (social,index) => (
                        <a 
                            href="/" 
                            key={index} 
                            className=""
                        >
                            <img 
                                src={social.src} 
                                alt={social.alt} 
                                className="bg-white p-3 rounded-full hover:bg-gray-300 hover:outline outline-gray-300 outline-offset-1 transition"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* footerlinks */}
                {footerLinks.map((footerCol,index) => (
                    <div 
                        key={index}
                        className="font-montserrat text-lg text-gray-300 flex flex-col gap-3"
                    >
                        <p className="text-white font-semibold mb-5 text-2xl">{footerCol.title}</p>

                        {footerCol.links.map(link => (
                            <a 
                                href={link.link} 
                                className="underline-offset-6 hover:underline hover:text-gray-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                ))}

            
        </div>

            {/* copyright */}
            <div className="flex justify-between font-montserrat text-lg text-gray-300 mt-10">
                <p className="flex items-center gap-2"> <span className="text-3xl">&copy;</span> Copyright. All rights reserved.</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer