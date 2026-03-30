import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="py-10 sm:py-16 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-4 sm:space-y-6"
        >
          <span className="font-heading text-lg sm:text-xl italic text-foreground">
            Cultures de l'Âme
          </span>
          <div className="divider w-12" />
          <div className="space-y-1 text-muted-foreground font-body text-xs sm:text-sm" dir="rtl">
            <p>قصر الفنون والثقافة</p>
            <p>شارع محمد الخامس، طنجة — المغرب</p>
          </div>
          <p className="text-muted-foreground/50 text-[10px] sm:text-xs font-body">
            © 2026 Cultures de l'Âme — All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
