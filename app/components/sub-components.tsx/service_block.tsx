import Image from 'next/image';
import classes from "@/app/css/seivce.module.css";

export default function ServiceBlock() {
    return (
        <div className= {classes.serviceBlock}>
            <div className= {classes.imageBontainer}>
                <Image 
                    src="/your-image.jpg" 
                    alt="Service Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className= {classes.overlay}>
                    <span className= {classes.overlayText} >Your Text Here</span>
                </div>
            </div>
        </div>
    );
}