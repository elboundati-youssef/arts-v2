import { motion } from "framer-motion";
import tangierCollage from "@/assets/Asset 4-t.png";
import stoneSculpture from "@/assets/download-t-t.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-36 px-4 sm:px-6 relative overflow-hidden font-komomken">
      {/* Subtle background texture */}
      <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none">
        <img src={stoneSculpture} alt="" className="w-full h-full object-cover opacity-[0.02]" aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-8 items-center">
          
          {/* ========================================= */}
          {/* 1. قسم النص (سيظهر أولاً في الموبايل) */}
          {/* ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            // 🔴 تم إزالة كلاسات order لكي يظهر النص في الأعلى
            className="lg:col-span-7 lg:pr-16"
            dir="rtl"
          >
            <span className="text-[15px] sm:text-xs tracking-[0.4em] uppercase text-muted-foreground/60 mb-6 sm:mb-8 block">
              عن المعرض
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 sm:mb-10 leading-[1.15]">
              حيث تتلاقى
              <span className="italic block mt-2 text-muted-foreground/60">الحضارات والإبداع</span>
            </h2>
            <div className="space-y-5 sm:space-y-7 text-muted-foreground text-sm sm:text-[15px] leading-[1.9]">
              <p>
                في قلب مدينة طنجة، ملتقى الحضارات والثقافات، يقدم معرض <span className="text-foreground font-medium">"تقاطعات الرؤى"</span> تجربة فنية استثنائية تجمع بين أبرز الفنانين المعاصرين من مختلف أنحاء المملكة.
              </p>
              <p>
                يستكشف المعرض التقاطعات العميقة بين الهويات الثقافية المتنوعة من خلال أعمال تمزج بين التقليد والحداثة، الشرق والغرب، الحلم والواقع.
              </p>
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-16 h-[2px] bg-[#d4af37]/40 mt-8 sm:mt-12 origin-right"
            />
          </motion.div>

          {/* ========================================= */}
          {/* 2. قسم الصورة (ستظهر أسفل النص في الموبايل) */}
          {/* ========================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            // 🔴 تم إزالة كلاسات order وإضافة margin-top للموبايل
            className="lg:col-span-5 flex justify-center mt-4 lg:mt-0"
          >
            <div className="relative">
              <img
                src={tangierCollage}
                alt="كولاج فني يمثل طنجة"
                width={600}
                height={800}
                loading="lazy"
                className="w-full max-w-[220px] sm:max-w-[360px] lg:max-w-[420px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              />
              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] -z-10 bg-[#d4af37]/[0.04] blur-[60px] rounded-full" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;