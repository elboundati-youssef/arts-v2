import { motion } from "framer-motion";
import gradientWave from "@/assets/gradient-wave.png";

const StatementSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Wave background */}
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
          className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground leading-snug"
          dir="rtl"
        >
          الفن لا يعرف حدوداً
          <span className="italic block mt-4 text-2xl md:text-4xl lg:text-5xl text-muted-foreground" dir="ltr">
            L'art ne connaît pas de frontières
          </span>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default StatementSection;
