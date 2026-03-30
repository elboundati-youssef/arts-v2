import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const HeaderSection = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="font-heading text-xl md:text-2xl italic text-foreground">
            Cultures de l'Âme
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-body tracking-wide text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#artists" className="hover:text-foreground transition-colors">Artists</a>
          <a href="#reservation" className="hover:text-foreground transition-colors">Reserve</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default HeaderSection;
