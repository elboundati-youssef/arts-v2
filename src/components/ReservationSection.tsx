import { useState } from "react";
import { motion } from "framer-motion";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit
    alert("شكراً لحجزكم! سنتواصل معكم قريباً.");
  };

  return (
    <section id="reservation" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          dir="rtl"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4 block">
            حجز خاص
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            تجربة <span className="gold-gradient-text">VIP</span> حصرية
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            احجز مقعدك في أمسية الافتتاح الحصرية واستمتع بتجربة فنية لا تُنسى
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-panel p-8 md:p-12 rounded-sm space-y-8"
          dir="rtl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm text-muted-foreground font-body mb-2">الاسم الكامل</label>
              <input
                type="text"
                className="luxury-input w-full text-foreground"
                placeholder="أدخل اسمك الكامل"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground font-body mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                className="luxury-input w-full text-foreground"
                placeholder="email@example.com"
                dir="ltr"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground font-body mb-2">رقم الهاتف</label>
              <input
                type="tel"
                className="luxury-input w-full text-foreground"
                placeholder="+212 600 000 000"
                dir="ltr"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground font-body mb-2">عدد المدعوين</label>
              <input
                type="number"
                min="1"
                max="10"
                className="luxury-input w-full text-foreground"
                placeholder="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-16 py-4 bg-primary text-primary-foreground font-heading text-base tracking-[0.15em] hover:bg-gold-light transition-colors duration-300 gold-glow"
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
