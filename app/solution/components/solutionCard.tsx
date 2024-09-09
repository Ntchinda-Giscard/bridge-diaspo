import {Poppins} from 'next/font/google';
import cx from 'clsx'
import classes from '../solution.module.css';

const poppins_bold = Poppins({
    weight: ['700'],
    subsets: ['latin'],
});

const poopins_samll = Poppins({
    weight: ['400'],
    subsets: ['latin'],
});

interface solutions{
    title: string
    desc: string
}

function SolutionCard({title, desc}: solutions) {
    return ( <>
     <div className={classes.solCard}>
        <p className={cx([poppins_bold.className, classes.solCardTitle])}>solution 1</p>
        <p className={cx([poopins_samll.className, classes.solCardDesc])}>
            Promouvoir une croissance économique soutenue, inclusive et durable et un travail décent pour tous
        </p>
        
     </div>
    </> );
}

export default SolutionCard;