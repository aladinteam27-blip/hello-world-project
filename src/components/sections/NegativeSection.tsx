import { motion } from "framer-motion";

const NegativeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-cormorant text-2xl md:text-4xl text-gold mb-2"
        >
          Очищение от негатива:
        </motion.h2>
        <p className="font-cormorant text-xl md:text-2xl text-gold/70 mb-6">порча, сглаз, зависть</p>
        
        <p className="text-foreground/70 text-sm mb-6">Я помогаю снять негативное влияние и восстановить вашу энергетику.</p>
        
        <ul className="space-y-2 mb-8">
          {[
            "выявляю источники порчи, сглаза и зависти",
            "снимаю воздействие негативных влияний",
            "убираю усталость, тяжесть, неудачи",
            "защищаю от повторных проблем",
            "восстанавливаю жизненные силы",
          ].map((item, i) => (
            <li key={i} className="text-foreground/60 text-sm flex gap-2"><span className="text-gold">✦</span>{item}</li>
          ))}
        </ul>
        
        <p className="text-foreground/60 text-sm">После такой работы вы почувствуете лёгкость, спокойствие и уверенность в своих силах.</p>
      </div>
    </section>
  );
};

export default NegativeSection;
