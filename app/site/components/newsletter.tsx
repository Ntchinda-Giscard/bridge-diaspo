"use client";
import Image from 'next/image';
import newsletter from "@/public/assets/newsletter.svg";
import classes from "@/app/site/css/newsletter.module.css";
import cx from 'clsx'
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandXFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { ADD_SUBSCRIBER } from './mutation';
import { useState } from 'react';

export default function NewsLettwer() {
  const [insertSubscriber, { data, loading, error }] = useMutation(ADD_SUBSCRIBER)
  const [ emails, setEmails ] = useState<string | null>(null);

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
              w={200}
              onChange={(e) => {
                const value = e.target.value;
                if (value && value.includes('@')) {
                  setEmails(value);
                } else {
                  setEmails(null);
                }
              }}
            />
            <Button
              variant="gradient"
              gradient={{ from: '#0B8F23', to: '#03290A', deg: 180 }}
              radius={'xl'}
              style={{ transform: 'translateX(-30px)' }}
              loading={loading}
              onClick={() => {
                if (emails) {
                  insertSubscriber({ variables: { emails } })
                    .then(response => {
                      console.log("Subscription successful", response);
                      alert("Subscription successful! Thank you for subscribing.");})
                    .catch(err => {
                      alert("Subscription failed. Please try again later.");
                      // Handle error appropriately
                      console.error("Subscription error", err);
                    });
                } else {
                  alert("Please enter a valid email address");
                }
              }}
            > 
              Abonnez-vous
            </Button>
          </div>
          
          <div className="flex justify-center md:justify-start items-center gap-3 ">
            <div className={classes.iconWrapper}> 
            <Link href={'https://www.facebook.com/goshenbridgeSA?mibextid=LQQJ4d'}>
              <IconBrandFacebookFilled style={{cursor: 'pointer'}} stroke={0.5} color="#FFF" />
            </Link>
            </div>
            <IconBrandInstagram style={{cursor: 'pointer'}} stroke={1} color="#FFF" />
            <IconBrandXFilled style={{cursor: 'pointer'}} stroke={1} color="#FFF" />
          </div>
        </div>
      </div>
    </div>
  );
}