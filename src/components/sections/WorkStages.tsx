import { motion } from "framer-motion";

const stages = [
  {
    num: "1",
    title: "Первый этап",
    subtitle: "С чего начинается наша работа",
    content: [
      "Моя помощь всегда начинается с внимательного и бережного знакомства с Вашей ситуацией.",
      "Я никогда не работаю «вслепую» — сначала важно понять, что именно происходит в Вашей жизни, какие энергии задействованы и какие пути решения открыты.",
    ],
    list: ["Ваше имя", "Дата рождения", "Фотография"],
    extra: "По фотографии я вижу истинные причины проблемы, скрытые влияния, состояние отношений, наличие негатива и возможные варианты развития событий.\n\nА чтобы заглянуть глубже и увидеть не только \"что есть\", но и \"к чему ведет\", я делаю расклад на картах Таро.",
  },
  {
    num: "2",
    title: "Второй этап",
    subtitle: "Обсуждение и выбор метода",
    content: [
      "Обсуждение результатов и выбор метода помощи.",
      "Я подробно объясняю, что вижу в Вашем будущем, рассматриваю варианты событий и предлагаю подходящий способ работы.",
    ],
    list: [
      "восстановление отношений",
      "очищение от негатива",
      "укрепление семьи",
      "энергетическая работа с любовными чувствами",
      "защита и открытие жизненных дорог",
    ],
    extra: "Каждый ритуал или обряд подбирается индивидуально под Ваш случай.",
  },
  {
    num: "3",
    title: "Третий этап",
    subtitle: "Проведение обряда",
    content: [
      "Проведение обряда и сопровождение.",
      "Все действия выполняются поэтапно, с соблюдением традиций и энергетической безопасности. Я сопровождаю Вас на протяжении всего процесса, отвечаю на вопросы и контролирую изменения.",
    ],
  },
];

const WorkStages = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-cormorant text-3xl md:text-5xl text-gold text-center mb-4"
        >
          Этапы работы
        </motion.h2>
        <p className="text-center text-foreground/60 mb-16">Как происходит наша совместная работа</p>

        <div className="space-y-16">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-6 md:gap-10"
            >
              <div className="flex-shrink-0">
                <span className="font-cormorant text-5xl md:text-7xl text-gold/30 font-bold">{stage.num}</span>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl md:text-3xl text-gold mb-2">{stage.title}</h3>
                <p className="text-gold/60 text-sm mb-4">{stage.subtitle}</p>
                {stage.content.map((p, j) => (
                  <p key={j} className="text-foreground/70 text-sm mb-3">{p}</p>
                ))}
                {stage.list && (
                  <ul className="mt-3 space-y-1">
                    {stage.list.map((item, j) => (
                      <li key={j} className="text-foreground/60 text-sm">— {item}</li>
                    ))}
                  </ul>
                )}
                {stage.extra && (
                  <p className="text-foreground/50 text-sm mt-4 whitespace-pre-line">{stage.extra}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border border-gold/15 p-8 text-center space-y-3">
          <h3 className="font-cormorant text-2xl text-gold">Стоимость услуг</h3>
          <p className="text-foreground/60 text-sm">Моя работа является платной, так как каждый обряд требует времени, силы и глубокого энергетического вложения.</p>
          <p className="text-foreground/60 text-sm">Цена зависит от сложности ситуации, выбранных ритуалов и их количества.</p>
          <p className="text-foreground/60 text-sm">Перед началом работы я всегда озвучиваю стоимость за работу и нужные материалы.</p>
        </div>
      </div>
    </section>
  );
};

export default WorkStages;
