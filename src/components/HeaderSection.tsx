import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Twitter, Menu, X } from "lucide-react";

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
        {/* Social Icons - hidden on mobile */}
        <div className="hidden sm:flex items-center gap-4">
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

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="font-heading text-lg sm:text-xl md:text-2xl italic text-foreground whitespace-nowrap">
            Cultures de l'Âme
          </span>
        </div>

        {/* Nav - desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-body tracking-wide text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#artists" className="hover:text-foreground transition-colors">Artists</a>
          <a href="#reservation" className="hover:text-foreground transition-colors">Reserve</a>
        </nav>

        {/* Empty spacer for mobile layout balance */}
        <div className="w-5 sm:hidden" />
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-t border-border bg-background/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6 text-sm font-body tracking-wide text-muted-foreground">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">About</a>
              <a href="#artists" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">Artists</a>
              <a href="#reservation" onClick={() => setMenuOpen(false)} className="hover:text-foreground transition-colors">Reserve</a>
              <div className="flex items-center gap-5 pt-2">
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderSection;
