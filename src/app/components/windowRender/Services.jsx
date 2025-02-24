import { servicesData } from "@/app/data/serviceData";

export default function Services(){
    return(
        <div>
            
            {servicesData.map((service, index) => (
                            <div key={service.id}>
                        <h5>{service.name}</h5>
                        <p>{service.things}</p>

                        <div className="flex flex-row">
                        {Array.isArray(service.things) ? (
                                            service.things.map((thing, i) => (
                                            <div key={i} className="pr-1"></div>
                                            ))
                                            ) : (
                                            <h6 className="flex whitespace-nowrap">{service.things},</h6>
                                            )}
                        </div>

                            </div>
                                ))}
        </div>
    )
}