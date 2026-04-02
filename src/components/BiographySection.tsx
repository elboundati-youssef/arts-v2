import { motion } from "framer-motion";
import img4 from "@/assets/img4.jpeg";
import backgroundPattern from "@/assets/.web/imgblue.webp"; 

const BiographySection = () => {
  return (
    <section id="about-artist" className="py-20 sm:py-32 bg-white px-5 sm:px-8 overflow-hidden relative font-komomken" dir="rtl">
      
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
          className="w-full h-full object-cover opacity-[0.06] mix-blend-multiply" 
        />
        {/* طبقات التدرج والتمويه لدمج الخلفية بنعومة مع اللون الأبيض */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ========================================= */}
        {/* 🔴 1. العنوان للموبايل فقط (يظهر فوق الصورة) */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="block lg:hidden text-center mb-10"
        >
          <span className="text-[15px] sm:text-sm text-gray-400 tracking-widest uppercase mb-3 block font-medium">
            إشراف وتنسيق
          </span>
          <h2 className="text-4xl sm:text-5xl text-[#111111] leading-tight font-komomken">
            مريم <span className="italic text-gray-400">نجاح</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-6 opacity-60" />
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* جهة اليمين (النص والسيرة الذاتية) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col order-2 lg:order-1"
          >
            {/* ========================================= */}
            {/* 🔴 2. العنوان للكمبيوتر فقط (مخفي في الموبايل) */}
            {/* ========================================= */}
            <div className="hidden lg:block mb-12 text-right">
              <span className="text-sm text-gray-400 tracking-widest uppercase mb-3 block font-medium">
                إشراف وتنسيق
              </span>
              <h2 className="text-[4rem] text-[#111111] leading-tight font-komomken">
                مريم <span className="italic text-gray-400">نجاح</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#d4af37] mx-0 mt-8 opacity-60" />
            </div>

            {/* النص الوصفي */}
            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-[1.9] font-light text-center lg:text-right px-2 sm:px-0 relative z-10">
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

          {/* جهة اليسار (الصورة والاسم) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2"
          >
            {/* المقاسات الدقيقة التي ضبطتها للموبايل والكمبيوتر ظلت كما هي */}
            <div className="relative w-full max-w-[220px] sm:max-w-[350px] lg:max-w-full aspect-[3/4] mx-auto mb-6 group">
              
              {/* الإطار الخلفي المزاح (Offset Border) */}
              <div className="absolute inset-0 border border-gray-200 translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8 z-0" />
              
              {/* الصورة نفسها */}
              <div className="absolute inset-0 overflow-hidden bg-gray-50 z-10 shadow-sm rounded-sm">
                <img 
          src={img4} 
          alt="الفنانة التشكيلية مريم نجاح" 
          width={400}      
          height={600}      
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />
              </div>
            </div>
            
            {/* اللقب تحت الصورة */}
            <div className="text-center mt-4 sm:mt-8">
              <p className="text-[15px] sm:text-sm text-gray-400 tracking-[0.2em] font-medium uppercase">
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