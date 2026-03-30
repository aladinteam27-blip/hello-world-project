import ninaTv from "@/assets/nina-tv.jpg";

const TvShowSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-6 md:p-10 scroll-fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl border border-gold/20 shadow-lg shadow-black/50">
              <img
                src={ninaTv}
                alt="Нина Ивановна — участница шоу Битва экстрасенсов на ТНТ"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <p className="font-cormorant italic text-gold/80 text-lg">Телевидение</p>
              <h2 className="font-cormorant text-3xl md:text-4xl gold-gradient-text">
                Участница «Битвы экстрасенсов» на ТНТ
              </h2>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Нина Ивановна прошла строгий отбор и подтвердила свои способности на одном из самых популярных телевизионных шоу России. Её дар признан экспертами и миллионами зрителей.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold">
                    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                </div>
                <span className="text-foreground/60 text-sm">Подтверждённый дар ясновидения</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvShowSection;
