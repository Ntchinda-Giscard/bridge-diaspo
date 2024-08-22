import classes from "@/app/css/seivce.module.css";
import { Divider, Group } from "@mantine/core";
import ServiceBlock from "./sub-components.tsx/service_block";
import { services } from "./sub-components.tsx/service-data";


function Services(){

    return(
        <>
         <div className="flex flex-col">
            <p className={classes.heading}> Nos differentes services </p>
            <Group justify="center" > 
                <Divider w={"10%"} my={20} />
                
            </Group>
            <Group justify='center'>
                <div className='grid grid-cols-3 gap-4'>

                    {
                        services.map((s) => (
                            <ServiceBlock 
                                service = {s?.service}
                                desc={s?.desc}
                                image={s?.image}
                            />
                        ))
                    }
                </div>
            </Group>
            
            
         </div>
        </>
    )
}

export default Services;