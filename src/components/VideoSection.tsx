import { motion } from "framer-motion";
import { Play } from "lucide-react";
import artistStudio from "@/assets/artist-studio.jpg";

const VideoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer overflow-hidden"
        >
          <img
            src={artistStudio}
            alt="Artist at work in gallery"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full border-2 border-primary-foreground flex items-center justify-center bg-primary-foreground/10 backdrop-blur-sm"
            >
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
