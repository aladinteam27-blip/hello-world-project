import heroImg from "@/assets/hero-nina.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4">
      {/* Corner decorations */}
      <div className="absolute top-8 left-4 md:left-8 w-12 md:w-16 h-12 md:h-16 border-l border-t border-gold/30" />
      <div className="absolute top-8 right-4 md:right-8 w-12 md:w-16 h-12 md:h-16 border-r border-t border-gold/30" />
      <div className="absolute bottom-8 left-4 md:left-8 w-12 md:w-16 h-12 md:h-16 border-l border-b border-gold/30" />
      <div className="absolute bottom-8 right-4 md:right-8 w-12 md:w-16 h-12 md:h-16 border-r border-b border-gold/30" />
      
      {/* Vertical decorative lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gold/10 hidden lg:block" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gold/10 hidden lg:block" />

      <p className="font-cormorant italic text-gold/80 text-lg md:text-2xl mb-4 scroll-fade-up">
        Ясновидящая и гадалка
      </p>

      <h1 className="gold-gradient-text font-cormorant text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center mb-8 tracking-wide scroll-blur">
        Нина Ивановна
      </h1>

      {/* Stats */}
      <div className="flex items-center gap-0 mb-12 text-foreground/80 scroll-fade-up">
        <div className="text-center px-3 md:px-6">
          <span className="font-cormorant text-2xl md:text-4xl gold-gradient-text-light font-bold">20+</span>
          <p className="text-[10px] md:text-sm uppercase tracking-widest mt-1">лет<br/>опыта</p>
        </div>
        <div className="w-px h-10 md:h-12 bg-gold/30" />
        <div className="text-center px-3 md:px-6">
          <p className="text-[10px] md:text-sm uppercase tracking-widest">Участница<br/>«Битва экстрасенсов»</p>
        </div>
        <div className="w-px h-10 md:h-12 bg-gold/30" />
        <div className="text-center px-3 md:px-6">
          <p className="text-[10px] md:text-sm uppercase tracking-widest">Уникальный дар!<br/>Старинные методики</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative max-w-sm w-full scroll-scale">
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 shadow-lg shadow-black/50">
          <img 
            src={heroImg} 
            alt="Нина Ивановна — потомственная ясновидящая"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-background/90 border border-gold/20 px-6 py-3 backdrop-blur-sm rounded-xl">
          <p className="font-cormorant italic text-gold/80 text-sm md:text-base">
            Прошлое. Будущее.<br/>Настоящее.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
