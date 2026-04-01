import { motion } from "framer-motion";
import gradientWave from "@/assets/.web/gradient-wave.webp";

const StatementSection = () => {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* الموجة اللونية في الخلفية */}
      <img
        src={gradientWave}
        alt=""
        loading="lazy"
        width={1920}
        height={768}
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          // 🔴 أضفنا font-heading هنا ومسحنا سطر style بالكامل
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-snug"
          dir="rtl"
        >
          الفن لا يعرف حدوداً
        </motion.blockquote>
      </div>
    </section>
  );
};

export default StatementSection;