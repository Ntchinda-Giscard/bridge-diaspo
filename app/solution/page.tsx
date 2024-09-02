import TopBanner from "../components/topBanner";
import Image from 'next/image'
import solImg from '@/public/assets/sol.svg'
import classes from '@/app/solution/solution.module.css';
import {Poppins} from 'next/font/google';
import cx from 'clsx';

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
                <Image src={solImg} alt="about" height={500} width={538} />
                <div id="text area" className="flex flex-col gap-4" style={{width: 538}}>
                    <p className={cx([classes.wwa, poppins_bold.className])}> qui somme nous </p>
                    <p className={cx([classes.heading, poppins_bold.className])}>WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION</p>
                    <p className={cx([classes.desc, poppins_light.className])}> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                </div>
            </div>
        </> 
    );
}

export default Solutions;