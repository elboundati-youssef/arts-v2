import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import artistStudio from "@/assets/video/Reel_Expo_Najah.mp4";

const VideoSection = () => {
  // Création d'une référence pour cibler l'élément vidéo
  const videoRef = useRef(null);
  
  // useInView détecte si la vidéo est visible à l'écran
  const isInView = useInView(videoRef, { margin: "0px" });

  // Gère la lecture et la pause en fonction de la visibilité
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => console.log("Lecture automatique bloquée:", error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden" 
        >
          {/* L'attribut autoPlay a été retiré, le useEffect s'en charge */}
          <video
            ref={videoRef}
            src={artistStudio}
            loop
            muted
            playsInline
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          ></video>
          
          <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />
          
          {/* L'icône de lecture (Play) et son conteneur ont été complètement supprimés */}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;