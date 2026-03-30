import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatementSection from "@/components/StatementSection";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import ArtistsSection from "@/components/ArtistsSection";
import ReservationSection from "@/components/ReservationSection";
import PartnersSection from "@/components/PartnersSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <StatementSection />
      <StatsSection />
      <VideoSection />
      <ArtistsSection />
      <ReservationSection />
      <PartnersSection />
      <FooterSection />
    </main>
  );
};

export default Index;
