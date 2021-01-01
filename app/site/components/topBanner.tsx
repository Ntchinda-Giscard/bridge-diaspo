import classes from "@/app/site/css/topBanner.module.css";
import cx from 'clsx';


interface input{
    title: string,
    links: string
}

function TopBanner({title, links}: input) {
    return ( 
        <>
            <div className={cx([classes.topBanner, 'flex flex-col justify-start w-screen'])}>
                <p className={classes.title}> {title} </p>
                <p className={classes.links}> {links} </p>
            </div>
        </>
     );
}

export default TopBanner;