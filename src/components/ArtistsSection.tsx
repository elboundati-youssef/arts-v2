import { motion } from "framer-motion";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import artist4 from "@/assets/artist-4.jpg";

const artists = [
  { name: "يوسف العمراني", role: "فنان تشكيلي — المغرب", image: artist1 },
  { name: "صوفيا لوران", role: "نحت معاصر — فرنسا", image: artist2 },
  { name: "كريم المنصوري", role: "فن رقمي — الإمارات", image: artist3 },
  { name: "إيلينا فوستر", role: "تصوير فوتوغرافي — بريطانيا", image: artist4 },
];

const ArtistsSection = () => {
  return (
    <section id="artists" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
          dir="rtl"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4 block">
            الفنانون المشاركون
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            رواد الإبداع <span className="italic">المعاصر</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  width={640}
                  height={896}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div dir="rtl">
                <h3 className="font-heading text-lg text-foreground">{artist.name}</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">{artist.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
