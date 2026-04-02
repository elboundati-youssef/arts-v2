import { useRef, useEffect, useState } from "react"; // 🔴 Ajout de useState
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react"; // 🔴 Import des icônes de son
import backgroundPattern from "@/assets/.web/back2-t.webp"; 
import eventVideo from "@/assets/video/v11.mp4"; 

const EventDetails = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { margin: "0px" });
  
  // 🔴 État pour gérer le son (Commence sur "true" pour que la lecture auto fonctionne)
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => console.log("Lecture automatique bloquée:", error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  // 🔴 Fonction pour basculer le son
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="details" className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] px-5 sm:px-8 relative overflow-hidden" dir="rtl">
      
      {/* الخلفية الفنية المدمجة (Texture) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={backgroundPattern} 
          alt="" 
          width={1920}      
          height={1080}     
          loading="lazy"     
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F8F9FA] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent" />
      </div>

      {/* المحتوى الفعلي للقسم */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center relative">
          
          {/* العمود الأيمن: العنوان وبرنامج المعرض */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8 lg:gap-10 lg:pl-16"
          >
            <h2 className="font-heading text-center lg:text-right text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#111111] leading-tight">
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
                  <p className="font-body text-base lg:text-[1.1rem] text-gray-700 leading-relaxed tracking-wide font-medium">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* خط فاصل في الشاشات الكبيرة */}
          <div className="hidden lg:block absolute left-[41%] top-10 bottom-10 w-[1px] bg-gray-200/80" />

          {/* ========================================= */}
          {/* العمود الأيسر: فيديو بشكل هاتف مع زر الصوت */}
          {/* ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full mt-8 lg:mt-0 lg:pr-10"
          >
            {/* تصميم الهاتف */}
            <div className="relative group overflow-hidden w-full max-w-[280px] sm:max-w-[340px] aspect-[9/16] rounded-[2.5rem] sm:rounded-[3rem] border-[8px] sm:border-[10px] border-gray-900 bg-black shadow-2xl">
              <video
                ref={videoRef}
                src={eventVideo}
                loop
                muted={isMuted} // 🔴 يتم التحكم به عبر الـ State
                playsInline
                className="w-full h-full object-cover transition-transform duration-700"
              ></video>
              
              <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500 pointer-events-none" />
              
              {/* 🔴 زر التحكم في الصوت (أسفل يسار الفيديو) */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 left-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-black/60 hover:scale-110 transition-all duration-300"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EventDetails;