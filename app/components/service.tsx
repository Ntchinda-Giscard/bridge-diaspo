import classes from "@/app/css/seivce.module.css";
import { Divider, Group } from "@mantine/core";


function Services(){

    return(
        <>
         <div className="flex flex-col">
            <p className={classes.heading}> Nos differentes services </p>
            <Group justify="center" > 
                <Divider w={"10%"} my={20} />
            </Group>
            
         </div>
        </>
    )
}

export default Services;