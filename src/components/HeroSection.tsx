import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Art gallery interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-sm tracking-[0.4em] uppercase text-muted-foreground font-body">
            Palais des Arts et de la Culture — Tanger
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl gold-gradient-text mb-6 leading-tight"
        >
          تقاطعات الرؤى
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl text-silver font-body font-light italic mb-2"
          dir="ltr"
        >
          Cultures de l'Âme
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="divider-gold w-24 mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-xl md:text-2xl font-heading tracking-[0.2em] text-foreground mb-12"
          dir="ltr"
        >
          11 — 13 April 2026
        </motion.p>

        <motion.a
          href="#reservation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-12 py-4 border border-primary text-primary font-heading text-lg tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-500 gold-glow"
        >
          احجز تذكرتك VIP
        </motion.a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
