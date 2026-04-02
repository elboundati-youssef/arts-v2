import { motion } from "framer-motion";
import darkTexture from "@/assets/.web/dark-texture.webp";

const FooterSection = () => {
  return (
  
    <footer className="pt-28 pb-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      
    
      <div className="absolute inset-0 z-0">
     
        <img 
          src={darkTexture} 
          alt="" 
          width={1920}      
          height={1080}     
          loading="lazy"    
          aria-hidden="true" 
          className="w-full h-full object-cover object-bottom sm:object-center" 
        />
        <div className="absolute inset-0 bg-[#0a1628]/92" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center space-y-5 sm:space-y-7"
        >
         <span className="font-heading text-2xl sm:text-3xl text-white">
  تقاطعات الرؤى
</span>
          
          <span className="text-xs sm:text-sm italic text-[#d4af37] font-body tracking-wider">
            Cultures de l'Âme
          </span>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#d4af37]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <div className="w-8 h-[1px] bg-[#d4af37]/60" />
          </div>
          
          <div className="space-y-1.5 text-white/80 font-body text-xs sm:text-sm" dir="rtl">
            <p>قصر الفنون والثقافة</p>
            <p>شارع محمد الخامس، طنجة — المملكة المغربية</p>
          </div>
          
          <p className="text-white/60 text-[10px] sm:text-xs font-body tracking-wider">
            © 2026 Cultures de l'Âme — All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;