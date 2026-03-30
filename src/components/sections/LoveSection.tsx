import { motion } from "framer-motion";

const LoveSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Return of loved one */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-cormorant text-2xl md:text-4xl text-gold mb-6"
          >
            Помощь в возвращении любимого человека
          </motion.h2>
          <p className="text-foreground/70 text-sm mb-4">Помогаю восстановить любовь и вернуть утраченную связь, если вы столкнулись с:</p>
          <ul className="space-y-2 mb-6">
            {[
              "ссорой или длительным конфликтом",
              "расставанием, разводом",
              "охлаждением чувств",
              "желанием вернуть бывшего партнёра",
              "потерей доверия или эмоциональной близости",
              "чувством, что отношения могут не вернуться",
            ].map((item, i) => (
              <li key={i} className="text-foreground/60 text-sm flex gap-2"><span className="text-gold">✦</span>{item}</li>
            ))}
          </ul>
          <p className="text-foreground/60 text-sm mb-4">Определяю реальные причины охлаждения или разрыва. Смотрю, какая есть возможность вернуть человека.</p>
          <blockquote className="border-l-2 border-gold/30 pl-4 italic text-gold/70 text-sm my-6">
            «Я не манипулирую чужой волей — работаю с вашей энергией и возможностями»
          </blockquote>
          <p className="text-foreground/60 text-sm">Если между близкими появились недопонимание, отдаление или постоянные споры, я направляю энергию на укрепление союза, возвращение доверия и тепла.</p>
        </div>

        {/* Attracting love */}
        <div>
          <h3 className="font-cormorant text-2xl md:text-3xl text-gold mb-4">Привлечение любви и улучшение личной жизни</h3>
          <p className="text-foreground/60 text-sm mb-3">Делаю сильные обряды на любовь, взаимность, привязку и открытие сердечного потока, помогая человеку встретить свою судьбу или улучшить существующие отношения.</p>
          <p className="text-foreground/60 text-sm">Смотрю, какие препятствия мешают найти партнёра. Помогаю привлечь чувства и взаимное притяжение.</p>
        </div>
      </div>
    </section>
  );
};

export default LoveSection;
