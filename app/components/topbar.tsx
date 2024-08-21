"use client"
import Image from 'next/image';
import toplogo from '@/public/assets/topLogo.svg';
import {links} from '@/app/links';
import Link from 'next/link'
import { Button } from '@mantine/core';
import cx from 'clsx';
import classes from '../css/topbar.module.css';
import { usePathname } from 'next/navigation';


function TopBar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };
    return ( 
        <>
            <div className= {cx(['flex flex-row w-screen justify-between', classes.topbar])} >
                <div>
                    <Image 
                        src={toplogo} 
                        alt='top logo' 
                        width={100} 
                        height={30}
                    />
                </div>
                <div className={cx(['flex flex-row justify-around gap-8'])}>
                    {
                        links.map((l) => (
                            <Link className={cx([classes.link, isActive(l?.link) ? classes.activeLink : null])} href={l?.link}> {l?.label} </Link>
                        ))
                    }
                </div>
                <div>
                    <Button 
                        radius={'xl'} 
                        variant="gradient"
                        gradient={{ from: '#0B8F23', to: '#03290A', deg: 90 }}
                    >
                             Mon Compte 
                    </Button>
                </div>
            </div>
        </> 
    );
}

export default TopBar;