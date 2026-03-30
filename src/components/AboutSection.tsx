import { motion } from "framer-motion";
import aboutArt from "@/assets/about-art.jpg";

const AboutSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="order-2 lg:order-1"
            dir="rtl"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4 block">
              عن المعرض
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-8 leading-snug">
              حيث تتلاقى
              <span className="gold-gradient-text block mt-2">الحضارات والإبداع</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                في قلب مدينة طنجة، ملتقى الحضارات والثقافات، يقدم معرض "تقاطعات الرؤى" تجربة فنية استثنائية تجمع بين أبرز الفنانين المعاصرين من مختلف أنحاء العالم.
              </p>
              <p>
                يستكشف المعرض التقاطعات العميقة بين الهويات الثقافية المتنوعة من خلال أعمال تمزج بين التقليد والحداثة، الشرق والغرب، الحلم والواقع.
              </p>
            </div>
            <div className="divider-gold w-16 mt-10" />
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <img
                src={aboutArt}
                alt="Abstract contemporary art"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full max-w-md mx-auto lg:max-w-none rounded-sm"
              />
              <div className="absolute -inset-4 border border-primary/20 rounded-sm -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 rounded-sm -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
