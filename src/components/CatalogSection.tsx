import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Cover from "@/assets/.web/newcatalog.webp";
import backgroundPattern from "@/assets/.web/imgblue.webp"; 
import Pdf from "@/assets/pdf/art-pdf.pdf";

const CatalogSection = () => {
  return (
    <section id="catalog" className="py-20 sm:py-32 px-5 sm:px-8 bg-[#F8F9FA] relative overflow-hidden" dir="rtl">
      
      {/* ========================================= */}
      {/* 🔴 صورة الخلفية التي أضفناها هنا */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={backgroundPattern} 
          alt="" 
          width={1920}       
          height={1080}       
          loading="lazy"      
          aria-hidden="true"  
          className="w-full h-full object-cover opacity-[0.06] mix-blend-multiply" 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ========================================= */}
          {/* 1. عمود النصوص */}
          {/* ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-right"
          >
            {/* العناوين */}
            <div className="mb-6 sm:mb-8">
              <span className="text-[15px] sm:text-xs text-gray-400 tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 block font-medium">
                الإصدار الرسمي
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] text-[#111111] leading-tight">
                الكتالوج الفني <span className="italic text-gray-400 block sm:inline mt-1 sm:mt-0">للمعرض</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#d4af37] mx-auto lg:mx-0 mt-6 sm:mt-8 opacity-60" />
            </div>

            {/* النص الوصفي */}
            <div className="font-light text-base sm:text-lg leading-[1.9] text-gray-600 mb-10 sm:mb-12 space-y-4 max-w-lg mx-auto lg:mx-0">
              <p>
                اكتشفوا تفاصيل الأعمال الفنية، السير الذاتية للفنانين المشاركين، وقراءات نقدية متعمقة في هذا الإصدار الخاص بمعرض <span className="text-[#1A1A1A] font-medium">"تقاطعات الرؤى"</span>.
              </p>
              <p>
                لقد حرصنا على توثيق هذه التجربة الثقافية في كتاب رقمي يجمع بين جمالية الصورة وعمق الكلمة، ليبقى مرجعاً وذكرى لهذا الحدث الفني الاستثنائي في مدينة طنجة.
              </p>
            </div>

            {/* ---> الصورة المصغرة الخاصة بالهاتف فقط <--- */}
            <div className="lg:hidden w-full max-w-[260px] mx-auto mb-10 relative">
              <img
                src={Cover}
                alt="غلاف كتالوج المعرض"
                width={1280}       
                height={1280}     
                loading="lazy"     
                className="w-full h-auto object-cover shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* زر التحميل */}
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={Pdf}
              download="كتالوج_تقاطعات_الرؤى.pdf"
              className="mt-6 sm:mt-10 inline-flex items-center justify-center px-7 py-3 sm:px-10 sm:py-4 bg-[#1A1A1A] text-white font-medium text-[15px] sm:text-lg hover:bg-[#d4af37] hover:text-[#1A1A1A] transition-all duration-300 shadow-lg rounded-full"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              <Download size={22} className="group-hover:animate-bounce" />
              <span className="mt-1 mr-2">تحميل النسخة الرقمية (PDF)</span>
            </motion.a>
          </motion.div>


          {/* ========================================= */}
          {/* 2. عمود الصورة العملاقة (يظهر في الكمبيوتر فقط) */}
          {/* ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative group w-[380px] h-auto cursor-pointer">
              
              {/* ظل الكتاب الواقعي */}
              <div className="absolute inset-0 bg-black/10 translate-x-4 translate-y-6 blur-xl transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-8 group-hover:blur-2xl" />

              {/* غلاف الكتاب */}
              <div className="relative w-full h-full shadow-[0_0_1px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-1">
                <img
                  src={Cover}
                  alt="غلاف كتالوج المعرض"
                  width={1280}   
                  height={1280}  
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
                
                {/* لمعة زجاجية (Glass glare effect) عند التمرير */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CatalogSection;