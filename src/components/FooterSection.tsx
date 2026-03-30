import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Logo / Title */}
          <h3 className="font-heading text-2xl gold-gradient-text">تقاطعات الرؤى</h3>
          <div className="divider-gold w-16" />

          {/* Address */}
          <div className="space-y-2 text-muted-foreground font-body text-sm" dir="rtl">
            <p>قصر الفنون والثقافة</p>
            <p>شارع محمد الخامس، طنجة — المغرب</p>
          </div>

          {/* Sponsors */}
          <div className="flex items-center gap-8 text-muted-foreground font-body text-xs tracking-[0.2em] uppercase">
            <span>وزارة الثقافة</span>
            <span className="w-px h-4 bg-border" />
            <span>Ministère de la Culture</span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground/60 text-xs font-body">
            © 2026 Cultures de l'Âme — All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
