import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-white px-5 sm:px-8 relative overflow-hidden" dir="rtl">
      
      {/* 1. العنوان الرئيسي */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
       <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] text-[#111111]">
  موقع <span className="italic text-gray-400">الحدث</span>
</h2>
        <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-6 opacity-60" />
      </motion.div>

      {/* 2. إطار الخريطة (تصميم كأنه لوحة فنية) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        {/* إطار أبيض ناعم مع ظل خفيف يشبه إطار اللوحات */}
        <div className="p-2 sm:p-3 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 rounded-sm">
          <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden bg-gray-100 relative">
            <iframe 
              // 🔴 قمت بوضع رابط خرائط حقيقي لمدينة طنجة لكي تعمل الخريطة مباشرة
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.365228750874!2d-5.766336641802979!3d35.78359527861346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f8416862c23%3A0xebb7c5b0412272b9!2sPalais%20des%20arts%20et%20de%20la%20culture!5e1!3m2!1sfr!2sma!4v1774524300543!5m2!1sfr!2sma"

              title="خريطة موقع قصر الفنون والثقافة"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.3] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
      </motion.div>

      {/* 3. تفاصيل العنوان */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 text-center flex flex-col gap-2"
      >
        <h3 className="text-2xl sm:text-3xl text-[#111111]" style={{ fontFamily: 'Amiri, serif' }}>
          قصر الفنون والثقافة
        </h3>
        <p className="text-sm sm:text-base text-gray-500 font-light tracking-wide">
          طنجة، المغرب
        </p>
      </motion.div>

      {/* ========================================= */}
      {/* 4. زر الحجز الفخم مع تأثير اللمعان */}
      {/* ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center mt-12 sm:mt-16 pb-4"
      >
        <motion.a 
          href="#reservation"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          
            // 🔴 حجم وأبعاد زر متوازنة
            className="mt-6 sm:mt-10 inline-flex items-center justify-center px-7 py-3 sm:px-10 sm:py-4 bg-[#1A1A1A] text-white font-medium text-[15px] sm:text-lg hover:bg-[#d4af37] hover:text-[#1A1A1A] transition-all duration-300 shadow-lg rounded-full"
          style={{ fontFamily: 'Amiri, serif' }}
        >
          {/* لمعان خفيف يمر عبر الزر (التأثير الذي أضفته أنت) */}
          <motion.div 
            className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]"
            transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1.5 }}
            animate={{ left: ['-100%', '200%'] }}
          />
          <span className="relative z-10 tracking-wide">تأكيد الحضور </span>
        </motion.a>
      </motion.div>
      
    </section>
  );
};

export default MapSection;