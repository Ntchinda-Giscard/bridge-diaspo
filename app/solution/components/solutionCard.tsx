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
        <p className={cx([poppins_bold.className, classes.solCardTitle])}>{title}</p>
        <p className={cx([poopins_samll.className, classes.solCardDesc])}>
            {desc}
        </p>
        
     </div>
    </> );
}

export default SolutionCard;