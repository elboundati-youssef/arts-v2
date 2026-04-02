import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Asset1 from "@/assets/Asset 1black.png";

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* 1. الشعارات (يمين الشاشة) */}
       <div className="flex items-center gap-4 sm:gap-6">
          <img 
            src={Asset1} 
            alt="وزارة الشباب والثقافة" 
            // 🔴 تم التكبير: w-28 للموبايل، و sm:w-40 أو md:w-48 للشاشات الأكبر
            className="w-20 sm:w-40 md:w-43 h-auto object-contain" 
          />
        </div>
        {/* 2. اسم المعرض (في المنتصف) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          {/* 🔴 تم إزالة الستايل المضمن واستبدال font-serif بـ font-heading */}
          <span className="font-heading text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] whitespace-nowrap">
            تقاطعات الرؤى
          </span>
        </div>
        {/* 3. الروابط وزر الحجز (يسار الشاشة - ديسكتوب) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-[#d4af37] transition-colors">عن المعرض</a>
          <a href="#artists" className="hover:text-[#d4af37] transition-colors">الفنانون</a>
          
          {/* زر الحجز الفخم */}
          <a 
            href="#reservation" 
            className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full hover:bg-[#d4af37] transition-all duration-300 shadow-sm"
          >
            احجز تذكرتك
          </a>
        </nav>

        {/* زر القائمة للموبايل (يسار الشاشة) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#1A1A1A] p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 4. قائمة الموبايل المنسدلة */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-base font-medium text-gray-600">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#d4af37] transition-colors">عن المعرض</a>
              <a href="#artists" onClick={() => setMenuOpen(false)} className="hover:text-[#d4af37] transition-colors">الفنانون</a>
              
              {/* زر الحجز في الموبايل */}
              <a 
                href="#reservation" 
                onClick={() => setMenuOpen(false)} 
                className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full hover:bg-[#d4af37] transition-all duration-300 w-11/12 text-center mt-2"
              >
                احجز تذكرتك
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderSection;