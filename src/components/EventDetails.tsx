import { motion } from "framer-motion";
// 🔴 أضف استيراد صورة الخلفية هنا (يمكن استخدام نفس صورة Hero أو صورة جديدة)
import backgroundPattern from "@/assets/.web/back2-t.webp"; 

const EventDetails = () => {
  return (
    <section id="details" className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] px-5 sm:px-8 relative overflow-hidden" dir="rtl">
      
      {/* ========================================= */}
      {/* 🔴 الخلفية الفنية المدمجة (Texture) */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={backgroundPattern} 
          alt="" 
          width={1920}      
          height={1080}     
          loading="lazy"     
          aria-hidden="true"
          // opacity-10 خفيفة جداً، مع mix-blend لدمجها مع الخلفية الرمادية الفاتحة
          className="w-full h-full object-cover opacity-20 mix-blend-multiply" 
        />
        {/* تدرجات بيضاء من الأعلى والأسفل لدمج القسم مع باقي الموقع، وتمويه (blur) لتقليل التفاصيل */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F8F9FA] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent" />
      </div>

      {/* المحتوى الفعلي للقسم */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start relative">
          
          {/* العمود الأيمن: العنوان وبرنامج المعرض */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8 lg:gap-10 lg:pl-16"
          >
      <h2 
  className="font-heading text-center lg:text-right text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#111111] leading-tight" 
>
  تفاصيل وبرنامج
  <span className="block italic text-gray-500 mt-1 lg:mt-2 text-2xl sm:text-3xl lg:text-4xl">المعرض</span>
</h2>
            
            <div className="flex flex-col">
              {[
                "حفل الافتتاح الرسمي في أروقة قصر الفنون والثقافة",
                "أكثر من ٢٠ فنانًا وفنانة من مختلف ربوع المملكة",
                "أجواء موسيقية ساحرة على أنغام آلة الهارب",
                "فضاء حصري للتواصل الراقي وتبادل الرؤى الفنية"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="flex items-start gap-3 lg:gap-5 py-4 lg:py-5 border-b border-gray-200/80 last:border-0"
                >
                  <span className="text-[#d4af37] text-xs lg:text-sm mt-[6px] opacity-80">◆</span>
                  <p className="text-base lg:text-[1.1rem] text-gray-700 leading-relaxed tracking-wide font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

<div className="hidden lg:block absolute left-[41%] top-10 bottom-10 w-[1px] bg-gray-200/80" />

          {/* العمود الأيسر: بطاقة المعلومات (الزمان والمكان) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:pr-16 w-full mt-4 lg:mt-0"
          >
            {/* في الموبايل: أضفنا خلفية بيضاء شبه شفافة (backdrop-blur) لكي تبرز فوق الخلفية الفنية */}
            <div className="flex flex-col gap-6 lg:gap-10 lg:mt-6 bg-white/90 backdrop-blur-md lg:bg-transparent p-7 sm:p-8 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none border border-gray-100 lg:border-none">
              
              {/* التاريخ */}
              <div>
                <h3 className="font-body text-[15px] lg:text-xs uppercase tracking-widest text-gray-500 mb-2 lg:mb-3 font-medium">التاريخ</h3>
                <p className="font-body text-xl sm:text-2xl lg:text-3xl text-[#111111]">
                  11 · 12 · 13 أبريل 2026
                </p>
              </div>

              {/* الوقت */}
              <div>
                <h3 className="font-body text-[15px] lg:text-xs uppercase tracking-widest text-gray-500 mb-2 lg:mb-3 font-medium">الوقت</h3>
                <p className="font-body text-xl sm:text-2xl lg:text-3xl text-[#111111]">
                  الساعة السادسة مساءً
                </p>
              </div>

              {/* المكان */}
              <div>
                <h3 className="font-body text-[15px] lg:text-xs uppercase tracking-widest text-gray-500 mb-2 lg:mb-3 font-medium">المكان</h3>
                <p className="font-body text-xl sm:text-2xl lg:text-3xl text-[#111111]">
                  قصر الفنون والثقافة — طنجة
                </p>
              </div>

              {/* الدخول */}
              <div className="pt-4 lg:pt-6 border-t border-gray-200/80">
                <h3 className="font-body text-[15px] lg:text-xs uppercase tracking-widest text-gray-500 mb-2 lg:mb-3 font-medium">الوصول</h3>
                <p className="font-body text-lg sm:text-xl lg:text-2xl text-[#d4af37]">
                  الدخول مجاني — بالتسجيل المسبق فقط
                </p>
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EventDetails;