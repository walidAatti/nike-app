import roller from "../assets/roller.svg"

const Loader = () => {
    return (
        <div className="w-full flex min-h-screen items-center justify-center">
            <img src={roller} alt="loading" className="animate-spin" width={80} height={80}/>
        </div>
    )
}

export default Loader