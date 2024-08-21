import cx from 'clsx';
import Image from 'next/image'
import classes from '@/app/auth/login/css/asside.module.css';
import handshake from '@/public/assets/handshake.png';

function Asside(){

    return(
        <div className={cx([classes.assideBG, 'h-screen flex flex-col'])}>
            <p className={cx([classes.title, 'h-1/4 items-center'])}> BRIDGE. SA </p>
            <div className={cx(['h-2/4',classes.imageContainer])}>
                <Image 
                    src={handshake} 
                    alt='handshake' 
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div className="h-1/4 justify-center items-center">
                <p className={classes.subTitle}> Partenariat pour la </p>
                <p className={classes.subTitle}> croissance des entreprises </p>
                <p className={classes.desc}> Lorem Ipsum is simply dummy text of the printing and </p>
                <p className={classes.desc}>  typesetting industry. Lorem Ipsum has been the  </p>
            </div>
        </div>
    )
}

export default Asside;