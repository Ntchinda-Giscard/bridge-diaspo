"use client"
import Image from 'next/image';
import toplogo from '@/public/assets/topLogo.svg';
import {links} from '@/app/site/links';
import Link from 'next/link'
import { Button, Burger, Drawer } from '@mantine/core';
import cx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import classes from './TopBar.module.css'; // Import your CSS module


function TopBar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };
  const [opened, setOpened] = useState(false);

    return ( 
    <>
      <div className={cx(classes.topbarContainer)}>
         {/* Burger button for mobile */}
         <div className={classes.burgerContainer}>
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
        </div>
        <div>
          <Image 
            src={toplogo} 
            alt="top logo" 
            width={100} 
            height={30} 
          />
        </div>

        {/* Links container for large screens */}
        <div className={classes.linksContainer}>
          {links.map((l) => (
            <Link
              key={l?.label}
              className={cx(classes.link, isActive(l?.link) ? classes.activeLink : null)}
              href={l?.link}
            >
              {l?.label}
            </Link>
          ))}
        </div>

       

        <div>
          <Button 
            radius="xl" 
            variant="gradient"
            gradient={{ from: '#0B8F23', to: '#03290A', deg: 90 }}
            component={Link}
            href={'/auth/login'}
          >
            Mon Compte
          </Button>
        </div>
      </div>

      {/* Drawer for mobile menu */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="75%" // Adjust size as needed
        padding="md"
        title="Navigation"
        styles={{
          body:{
            zIndex: 999999999999999999999
          }
        }}
      >
        <div className={classes.mobileMenuLinks}>
          {links.map((l) => (
            <Link
              key={l?.label}
              className={cx(classes.link, isActive(l?.link) ? classes.activeLink : null)}
              href={l?.link}
              onClick={() => setOpened(false)} // Close the drawer on link click
            >
              {l?.label}
            </Link>
          ))}
        </div>
      </Drawer>
        </> 
    );
}

export default TopBar;