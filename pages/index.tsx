import { Clients } from "@/components/Clients";
import Contact from "@/components/Contact";
import { FeaturesCards } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { HeaderMenu } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LetsWorkTogether } from "@/components/LetsWorkTogether";
import PreviousClients from "@/components/PreviousClients";

export default function HomePage() {
  return (
    <>
    <HeaderMenu />
    <Hero />
    <FeaturesCards />
        <PreviousClients />

    <Clients />
    <LetsWorkTogether />
    <Contact />
    <Footer />
    </>
  );
}
