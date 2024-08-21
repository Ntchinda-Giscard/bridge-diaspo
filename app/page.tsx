import Image from "next/image";
import HeroSection from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div style={{ paddingTop: '5%' }}>
        <HeroSection />
      </div>
    </main>
  );
}
