import HeroSection from "@/components/Hero/HeroSection";
import SectionShowProducts from "@/components/landing/SectionShowProducts";
import SectionToProductPage from "@/components/landing/SectionToProductPage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionToProductPage />
      <SectionShowProducts />
    </main>
  );
}
