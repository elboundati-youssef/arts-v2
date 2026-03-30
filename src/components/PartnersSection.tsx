import { motion } from "framer-motion";

const partners = [
  "Ministère de la Culture",
  "Palais des Arts",
  "Fondation Tangier",
  "Institut Français",
];

const PartnersSection = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-8 sm:mb-12 block">
            Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-20">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-muted-foreground font-body text-xs sm:text-sm tracking-[0.15em] uppercase opacity-60 hover:opacity-100 transition-opacity"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
