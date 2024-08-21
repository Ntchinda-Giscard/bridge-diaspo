import Image from "next/image";
import HeroSection from "./components/hero";
import StatSection from "./components/state";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div style={{ paddingTop: '5%' }}>
        <HeroSection />
        <StatSection />
      </div>
    </main>
  );
}
