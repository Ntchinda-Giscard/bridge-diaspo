import Image from 'next/image';
import classes from "@/app/css/seivce.module.css";
import agri from '@/public/assets/agri.jpg'

interface service{
    service: string,
    desc: string,
    image: any,
    id: string,
}

export default function ServiceBlock({ service, desc, image, id }: service) {
    return (
        <div id={id} className= {classes.serviceBlock}>
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
        </div>
    );
}