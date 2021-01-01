import logo from "@/public/assets/logo.svg";
import Image from 'next/image';
import classes from "@/app/css/footer.module.css";
import {links}  from "@/app/links";
import {services} from "@/app/services";
import {ressource} from "@/app/ressource";
import Link from "next/link";
import { Divider, Group } from "@mantine/core";
import {IconBrandFacebook,IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';


function FooterSite() {
    return ( 
        <div className={"min-w-full"} style={{ paddingTop: "5%", paddingInline: "7%" }} >
            <div className="md:flex-row flex-col  flex justify-center md:justify-between items-center w-full"  >
                <div className="flex flex-col" style={{width: 208}}>
                    <Image src={logo} alt="logo" width={220} height={108} />
                    <p className={classes.desc}> 
                    Votre allié pour retourner investir au pays en toute sécurité.</p>
                </div>

                <div className="grid gap-3 w-full justify-center grid-cols-1 md:grid-cols-3 ">
                    <div className="flex flex-col w-full justify-center ">
                        <h3 className={classes.title}>Menu</h3>
                        {
                            links.map((l) => (
                                <Link key={l?.label} className={classes.links} href={l?.link}> {l?.label}  </Link>
                            ))
                        }
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className={classes.title}>Nos services</h3>
                        {
                            services.map((s) => (
                                <Link key={s?.label} className={classes.links} href={s?.link}> {s?.label}  </Link>
                            ))
                        }
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className={classes.title}>Resource</h3>

                        {
                            ressource.map((r) => (
                                <Link key={r?.label} className={classes.links} href={r?.link}> {r?.label}  </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Divider my={20} />
            <div className= " flex md:flex-row md:justify-between flex-col justify-center items-center mb-5 " >
                <p className={classes.copywrite} >© 2024 Bizdzv.Store - Made with ❤️ by NG </p>
                <Group gap={2}>
                    <IconBrandFacebook style={{ cursor: "pointer" }} stroke={1} />
                    <IconBrandInstagram style={{ cursor: "pointer" }} stroke={1} />
                    <IconBrandLinkedin style={{ cursor: "pointer" }} stroke={1} />
                </Group>
            </div>
        </div>
    );
}

export default FooterSite;