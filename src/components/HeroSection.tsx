import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroPainting from "@/assets/hero-painting.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex flex-col items-end gap-3 text-right flex-1"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-body">
            Palais des Arts
          </span>
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-body">
            Tangier, Morocco
          </span>
          <div className="divider-dark w-12 mt-4" />
          <span className="font-heading text-lg italic text-muted-foreground mt-2">
            11 — 13 April
          </span>
          <span className="font-heading text-lg italic text-muted-foreground">
            2026
          </span>
        </motion.div>

        {/* Center painting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full max-w-sm lg:max-w-md"
        >
          <img
            src={heroPainting}
            alt="Contemporary abstract painting"
            width={768}
            height={1024}
            className="w-full shadow-2xl"
          />
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-start gap-3 flex-1"
          dir="rtl"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            تقاطعات
            <br />
            الرؤى
          </h1>
          <p className="text-sm text-muted-foreground font-body mt-2 max-w-xs leading-relaxed">
            معرض فني معاصر يجمع رؤى فنانين من مختلف الثقافات في قلب مدينة طنجة
          </p>
          {/* Mobile date */}
          <div className="lg:hidden mt-4 text-sm font-body text-muted-foreground" dir="ltr">
            11 — 13 April 2026 · Tangier
          </div>
        </motion.div>
      </div>

      {/* Explore arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-16 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-body">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
