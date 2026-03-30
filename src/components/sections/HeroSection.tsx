import { motion } from "framer-motion";
import heroImg from "@/assets/hero-nina.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 gold-border-frame">
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/30" />
      
      {/* Vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gold/10 hidden lg:block" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gold/10 hidden lg:block" />

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-cormorant italic text-gold/80 text-xl md:text-2xl mb-4"
      >
        Ясновидящая и гадалка
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-cormorant text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-gold text-center mb-8 tracking-wide"
      >
        Нина Ивановна
      </motion.h1>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center gap-0 mb-12 text-foreground/80"
      >
        <div className="text-center px-4 md:px-6">
          <span className="font-cormorant text-3xl md:text-4xl text-gold font-bold">20+</span>
          <p className="text-xs md:text-sm uppercase tracking-widest mt-1">лет<br/>опыта</p>
        </div>
        <div className="w-px h-12 bg-gold/30" />
        <div className="text-center px-4 md:px-6">
          <p className="text-xs md:text-sm uppercase tracking-widest">Участница<br/>«Битва экстрасенсов»</p>
        </div>
        <div className="w-px h-12 bg-gold/30" />
        <div className="text-center px-4 md:px-6">
          <p className="text-xs md:text-sm uppercase tracking-widest">Уникальный дар!<br/>Старинные методики</p>
        </div>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative max-w-md w-full"
      >
        <div className="relative overflow-hidden rounded-sm border border-gold/20">
          <img 
            src={heroImg} 
            alt="Нина Ивановна — потомственная ясновидящая"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-background/90 border border-gold/20 px-6 py-3 backdrop-blur-sm">
          <p className="font-cormorant italic text-gold/80 text-sm md:text-base">
            Прошлое. Будущее.<br/>Настоящее.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
