import TopBanner from "../components/topBanner";
import {solutions} from '@/app/solution/components/solutions'
import Image from 'next/image'
import solImg from '@/public/assets/sol.svg'
import classes from '@/app/solution/solution.module.css';
import {Poppins} from 'next/font/google';
import cx from 'clsx';
import { Divider, Group } from "@mantine/core";
import SolutionCard from "./components/solutionCard";
import NewsLettwer from "../components/newsletter";
import HomeContact from "../components/home_contact";

const poppins_bold = Poppins({
    weight: ['900'],
    subsets: ['latin'],
});
const poppins_light = Poppins({
    weight: ['400'],
    subsets: ['latin'],
})

function Solutions() {
    return ( 
        <>
            <TopBanner 
                title="Tout savoir sur nous"
                links="Home  / A propos"
            />
            <div className = " flex felx-row justify-center gap-4" style={{paddingInline: 50, paddingBlock: 25}}>
                <Image src={solImg} alt="about" height={300} width={438} />
                <div id="text area" className="flex flex-col gap-4" style={{width: 538}}>
                    <p className={cx([classes.wwa, poppins_bold.className])}> qui somme nous </p>
                    <p className={cx([classes.title, poppins_bold.className])}> une seule plateforme, une multitude de services et des solutions. </p>
                    <p className={cx([classes.desc, poppins_light.className])}> 
                    {"Bridge SA  est une entreprise spécialisée dans la fourniture de services complets et sur mesure pour répondre aux besoins des camerounais vivant a l'étranger. en tant que passerelle fiable entre le Cameroun et ses diasporas, bridge SA s’engage a faciliter la gestion des affaire personnel, familiales  et professionnelles a distance .Que ce soit pour  des démarches administratives, des transfert de fonds , la gestion immobilière , la création des entreprises  et ou même l’organisation d’événements spéciaux ,"} </p>
                </div>
            </div>
            <p className={classes.heading}> Nos differents solutions</p>
            <Group justify="center" > 
                <Divider w={"10%"} my={20} />
            </Group>
            <div className="flex justify-center flex-wrap gap-4 w-full">
                {
                    solutions.map((s) =>(
                        <SolutionCard key={s?.title} title={s.title} desc={s.desc} />
                    ))
                }
                
            </div>
            <HomeContact />
            <NewsLettwer />
            
        </> 
    );
}

export default Solutions;