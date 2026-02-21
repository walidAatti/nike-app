import { services } from "../constants"


const Services = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 ">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="bg-white shadow-2xl px-8 py-12 space-y-4 rounded-xl stretch md:last:col-span-2 lg:last:col-span-1" 
        >
          <img src={service.imgURL} alt="service icon" 
            className=" bg-coral-red p-2.5 rounded-full"
          />
          <p className="font-bold font-palanquin text-3xl">{service.label}</p>
          <p className="font-montserrat text-slate-gray text-lg">{service.subtext}</p>
        </div>
      ))}
    </div>
  )
}

export default Services