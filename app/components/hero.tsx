import hero_img from "@/public/assets/hero.svg";
import Image from 'next/image'
import classes from '../css/hero.module.css';
import cx from 'clsx'
import { Button, Group } from "@mantine/core";

function HeroSection() {
    return ( <>
    <div className= {cx(["w-full", classes.hero])} >
        <Image src={hero_img} layout='responsive' objectFit="cover" sizes="width: 100vw" alt="hero image"   />
        <div className={classes.overlay}></div>
        <div className={classes.hero_text}>
            <h1 className={classes.hero_title}>
                Bienvenue chez Bridge. SA
            </h1>
            <p className={classes.hero_desc}>
                Le lien solide avec votre pays d'origine, votre allier de confiance ici et la bas.
                rentrer chez vous par ici!
            </p>

            <Group justify="start" gap={10} mt={15} >
                <Button styles={{ label:{color: "#0B8F23", paddingInline: 18} }} variant="filled" bg='white' color="#0B8F23" radius={'xl'} > Explorer </Button>
                <Button variant='outline' color="#FFF" radius={'xl'} > Contactez nous </Button>
            </Group>
      </div>
    </div>
    </> );
}

export default HeroSection;