import { motion } from "framer-motion";
import img1 from "@/assets/img1.jpeg";
import img2 from "@/assets/img2.jpeg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpeg";
import img5 from "@/assets/img5.jpeg";
import img6 from "@/assets/img6.jpeg";
import img7 from "@/assets/img7.jpeg";
import img8 from "@/assets/img8.jpeg";
import img9 from "@/assets/img9.jpeg";
import img10 from "@/assets/img10.jpeg";
import img11 from "@/assets/img11.jpeg";
import img12 from "@/assets/img12.jpeg";
import img13 from "@/assets/img13.jpeg";
import img14 from "@/assets/img14.jpeg";
import img15 from "@/assets/img15.jpeg";
import img16 from "@/assets/img16.jpeg";
import img17 from "@/assets/img17.jpeg";
import img18 from "@/assets/img18.jpeg";
import img19 from "@/assets/img19.jpeg";
import img20 from "@/assets/img20.jpeg";
import img21 from "@/assets/img21.jpeg";

// بيانات الفنانين الحقيقية
const artists = [
  { id: 1, name: "مريم نجاح", image: img1, gender: 'female' },
  { id: 2, name: "توفيق مالك", image: img2, gender: 'male' },
  { id: 3, name: "نادية عبادي", image: img3, gender: 'female' },
  { id: 4, name: "حمودة الزاوي", image: img4, gender: 'male' },
  { id: 5, name: "الغسال مطيع", image: img5, gender: 'male' },
  { id: 6, name: "نجاة داود", image: img6, gender: 'female' },
  { id: 7, name: "عثمان ابن الحبيب", image: img7, gender: 'male' },
  { id: 8, name: "سلوى العلمي", image: img8, gender: 'female' },
  { id: 9, name: "نجاة صحراوي", image: img9, gender: 'female' },
  { id: 10, name: "اسماعيل الحكيم", image: img10, gender: 'male' },
  { id: 11, name: "سارة بن عيسى", image: img11, gender: 'female' },
  { id: 12, name: "حسن زداني", image: img12, gender: 'male' },
  { id: 13, name: "زهور الهيشو", image: img13, gender: 'female' },
  { id: 14, name: "عبد الرحمان اداعلوش", image: img14, gender: 'male' },
  { id: 15, name: "جنات الحراق", image: img15, gender: 'female' },
  { id: 16, name: "حنان الريحاني", image: img16, gender: 'female' },
  { id: 17, name: "عبد السلام الرواحي", image: img17, gender: 'male' },
  { id: 18, name: "منى الأوراوي", image: img18, gender: 'female' },
  { id: 19, name: "شكري الركراكي", image: img19, gender: 'male' },
  { id: 20, name: "سموني نعيمة", image: img20, gender: 'female' },
  { id: 21, name: "فؤاد يزيدي", image: img21, gender: 'male' },
];

// 🔴 الخطوة السحرية: مضاعفة المصفوفة لعمل شريط لا نهائي
const duplicatedArtists = [...artists, ...artists];

const ArtistsSection = () => {
  return (
    <section id="artists" className="py-20 sm:py-32 bg-white overflow-hidden font-komomken" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="text-sm text-gray-400 mb-3 sm:mb-4 block">
            الفنانون المشاركون
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A]">
             فنانون من مختلف <span className="italic text-gray-400">ربوع المملكة</span>
          </h2>
        </motion.div>
      </div>

      {/* شريط الصور المتحرك (Marquee) */}
      <div className="relative w-full overflow-hidden" dir="ltr"> {/* dir="ltr" لضمان اتجاه حركة طبيعي وسلس للأنيميشن */}
        
        {/* ظلال بيضاء على الجوانب للمسة فخمة (Fade edges) */}
        <div className="absolute top-0 left-0 w-16 sm:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 sm:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 sm:gap-10 w-max px-4"
          // الحركة من 0 إلى النصف (-50%) لعمل دوران لا نهائي سلس
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 80, // كلما زاد الرقم أصبحت الحركة أبطأ وأفخم
            repeat: Infinity 
          }}
        >
          {duplicatedArtists.map((artist, i) => (
            <div 
              // استخدام index لتجنب تكرار الـ key
              key={`${artist.id}-${i}`} 
              className="w-[220px] sm:w-[320px] flex-shrink-0 group cursor-pointer" 
              dir="rtl" // إعادة اتجاه النص للعربية داخل كل بطاقة
            >
              {/* حاوية الصورة */}
              <div className="aspect-[3/4] overflow-hidden mb-4 sm:mb-5 bg-gray-100 rounded-sm">
               <img
                  src={artist.image}
                  // 🔴 استخدمنا الجنس لجعل النص البديل احترافياً للـ SEO والمكفوفين
                  alt={`الفنان${artist.gender === 'female' ? 'ة التشكيلية' : ' التشكيلي'} ${artist.name}`}
                  
                  // 🔴 الأبعاد ضرورية جداً هنا لحجز مساحة لـ 21 صورة ومنع اهتزاز الصفحة (CLS)
                  width={400}
                  height={550}
                  
                  loading="lazy"
                  // 🔴 إزالة تأثير الأبيض والأسود والشفافية لإظهار الألوان الطبيعية
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              
              {/* النصوص */}
              <div className="text-right pr-1">
                <h3 className="text-lg sm:text-xl text-[#1A1A1A] font-medium transition-colors group-hover:text-[#d4af37]">
                  {artist.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  {artist.gender === 'male' ? 'فنان تشكيلي' : 'فنانة تشكيلية'}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArtistsSection;