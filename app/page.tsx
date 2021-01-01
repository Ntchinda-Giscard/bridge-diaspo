"use client"
import {useRouter, usePathname} from 'next/navigation'
import {useEffect, useState} from 'react';

export default function Page(){
    const router  = useRouter();
    const pathname = usePathname();

    useEffect(()=>{
        if(pathname == '/'){
            console.log("no token")
            router.push('/site')
        }
    }, [pathname, router])
    return<> Loading...</>
}