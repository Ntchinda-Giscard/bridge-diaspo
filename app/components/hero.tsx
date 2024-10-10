import hero_img from "@/public/assets/hero.svg";
import Image from 'next/image'
import classes from '../css/hero.module.css';
import cx from 'clsx'
import { Button, Group } from "@mantine/core";
import Link from 'next/link';
function HeroSection() {
    return ( <>
    <div className= {cx(["w-full", classes.hero])} >
        <Image 
            src={hero_img} 
            // layout='responsive' 
            objectFit="cover" 
            layout="fill"
            sizes="width: 100vw" 
            // style={{
            //     height:'auto'
            // }}
            alt="hero image"   
        />
        <div className={classes.overlay}></div>
        <div className={classes.hero_text}>
            <p className={classes.hero_title}>
                Bienvenue chez Bridge. SA
            </p>
            <p className={classes.hero_desc}>
               {" Le lien solide avec votre pays d'origine, votre allier de confiance ici et la bas.rentrer chez vous par ici!"}
            </p>

            <div className="flex mt-5 md:flex-row flex-col md:justify-start justify-center gap-4" >
                <Button
                    component={Link}
                    href="#section"
                    styles={{ label:{color: "#0B8F23", paddingInline: 18} }} variant="filled" bg='white' color="#0B8F23" radius={'xl'} > Explorer </Button>
                <Button variant='outline' color="#FFF" radius={'xl'} > 
                    Contactez nous 
                </Button>
            </div>
        </div>
    </div>
    </> );
}

export default HeroSection;