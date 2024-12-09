import classes from "@/app/site/css/homecontact.module.css";
import { Button, Group } from "@mantine/core";
import Link from 'next/link';
function HomeContact(){

    return(
        <>
            <div className={classes.homec}>
                <p className={classes.title}> {"Prenez Rendez-vous dès Aujourd'hui !"} </p>
                <p className={classes.desc}> Maximisez votre croissance en discutant avec nos experts. Réservez dès maintenant un entretien en ligne pour bénéficier de conseils personnalisés et booster votre projet. </p>
                <Group justify='center'>
                    <Button 
                        component={Link}
                        href={"/site/contact"}
                        mt={20}
                        // className= {} 
                        radius={'xl'}
                        bg={'white'}
                        styles={{
                            label:{
                                color: "#0B8F23",
                                fontWeight: 400
                            },
                            root:{
                                outline: '1px solid #0B8F23'
                            }
                        }}
                    >
                        Réserver un entretien immédiatement
                    </Button>
                </Group>
                
            </div>
        </>
    )
}

export default HomeContact;