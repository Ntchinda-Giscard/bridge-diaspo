import classes from "@/app/site/css/seivce.module.css";
import { Divider, Group, Box } from "@mantine/core";
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
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4' id="section">

                    {
                        services.map((s) => (
                            <Box>
                                <ServiceBlock 
                                    link={`/site/service#${s?.service}`}
                                    key={s?.service}
                                    service = {s?.service}
                                    desc={s?.desc}
                                    image={s?.image}
                                />
                            </Box>
                        ))
                    }
                </div>
            </Group>
            
            
         </div>
        </>
    )
}

export default Services;