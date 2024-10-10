import Image from 'next/image';
import {Button, Group, Stack} from '@mantine/core';
import logo from '@/public/assets/topLogo.svg';
import about_img from '@/public/assets/about.svg';
import classes from "@/app/auth/login/css/about.module.css";
import Link from "next/link"

function AboutHomeSection(){

    return(
        <>
            <div className= " flex flex-col-reverse lg:flex-row w-screen gap-6 p-10 ">
                <div className=" flex flex-col gap-6 " >
                    <Image height={20} width={108} src={logo} alt="logo" />
                    <p className={classes.catchtext}>
                        VOTRE PARTENAIRE POUR TOUS 
                        VOS SOLUTIONS DIGITAL SUR MESURE
                    </p>
                    <p className={classes.desc_text}>
                        {"Le Lorem Ipsum est simplement du faux texte utilisé dans la composition et la mise en page avant impression. Il est le faux texte standard de l'industrie depuis les années 1500, lorsqu'un imprimeur anonyme a pris une galée de caractères et les a mélangés pour créer un livre de spécimens de caractères. Il a survécu non seulement à cinq "}
                    </p>
                    <div  className="flex flex-col gap-3 md:flex-row ">
                        <Button 
                            component={Link}
                            href={"#section"}
                            styles={{ label:{color: "#fff", paddingInline: 20} }} px={15} radius ="xl" bg="#0B8F23" > Explorer </Button>
                        <Button 
                            component={Link}
                            href={"/contact"}
                            radius="xl" 
                            variant="outline"
                            color="#0B8F23"
                            > Contactez nous </Button>
                    </div>
                </div>
                <Image src={about_img} className=" " alt="about" />
            </div>
        </>
    )
}

export default AboutHomeSection;