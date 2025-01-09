import HeroSection from "@/components/landing/Hero/HeroSection";
import SectionShowProducts from "@/components/landing/SectionShowProducts";
import SectionTestimoni from "@/components/landing/SectionTestimoni";
import SectionThreeStep from "@/components/landing/SectionThreeStep";
import SectionToProductPage from "@/components/landing/SectionToProductPage";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionToProductPage />
      <SectionShowProducts />
      <SectionThreeStep />
      <SectionTestimoni />
    </main>
  );
}
