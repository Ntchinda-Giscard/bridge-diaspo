import cx from 'clsx';
import Image from 'next/image'
import classes from '@/app/auth/login/css/asside.module.css';


function Asside(){

    return(
        <div className={cx([classes.assideBG, 'h-screen'])}>
            <p className={classes.title}> BRIDGE. SA </p>
        </div>
    )
}

export default Asside;