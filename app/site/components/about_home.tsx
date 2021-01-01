import Image from 'next/image';
import {Button, Group, Stack} from '@mantine/core';
import logo from '@/public/assets/topLogo.svg';
import about_img from '@/public/assets/about.svg';
import classes from "@/app/auth/login/css/about.module.css";
import Link from "next/link"

function AboutHomeSection(){

    return(
        <>
            <div className= " flex flex-col-reverse justify-between lg:flex-row w-full gap-6 p-10 ">
                <div className=" w-full flex flex-col gap-6 " >
                    <Image height={20} width={108} src={logo} alt="logo" />
                    
                    <p className={classes.catchtext}>
                        Votre partenaire pour tout vos services sur mesure
                    </p>
                    <p className={classes.desc_text}>
                        {"Bienvenue chez Bridge SA, votre partenaire privilégié pour tous les services dont vous avez besoin. Nous sommes dédiés à simplifier votre quotidien en vous offrant une gamme complète de solutions adaptées à chaque aspect de votre vie. Notre mission est de fournir des services de qualité supérieure, allant de l’entretien ménager et des réparations, à la gestion des tâches administratives et bien plus encore. Notre équipe d’experts est prête à répondre à vos besoins spécifiques, garantissant ainsi votre satisfaction. Chez Bridge SA, nous croyons que chaque client mérite un service personnalisé. C’est pourquoi nous mettons un point d’honneur à écouter vos attentes et à vous offrir des solutions sur mesure. Rejoignez-nous pour découvrir la tranquillité d’esprit que procure un service fiable et efficace. Simplifiez votre vie, confiez-nous vos besoins !"}
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
                {/* <Image src={about_img} className=" " alt="about" /> */}
                <div className={"w-3/5"}>
                    <video
                        controls
                        autoPlay
                        loop
                        style={{
                            width: '100%',
                            // height: '100%',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0,0,0, 0.2)'
                        }}
                    >
                        <source src={"/assets/VIDEO-2024-11-06-16-22-47.mp4"} type="video/mp4"/>
                        Your video tag is not supported

                    </video>
                </div>

            </div>
        </>
    )
}

export default AboutHomeSection;