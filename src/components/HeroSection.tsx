import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroPainting from "@/assets/hero-painting.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6"
      dir="rtl" // 🔴 تعيين اتجاه النص العام ليكون من اليمين لليسار
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        
        {/* Right text - (أصبح الآن في اليمين بدلاً من اليسار بسبب الـ RTL) - desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} // 🔴 عكس اتجاه الحركة ليتناسب مع الـ RTL
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex flex-col items-start gap-3 text-right flex-1"
        >
          <span className="text-sm text-muted-foreground font-body">
            قصر الفنون والثقافة
          </span>
          <span className="text-sm text-muted-foreground font-body">
            طنجة، المغرب
          </span>
          <div className="bg-[#1A1A1A]/20 w-12 h-[1px] mt-4" /> {/* 🔴 فاصل بسيط بديل لـ divider-dark */}
          <span className="text-lg text-muted-foreground mt-2" style={{ fontFamily: 'Amiri, serif' }}>
            11 — 13 أبريل
          </span>
          <span className="text-lg text-muted-foreground" style={{ fontFamily: 'Amiri, serif' }}>
            2026
          </span>
        </motion.div>

        {/* Center painting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full max-w-[280px] sm:max-w-sm lg:max-w-md relative"
        >
          <img
            src={heroPainting}
            alt="لوحة فنية معاصرة" // 🔴 تعريب النص البديل
            width={768}
            height={1024}
            className="w-full shadow-2xl object-cover rounded-sm"
          />
        </motion.div>

        {/* Left text (أصبح الآن في اليسار) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} // 🔴 عكس اتجاه الحركة ليتناسب مع الـ RTL
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 flex-1"
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-tight text-center lg:text-right"
            style={{ fontFamily: 'Amiri, serif' }} // 🔴 استخدام خط عربي فخم للعناوين
          >
            تقاطعات
            <br />
            الرؤى
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-sm leading-relaxed text-center lg:text-right">
            معرض فني معاصر يجمع رؤى فنانين من مختلف الثقافات في قلب مدينة طنجة.
          </p>
          
          {/* Mobile date */}
          <div className="lg:hidden mt-6 text-sm text-gray-500 text-center flex flex-col items-center gap-1">
            <span>قصر الفنون والثقافة · طنجة</span>
            <span dir="ltr">11 — 13 أبريل 2026</span>
          </div>
        </motion.div>
      </div>

      {/* Explore arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-10 sm:mt-16 flex flex-col items-center gap-2 text-gray-400 hover:text-[#d4af37] transition-colors"
      >
        <span className="text-sm font-medium">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;