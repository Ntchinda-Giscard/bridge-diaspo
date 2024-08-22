import Image from "next/image";
import HeroSection from "./components/hero";
import StatSection from "./components/state";
import AboutHomeSection from "./components/about_home";
import Services from "./components/service";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div style={{ paddingTop: '5%' }}>
        <HeroSection />
        <StatSection />
        <AboutHomeSection />
        <Services />
      </div>
    </main>
  );
}
