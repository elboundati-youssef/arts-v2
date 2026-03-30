import { motion } from "framer-motion";
import aboutArt from "@/assets/about-art.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="order-2 lg:order-1"
            dir="rtl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4 sm:mb-6 block">
              عن المعرض
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-foreground mb-6 sm:mb-8 leading-snug">
              حيث تتلاقى
              <span className="italic block mt-2">الحضارات والإبداع</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
              <p>
                في قلب مدينة طنجة، ملتقى الحضارات والثقافات، يقدم معرض "تقاطعات الرؤى" تجربة فنية استثنائية تجمع بين أبرز الفنانين المعاصرين من مختلف أنحاء العالم.
              </p>
              <p>
                يستكشف المعرض التقاطعات العميقة بين الهويات الثقافية المتنوعة من خلال أعمال تمزج بين التقليد والحداثة، الشرق والغرب، الحلم والواقع.
              </p>
            </div>
            <div className="divider-dark w-16 mt-8 sm:mt-10" />
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img
              src={aboutArt}
              alt="Abstract contemporary art"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full max-w-sm mx-auto lg:max-w-none shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
