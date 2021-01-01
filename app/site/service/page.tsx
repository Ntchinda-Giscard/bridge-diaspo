"use client"
import TopBanner from "../components/topBanner";
import {services} from "@/app/site/components/sub-components.tsx/service-data";
import Image from 'next/image';
import classes from '@/app/site/service/css/service.module.css';
import { Button, List, Space, ThemeIcon, rem } from "@mantine/core";
import { IconSquareCheckFilled} from '@tabler/icons-react';
import Link from 'next/link';

function Services(){

    return (
        <main>
            <TopBanner 
                title="Nos differentes services"
                links="Home  / Nos services"
            />
            <Space h={30} />
            {
                services.map((s, index) => (
                    <div id={`${s?.service}`} key={s?.service} style={{padding: 15}} className={`flex justify-center w-full mb-8 gap-20 ${ index%2 === 0?'md:flex-row flex-col-reverse' : 'flex-col-reverse md:flex-row-reverse'}`} >
                        <div className={"flex justify-center"}>

                            <Image src={s?.image} alt={s?.service} width={300} height={300} />
                        </div>

                        <div className="flex flex-col w-full justify-center" style={{ maxWidth: 400 }}>
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
                                            <List.Item key={p} c="#0B8F23"> {p} </List.Item>
                                        ))
                                        
                                    }
                                </List>
                                <div className={" h-full flex items-end "}>
                                    <Button href={"/contact"} component={Link} size="compact-md" styles={{ label:{ fontSize: 12, fontWeight: 400 } }} className="flex items-end" radius="xl" bg="#0B8F23" >En savoir plus</Button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}

export default Services;