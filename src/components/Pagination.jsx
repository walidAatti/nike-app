const Pagination = ({pages, currentPage, setCurrentPage}) => {

    const pageArray = Array.from({length: pages},(_,i) => i + 1);
    const active= "font-bold font-montserrat border-slate-gray border-2 w-9 h-8 hover:scale-105 bg-gray-50 cursor-pointer";
    const normal = "border font-montserrat w-9 h-8 border-slate-gray cursor-pointer hover:scale-105";
// {currentPage === page ? "bg-amber-600" : "bg-amber-200"}

    return (
        <div className="absolute bottom-0 w-full flex justify-center">
            {pageArray.map((page,index) => {
                return <button 
                type="button"
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className= {currentPage === page ? active : normal}
                >
                        {page}
                </button>
            })}
        </div>
    )
}

export default Pagination