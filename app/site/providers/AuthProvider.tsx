"use client"
import {useRouter, usePathname} from 'next/navigation'
import {useEffect, useState} from 'react';

export default function AuthProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const router  = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const token = localStorage.getItem('token-bridge');
        
        if(pathname == '/site/mes-travaux'){
            console.log(token)
            if(token == null){
                console.log("no token")
                router.push('/auth/login')
            }else{
                setLoading(false)
            }
        }
    }, [pathname])

    if (pathname == '/mes-travaux' && loading){
        return(<> Loading... </>)
    }
    return (
        <>
            {children}
        </>
    )
}