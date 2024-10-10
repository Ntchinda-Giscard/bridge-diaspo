import Image from "next/image";
import HeroSection from "./components/hero";
import StatSection from "./components/state";
import AboutHomeSection from "./components/about_home";
import Services from "./components/service";
import HomeContact from "./components/home_contact";
import Testimonials from "./components/testimonials";
import NewsLettwer from "./components/newsletter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div>
        <HeroSection />
        <StatSection />
        <AboutHomeSection />

        {/* 
        <Services />
        <HomeContact />
        <Testimonials />
        <NewsLettwer /> */}
      </div>
    </main>
  );
}
