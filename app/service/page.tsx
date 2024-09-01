"use client"
import TopBanner from "../components/topBanner";
import {services} from "@/app/components/sub-components.tsx/service-data";
import Image from 'next/image';
import classes from '@/app/service/css/service.module.css';
import { Button, List, ThemeIcon, rem } from "@mantine/core";
import { IconSquareCheckFilled} from '@tabler/icons-react';


function Services(){

    return (
        <>
            <TopBanner 
                title="Nos differentes services"
                links="Home  / Nos services"
            />
            {
                services.map((s, index) => (
                    <div className={`flex mt-20 mb-8 gap-20 ${ index%2 === 0?'flex-row' : 'flex-row-reverse'} justify-center w-screen`} >
                        <div>
                            <Image src={s?.image} alt={s?.service} width={400} height={400} />
                        </div>
                        <div className="flex flex-col" style={{ maxWidth: 400 }}>
                            <p className={classes.name}> /SERVICE </p>
                            <h2 className={classes.heading}>{s?.service}</h2>
                            <p className={classes.desc}>{s?.desc}</p>
                            <p className={classes.name}> /AVANTAGES </p>
                            <div className="flex flex-row w-full justify-between">
                                <List
                                    spacing={'sm'}
                                    center
                                    size="sm"
                                    mt={10}
                                    icon={
                                        <IconSquareCheckFilled color="#0B8F23" style={{ width: rem(20), height: rem(20) }} />
                                    }
                                >
                                    {
                                        s?.points?.map((p) => (
                                            <List.Item c="#0B8F23"> {p} </List.Item>
                                        ))
                                        
                                    }
                                </List>
                                <div className={" h-full flex items-end "}>
                                    <Button size="compact-md" styles={{ label:{ fontSize: 12, fontWeight: 400 } }} className="flex items-end" radius="xl" bg="#0B8F23" >En savoir plus</Button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Services;