import { motion } from "framer-motion";
import img4 from "@/assets/img4.jpeg";
const BiographySection = () => {
  return (
    <section id="about-artist" className="py-20 sm:py-32 bg-white px-5 sm:px-8 overflow-hidden" dir="rtl">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* 1. جهة اليمين (النص والسيرة الذاتية) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col order-2 lg:order-1"
          >
            {/* العناوين */}
            <div className="mb-8 sm:mb-12 text-center lg:text-right">
              <span className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase mb-3 block font-medium">
                إشراف وتنسيق
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-[4rem] text-[#111111] leading-tight" style={{ fontFamily: 'Amiri, serif' }}>
                مريم <span className="italic text-gray-400">نجاح</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#d4af37] mx-auto lg:mx-0 mt-6 sm:mt-8 opacity-60" />
            </div>

            {/* النص الوصفي */}
            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-[1.9] font-light text-center lg:text-right px-2 sm:px-0">
              <p>
                <strong className="text-[#1A1A1A] font-medium">مريم نجاح</strong> فنانة تشكيلية مغربية تستمد تجربتها من تلاقي الإحساس والذاكرة، حيث تشتغل على البورتريه بأسلوب يجمع بين الواقعية والتجريد، بحثاً عن عمق الإنسان وعلاقته بالطبيعة.
              </p>
              <p>
                تتحول الملامح في أعمالها إلى حالات شعورية، وتحتل المرأة مكانة مركزية تعكس الهشاشة والقوة، بينما يرمز الحصان للحرية والحدس. تعتمد لغة لونية حساسة تحول التوتر إلى انسجام، مانحة اللوحات بعداً تأملياً.
              </p>
              <p>
                شاركت في معارض جماعية، وتنسق معرض <span className="text-[#d4af37] font-medium">"تقاطعات الرؤى"</span> بشراكة مع قطاع الثقافة، سعياً لدعم الإبداع وتعزيز الحضور الفني.
              </p>
              <p>
                تجربتها تقوم على رؤية تجعل الفن مجالاً للتأمل والشعور، مع اهتمام خاص بالتعبير البصري والهوية الفنية المتجددة والانفتاح على تجارب معاصرة.
              </p>
            </div>
          </motion.div>

          {/* 2. جهة اليسار (الصورة والاسم) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-full aspect-[3/4] mx-auto mb-6 group">
              
              {/* الإطار الخلفي المزاح (Offset Border) - لمسة مجلات */}
              <div className="absolute inset-0 border border-gray-200 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8 z-0" />
              
              {/* الصورة نفسها */}
              <div className="absolute inset-0 overflow-hidden bg-gray-50 z-10 shadow-sm">
                <img 
                  src={img4} 
                  alt="الفنانة التشكيلية مريم نجاح" 
                  loading="lazy"
                  // 🔴 تم إزالة grayscale و opacity-90 لكي تظهر الألوان الأصلية فوراً
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* اللقب تحت الصورة */}
            <div className="text-center mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm text-gray-400 tracking-[0.2em] font-medium uppercase">
                مديرة المعرض
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BiographySection;