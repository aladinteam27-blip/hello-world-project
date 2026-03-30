const services = [
  { title: "Возвращаю любимых", desc: "Помогу прекратить размолвки и вернуть того, кто дорог вашему сердцу." },
  { title: "Снятие порчи и сглаза", desc: "Полная чистка от любого негативного воздействия. Верну вам легкость и радость жизни." },
  { title: "Приворот на любовь", desc: "Сильное магическое воздействие для пробуждения глубоких чувств." },
  { title: "Восстановление семьи", desc: "Верну мир, понимание и крепкие отношения в вашу семью." },
];

const ServicesPreview = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-12 space-y-8 scroll-fade-up">
        {services.map((s, i) => (
          <div key={i}>
            <h3 className="font-cormorant text-2xl md:text-3xl gold-gradient-text-light mb-2">{s.title}</h3>
            <p className="text-foreground/70 text-sm md:text-base">{s.desc}</p>
          </div>
        ))}
        <div className="pt-4 text-foreground/60 text-sm space-y-3">
          <p>Не оставайтесь наедине со своей проблемой. Доверьтесь опыту и силе — обратитесь ко мне и получите реальную помощь.</p>
          <p>Люди обращаются за моей помощью, чтобы обрести удачу, вернуть любимого человека, снять порчу и сглаз, защититься от завистников и понять, что ждёт их впереди.</p>
          <p>Мой дар позволяет работать дистанционно: давать точные ответы и проводить обряды независимо от вашего местоположения.</p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="tel:+79045890444" className="gold-gradient-text-light hover:opacity-80 transition font-medium text-sm">+7 (904) 589 04 44</a>
          <a href="https://wa.me/79045890444" className="gold-gradient-text-light hover:opacity-80 transition font-medium text-sm">WhatsApp</a>
          <a href="https://t.me/+79045890444" className="gold-gradient-text-light hover:opacity-80 transition font-medium text-sm">Telegram</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
