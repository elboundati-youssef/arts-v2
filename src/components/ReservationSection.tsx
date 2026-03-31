import { useState } from "react";
import { motion } from "framer-motion";
import darkTexture from "@/assets/dark-texture.jpg"; // تأكد من وجود الصورة

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("شكراً لحجزكم! سنتواصل معكم قريباً.");
  };

  return (
    <section id="reservation" className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden font-komomken">
      {/* Dark luxury background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={darkTexture} 
          alt="" 
          className="w-full h-full object-cover" 
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0a1628]/90" /> {/* تم زيادة قتامة الخلفية قليلاً لإبراز النص الأبيض */}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
          dir="rtl"
        >
          <span className="text-sm tracking-widest text-white/80 mb-3 sm:mb-4 block">
            حجز خاص
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 sm:mb-6">
            تجربة <span className="text-[#d4af37]">VIP</span> حصرية
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-lg mx-auto">
            احجز مقعدك في أمسية الافتتاح الحصرية واستمتع بتجربة فنية لا تُنسى
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8 sm:space-y-12"
          dir="rtl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            
            {/* حقل الاسم */}
            <div>
              <label className="block text-sm sm:text-base text-white/90 mb-2 sm:mb-3">الاسم الكامل</label>
              <input
                type="text"
                className="w-full bg-transparent border-0 border-b border-white/40 px-0 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-0 transition-colors duration-300 text-base sm:text-lg"
                placeholder="أدخل اسمك الكامل"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* حقل البريد الإلكتروني */}
            <div>
              <label className="block text-sm sm:text-base text-white/90 mb-2 sm:mb-3">البريد الإلكتروني</label>
              <input
                type="email"
                className="w-full bg-transparent border-0 border-b border-white/40 px-0 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-0 transition-colors duration-300 text-base sm:text-lg"
                placeholder="email@example.com"
                dir="ltr"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* حقل رقم الهاتف */}
            <div>
              <label className="block text-sm sm:text-base text-white/90 mb-2 sm:mb-3">رقم الهاتف</label>
              <input
                type="tel"
                className="w-full bg-transparent border-0 border-b border-white/40 px-0 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-0 transition-colors duration-300 text-base sm:text-lg"
                placeholder="+212 600 000 000"
                dir="ltr"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            {/* حقل عدد المدعوين */}
            <div>
              <label className="block text-sm sm:text-base text-white/90 mb-2 sm:mb-3">عدد المدعوين</label>
              <input
                type="number"
                min="1"
                max="10"
                className="w-full bg-transparent border-0 border-b border-white/40 px-0 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-0 transition-colors duration-300 text-base sm:text-lg"
                placeholder="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                required
              />
            </div>
            
          </div>

         {/* زر الحجز */}
          <div className="text-center pt-6 sm:pt-8">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // 🔴 البداية: خلفية ذهبية ونص أسود | عند التمرير: خلفية سوداء ونص أبيض
              className="inline-flex items-center justify-center px-10 py-3.5 sm:px-16 sm:py-4 bg-[#d4af37] text-[#1A1A1A] font-medium text-[15px] sm:text-lg hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 shadow-lg rounded-full"
            >
              تأكيد الحجز
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;