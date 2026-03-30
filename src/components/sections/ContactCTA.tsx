const ContactCTA = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto glass-card-bordered p-8 md:p-12 text-center space-y-6 scroll-scale">
        <p className="text-foreground/70 text-sm md:text-base">
          Столкнулись с непреодолимыми трудностями? Обращайтесь ко мне — я помогу найти решение в кратчайшие сроки.
        </p>
        <p className="text-foreground/60 text-sm">
          Связаться со мной можно дистанционно через Telegram или WhatsApp. Я всегда готова помочь! Онлайн консультация 24 часа.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="tel:+79045890444" className="gold-gradient-text-light hover:opacity-80 transition font-medium text-sm">+7 (904) 589 04 44</a>
          <a href="https://wa.me/79045890444" className="gold-gradient-text-light hover:opacity-80 transition font-medium text-sm">WhatsApp</a>
          <a href="https://t.me/+79045890444" className="gold-gradient-text-light hover:opacity-80 transition font-medium text-sm">Telegram</a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
