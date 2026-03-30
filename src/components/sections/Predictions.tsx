import { motion } from "framer-motion";

const items = [
  "Увидеть настоящие источники трудностей — внутренние и внешние",
  "Распознать скрытые намерения окружающих",
  "Понять пути развития отношений и провести энергодиагностику пары",
  "Получить чёткое видение будущего в личной жизни, семье, работе и финансах",
  "Обнаружить негативные воздействия и защититься от них",
];

const Predictions = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-cormorant text-3xl md:text-5xl text-gold text-center mb-2"
        >
          Предсказание будущего
        </motion.h2>
        <p className="text-center text-foreground/60 mb-10">по фото и картам Таро</p>

        <div className="space-y-4 mb-8">
          <p className="text-foreground/70 text-sm">
            Вся информация считывается напрямую с вашей фотографии. Это позволяет увидеть глубинные процессы, скрытые причины проблем и реальные изменения, которые ждут вас впереди.
          </p>
          <p className="text-foreground/70 text-sm">
            Дополнительно я использую карты Таро, чтобы раскрыть будущие события, возможные развилки судьбы и скрытые влияния, которые не видны на поверхности.
          </p>
        </div>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-foreground/70 text-sm flex items-start gap-2"
            >
              <span className="text-gold mt-0.5">✦</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Predictions;
