
const BrandCard = ({brand}) => {
    return (
        <div className= {`border border-gray-50 shadow aspect-video flex flex-col gap-2 overflow-hidden`}>
            <div className="flex flex-1 bg-gray-50 hover:bg-gray-100 transition duration-200 justify-center items-center font-montserrat font-light text-slate-gray max-sm:text-3xl text-4xl text-center">
                <p>{brand[0]}</p>
            </div>
            <div className={`px-2 pb-2`}>
                {/* <p  className="text-sm text-slate-gray"><span className="font-palanquin capitalize hover:underline underline-offset-2 transition duration-200">{brand[0]}</span></p> */}
                <p className="text-sm text-slate-gray"><span className="font-palanquin text-base ">{brand[1]}</span> product(s) </p>
            </div>
        </div>
    )
}

export default BrandCard