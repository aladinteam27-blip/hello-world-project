const FooterSection = () => {
  return (
    <footer className="relative border-t border-gold/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-10 text-center space-y-4">
        <p className="font-cormorant text-xl gold-gradient-text-light">
          Нина Ивановна — Ясновидящая и гадалка
        </p>
        <p className="text-foreground/50 text-sm">
          Эксперт магических услуг © {new Date().getFullYear()}
        </p>
        <p className="text-foreground/30 text-xs max-w-lg mx-auto leading-relaxed">
          Администрация сайта не собирает и не хранит персональные данные. 
          Отправка информации осуществляется напрямую пользователем через мессенджеры. 
          Любое частичное или полное копирование материалов сайта без разрешения владельца запрещено.
        </p>
      </div>
      {/* Extra bottom padding on mobile for floating contact bar */}
      <div className="h-16 md:h-0" />
    </footer>
  );
};

export default FooterSection;
