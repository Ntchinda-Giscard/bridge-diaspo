import Image from 'next/image';
import classes from "@/app/site/css/seivce.module.css";
import agri from '@/public/assets/agri.jpg'
import Link from 'next/link'

interface service{
    service: string,
    desc: string,
    image: any,
    link: string,
}

export default function ServiceBlock({ service, desc, image, link }: service) {
    return (
        <div className= {classes.serviceBlock}>
            <a href={link}>
                <div className= {classes.imageBontainer}>
                    <Image 
                        src = {image}
                        alt="Service Image"
                        // layout="fill"
                        // objectFit="cover"
                        quality={100}
                        width={300}
                        height={600}
                    />
                    <div className= {classes.overlay}>
                        <span className= {classes.overlayText} > {service} </span>
                        <p className={classes.desc}>{desc}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}