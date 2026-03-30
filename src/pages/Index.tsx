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
import EventDetails from "@/components/EventDetails";
import BiographySection from "@/components/BiographySection";
import CatalogSection from "@/components/CatalogSection";
import MapSection from "@/components/MapSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <EventDetails />
      <BiographySection />
      <StatementSection />
      <StatsSection />
      <VideoSection />
      <ArtistsSection />
      <ReservationSection />
      <CatalogSection />
   
      <MapSection />
      <FooterSection />
    </main>
  );
};

export default Index;
