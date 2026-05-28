import { Suspense } from "react";
import ArticlesSection from "@/components/home/articles-section";
import CTASection from "@/components/home/cta-section";
import EventsSection from "@/components/home/events-section";
import GalleryCarousel from "@/components/home/gallery-carousel";
import HeroSection, {
  HeroSectionSkeleton,
} from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection />
      </Suspense>
      <GalleryCarousel />
      <ArticlesSection />
      <EventsSection />
      <CTASection />
    </main>
  );
}
