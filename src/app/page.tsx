import AboutSection from "@/sections/home/AboutSection";
import IngredientsSection from "@/sections/home/IngredientsSection";
import ProductsSection from "@/sections/home/ProductsSection";
import SecondaryHeroSection from "@/sections/home/SecondaryHeroSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import WhatWeOffer from "@/sections/home/WhatWeOffer";

export default function Home() {
  return (
    <main className='relative'>
      {/* <HeroSection /> */}
      {/* <HeroMarque /> */}
      <SecondaryHeroSection />
      <WhatWeOffer />
      <AboutSection />
      <ProductsSection />
      <IngredientsSection />
      <TestimonialSection />
    </main>
  );
}
