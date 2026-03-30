import { motion } from "framer-motion";
import servicesBg from "@/assets/services-bg.jpg";

const categories = [
  {
    title: "Гадание и ясновидение",
    items: [
      "Гадание на картах Таро",
      "Энергетическая диагностика",
      "Определение негативных воздействий (сглаз, порча, проклятие, приворот, венец безбрачия)",
      "Ясновидение и анализ ситуации",
      "Рекомендации и советы по коррекции жизненного пути",
      "Очищение от негативной энергетики (например, отлив на воске)",
    ],
  },
  {
    title: "Защита и очищение",
    items: [
      "Снятие порчи и сглаза",
      "Устранение магических воздействий",
      "Защита от зависти и негатива",
      "Изготовление оберегов и амулетов",
      "Энергетическая чистка",
      "Очищение кармы",
      "Защитные мероприятия",
      "Заговоры для защиты дома",
    ],
  },
  {
    title: "Любовь и отношения",
    items: [
      "Воссоединение с любимым человеком",
      "Гармонизация отношений",
      "Приворот",
      "Отворот",
      "Сексуальная привязка партнера",
      "Снятие венца безбрачия",
    ],
  },
  {
    title: "Успех и финансы",
    items: [
      "Активация денежной энергии и привлечение богатства",
      "Увеличение финансового потока и благосостояния",
      "Ритуалы для достижения финансового успеха",
      "Защитные практики для бизнеса и финансовых операций",
      "Создание прочной защиты от финансовых потерь и недоброжелателей",
    ],
  },
];

const ServicesDetail = () => {
  return (
    <section className="py-20 px-4 relative" id="services">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="relative max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-cormorant text-3xl md:text-5xl text-gold text-center mb-4 lowercase"
        >
          услуги
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-gold/10 p-6"
            >
              <h3 className="font-cormorant text-2xl text-gold mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-foreground/70 text-sm flex items-start gap-2">
                    <span className="text-gold mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
