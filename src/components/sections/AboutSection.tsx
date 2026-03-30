import heroImg from "@/assets/hero-nina.jpg";
import ninaTv from "@/assets/nina-tv.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 scroll-bounce-left">
            <img
              src={heroImg}
              alt="Нина Ивановна"
              className="w-full rounded-2xl border border-gold/15 shadow-lg shadow-black/50"
              loading="lazy"
            />
            <img
              src={ninaTv}
              alt="Нина Ивановна — участница Битвы экстрасенсов"
              className="w-full rounded-2xl border border-gold/15 shadow-lg shadow-black/50"
              loading="lazy"
            />
          </div>
          <div className="glass-card p-8 scroll-bounce-right space-y-5">
            <p className="text-foreground/70 text-sm leading-relaxed">
              С 11 лет я начала изучать древние книги бабушки, которые достались ей от предков. Наблюдала, как она проводит обряды и читает заговоры. Для ребенка магия — это волшебство! К 15 годам начала самостоятельно проводить несложные обряды — заговоры от болезней, снятие простых недугов.
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Более 20 лет я помогаю направлять людей к счастью, здоровью и успеху. Меня называют по-разному: Гадалка, Целительница, Ясновидящая, Таролог, Ведунья. Но независимо от названия, моя задача одна — помочь вам.
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              За годы практики я создала эффективные авторские ритуалы и методики, которые решают сложные жизненные задачи. Я берусь за ситуации, в которых другие помочь не смогли, предлагая индивидуальный подход и надежные решения.
            </p>
            <div className="pt-4 border-t border-gold/15">
              <p className="gold-gradient-text-light text-sm font-medium mb-4">Не откладывайте решение своих проблем! Обращайтесь ко мне прямо сейчас. Онлайн консультация 24 часа!</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+79045890444" className="gold-gradient-text-light hover:opacity-80 transition text-sm">+7 (904) 589 04 44</a>
                <a href="https://wa.me/79045890444" className="gold-gradient-text-light hover:opacity-80 transition text-sm">WhatsApp</a>
                <a href="https://t.me/+79045890444" className="gold-gradient-text-light hover:opacity-80 transition text-sm">Telegram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
