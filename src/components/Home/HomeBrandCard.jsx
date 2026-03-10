
const HomeBrandCard = ({brand}) => {
    return (
        <div className="border border-slate-200 rounded-lg flex justify-center items-center flex-col gap-2 hover:shadow-lg transition duration-200 aspect-video">
            <img src={brand[1]} alt={brand[0]} className="w-2/5 h-1/2 object-contain"/>
            <p className="font-montserrat">{brand[0]}</p>
        </div>
    )
}

export default HomeBrandCard