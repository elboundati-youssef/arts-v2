import { Helmet } from "react-helmet"; // 🔴 استيراد مكتبة الـ SEO
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
      
      {/* ========================================= */}
      {/* 🔴 إعدادات الـ SEO الخاصة بهذه الصفحة تحديداً */}
      {/* ========================================= */}
      <Helmet>
        <title>الرئيسية | تقاطعات الرؤى - طنجة 2026</title>
        <meta name="description" content="مرحباً بكم في الموقع الرسمي لمعرض تقاطعات الرؤى. اكتشفوا أعمال أبرز الفنانين المغاربة في قصر الفنون والثقافة بطنجة." />
        
        {/* يمكنك إضافة روابط Open Graph خاصة بهذه الصفحة فقط إذا أردت */}
        <meta property="og:title" content="الرئيسية | تقاطعات الرؤى" />
        <meta property="og:url" content="https://www.your-website.com/" />
        
        {/* كلمات مفتاحية إضافية مخصصة للصفحة الرئيسية */}
        <meta name="keywords" content="حجز تذاكر معرض فني, معرض طنجة 2026, الفن المعاصر المغربي, مريم نجاح, قصر الفنون طنجة" />
      </Helmet>

      {/* باقي أقسام الموقع */}
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