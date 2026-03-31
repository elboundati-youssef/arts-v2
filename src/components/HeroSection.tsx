import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroPainting from "@/assets/hero-painting.jpg";
// 🔴 1. أضف استيراد صورة الخلفية هنا (تأكد من المسار واسم الصورة لديك)
import backgroundPattern from "@/assets/Asset 4-t.png"; 

const HeroSection = () => {
  return (
    <section 
      // 🔴 2. أضفنا relative و overflow-hidden فقط دون المساس بالمقاسات والفراغات
      className="min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-24 pb-6 sm:pb-12 px-4 sm:px-6 relative overflow-hidden bg-[#F8F9FA]"
      dir="rtl" 
    >
      {/* ========================================= */}
      {/* 🔴 3. كود الخلفية (لا يأخذ أي مساحة من حجم الصفحة) */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={backgroundPattern} 
          alt="" 
          className="w-full h-full object-cover opacity-15 mix-blend-multiply" 
        />
        {/* طبقة بيضاء شفافة لدمج الخلفية وتوضيح النصوص */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
      </div>

      {/* 🔴 4. أضفنا relative z-10 لرفع المحتوى فوق الخلفية */}
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 relative z-10">
        
        {/* Right text - desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex flex-col items-start gap-3 text-right flex-1"
        >
          <span className="text-sm text-muted-foreground font-body">قصر الفنون والثقافة</span>
          <span className="text-sm text-muted-foreground font-body">طنجة، المغرب</span>
          <div className="bg-[#1A1A1A]/20 w-12 h-[1px] mt-4" />
          <span className="text-lg text-muted-foreground mt-2" style={{ fontFamily: 'Amiri, serif' }}>11 — 13 أبريل</span>
          <span className="text-lg text-muted-foreground" style={{ fontFamily: 'Amiri, serif' }}>2026</span>
        </motion.div>

        {/* Center painting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          // الحجم الوسط المثالي للصورة في الموبايل: 240px
          className="w-full max-w-[240px] sm:max-w-sm lg:max-w-md relative"
        >
          <img
            src={heroPainting}
            alt="لوحة فنية معاصرة"
            width={768}
            height={1024}
            className="w-full shadow-2xl object-cover rounded-sm"
          />
        </motion.div>

        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 flex-1"
        >
          <h1 
            // استعادة الحجم الفخم للعنوان (4xl)
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-tight text-center lg:text-right"
            style={{ fontFamily: 'Amiri, serif' }} 
          >
            تقاطعات{' '}
            <br className="hidden lg:block" /> 
            الرؤى
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-sm leading-relaxed text-center lg:text-right">
            معرض فني معاصر يجمع رؤى فنانين من مختلف الثقافات في قلب مدينة طنجة.
          </p>
          
          {/* Mobile date */}
          <div className="lg:hidden mt-4 text-sm text-gray-500 text-center flex flex-col items-center gap-1">
            <span>قصر الفنون والثقافة · طنجة</span>
            <span dir="ltr">11 — 13 أبريل 2026</span>
          </div>

          {/* زر الحجز */}
          <motion.a
            href="#reservation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // حجم وأبعاد زر متوازنة
            className="mt-6 sm:mt-10 inline-flex items-center justify-center px-7 py-3 sm:px-10 sm:py-4 bg-[#1A1A1A] text-white font-medium text-[15px] sm:text-lg hover:bg-[#d4af37] hover:text-[#1A1A1A] transition-all duration-300 shadow-lg rounded-full"
          >
            احجز تذكرتك VIP
          </motion.a>

        </motion.div>
      </div>

      {/* Explore arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        // مساحة متوازنة للسهم أسفل الشاشة + إضافة z-10 ليكون قابلاً للنقر فوق الخلفية
        className="mt-8 sm:mt-16 flex flex-col items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-[#d4af37] transition-colors relative z-10"
      >
        <span className="text-xs sm:text-sm font-medium">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;