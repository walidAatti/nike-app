const NewsLetter = () => {
    return (
        <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-y-15">

            <h1 className="font-palanquin font-bold text-4xl leading-14 w-full lg:w-2/5">
                Sign Up for Updates 
                <span className="text-coral-red"> Updates </span>
                & Newsletter
            </h1>

            <form className="relative w-full lg:w-2/5 flex items-center max-sm:flex-col">
                <input 
                    type="email"
                    placeholder="subscribe@nike.com" 
                    className="input"/>
                
                {/* sign up button */}
                <input 
                    type="submit" 
                    value="Sign Up" 
                    className="absolute right-2 bottom-1/2 translate-y-1/2 rounded-full py-3 px-6 text-lg text-white font-montserrat bg-coral-red hover:bg-[#e75747] transition-colors cursor-pointer max-sm:static max-sm:w-full max-sm:mt-3"
                />

            </form>
        </div>
    ) 
}

export default NewsLetter