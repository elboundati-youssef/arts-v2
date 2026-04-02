import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import artistStudio from "@/assets/video/v11.mp4";

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
      <div className="max-w-6xl mx-auto flex justify-center"> {/* 🔴 flex justify-center لتوسيط الهاتف */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // 🔴 أضفنا خصائص الهاتف: عرض محدد، طول 9/16، زوايا دائرية، وإطار سميك
          className="relative group overflow-hidden w-full max-w-[280px] sm:max-w-[340px] aspect-[9/16] rounded-[2.5rem] sm:rounded-[3rem] border-[8px] sm:border-[10px] border-gray-900 bg-black shadow-2xl" 
        >
          {/* 🔴 class h-full بدلاً من aspect-video */}
          <video
            ref={videoRef}
            src={artistStudio}
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          ></video>
          
          <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />
          
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;