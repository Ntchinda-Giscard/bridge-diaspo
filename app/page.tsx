"use client"
import Image from "next/image";
import HeroSection from "./components/hero";
import StatSection from "./components/state";
import AboutHomeSection from "./components/about_home";
import Services from "./components/service";
import HomeContact from "./components/home_contact";
import Testimonials from "./components/testimonials";
import NewsLettwer from "./components/newsletter";
import { MouseEventHandler, useRef } from 'react';
//@ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function Home() {
  const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        // tawkMessengerRef.current.minimize();
    };
  return (
    <main className="flex min-h-screen flex-col">
      <div>
      <button onClick={handleMinimize}> Minimize the Chat </button>
      <TawkMessengerReact
        propertyId="67079eb902d78d1a30ef6cbb"
        widgetId="default"
        // ref={tawkMessengerRef}
        />
        <HeroSection />
        <StatSection />
        <AboutHomeSection />
        <Services />
        <HomeContact />
        <Testimonials />
        <NewsLettwer /> 
        {/* 
        */}
      </div>
    </main>
  );
}
