import { motion } from "framer-motion";
import tangierCollage from "@/assets/Asset 4-t.png";
import darkTexture from "@/assets/dark-texture.jpg"; 

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden font-komomken bg-[#0a1628]">
      
      {/* ========================================= */}
      {/* 🔴 1. الخلفية: تم تخفيف شفافية الصورة لتختفي الخطوط المزعجة */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={darkTexture} 
          alt="" 
          // opacity-20 ستجعل البقع الذهبية خفيفة جداً ولا تؤثر على النص
          className="w-full h-full object-cover object-center opacity-20 mix-blend-screen" 
          aria-hidden="true" 
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔴 2. شبكة متناسقة (Grid) لتنظيم العناصر بمسافات مريحة */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================= */}
          {/* 1. قسم النص */}
          {/* ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right"
            dir="rtl"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block">
              عن المعرض
            </span>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              حيث تتلاقى
              <span className="italic block mt-2 text-[#d4af37]">الحضارات والإبداع</span>
            </h2>
            
            <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl px-2 sm:px-0">
              <p>
                في قلب مدينة طنجة، ملتقى الحضارات والثقافات، يقدم معرض <span className="text-[#d4af37] font-bold">"تقاطعات الرؤى"</span> تجربة فنية استثنائية تجمع بين أبرز الفنانين المعاصرين من مختلف أنحاء المملكة.
              </p>
              <p>
                يستكشف المعرض التقاطعات العميقة بين الهويات الثقافية المتنوعة من خلال أعمال تمزج بين التقليد والحداثة، الشرق والغرب، الحلم والواقع.
              </p>
            </div>
            
            {/* الخط الذهبي الصغير للتزيين */}
            <div className="w-16 h-[2px] bg-[#d4af37]/60 mt-8" />
          </motion.div>

          {/* ========================================= */}
          {/* 2. قسم الصورة */}
          {/* ========================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[380px]">
              <img
                src={tangierCollage}
                alt="كولاج فني يمثل طنجة"
                loading="lazy"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] -z-10 bg-[#d4af37]/15 blur-[60px] rounded-full" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;