import hero_img from "public/assets/hero.svg";
import Image from 'next/image'

function HeroSection() {
    return ( <>
    <div className="w-full">
        <Image src={hero_img} alt="hero image" width={700} height={400} />
        <h1 className="text-4xl font-bold text-center mt-8">Welcome to Bridge SA</h1>
    </div>
    </> );
}

export default HeroSection;