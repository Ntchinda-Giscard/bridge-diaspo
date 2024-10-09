import Image from 'next/image';
import newsletter from "@/public/assets/newsletter.svg";
import classes from "@/app/css/newsletter.module.css";
import cx from 'clsx'
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandXFilled } from '@tabler/icons-react';

export default function NewsLettwer() {
  return (
    <div className= {classes.imageContainer}>
      <Image
        src={newsletter}
        alt="Large Image"
        layout="fill"
        objectFit="cover"
        className= {classes.backgroundImage}
      />

      {/* Overlay Components */}
      <div className='flex md:flex-row flex-col w-full  justify-center items-center'>
        <div className='flex flex-col'>
          <p className={cx([classes.overlayInput, classes.title])}> Inscrivez vous a notre Newsletter </p>
          <p className={cx([classes.overlayInput, classes.desc])}>Recevez nos conseils et actualités directement par e-mail</p>
        </div>
        <div className= {cx([classes.overlayInput, 'flex lg:flex-row flex-col justify-center'])} style={{ top: "10%", left: "50%" }} >
          <div className="flex flex-row w-full justify-center">
            <TextInput
              radius="xl"
              placeholder="example@xyz.com"
              // style={{ top: '20%', left: '-10%', }}
              w={250}
            />
            <Button
              variant="gradient"
              gradient={{ from: '#0B8F23', to: '#03290A', deg: 180 }}
              radius={'xl'}
              style={{ transform: 'translateX(-30px)' }}
            > 
              Abonnez-vous
            </Button>
          </div>
          
          <Group w={200}>
            <div className={classes.iconWrapper}> 
              <IconBrandFacebookFilled style={{cursor: 'pointer'}} stroke={0.5} color="#FFF" />
            </div>
            <IconBrandInstagram style={{cursor: 'pointer'}} stroke={1} color="#FFF" />
            <IconBrandXFilled style={{cursor: 'pointer'}} stroke={1} color="#FFF" />
          </Group>
        </div>
      </div>
    </div>
  );
}