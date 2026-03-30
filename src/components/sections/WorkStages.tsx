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
        <h2 className="font-cormorant text-3xl md:text-5xl gold-gradient-text text-center mb-4 scroll-blur">
          Этапы работы
        </h2>
        <p className="text-center text-foreground/60 mb-16 scroll-fade-up">Как происходит наша совместная работа</p>

        <div className="space-y-12">
          {stages.map((stage, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 flex gap-6 md:gap-10 scroll-bounce-left"
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <span className="font-cormorant text-5xl md:text-7xl gold-gradient-text-light font-bold opacity-50">{stage.num}</span>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl md:text-3xl gold-gradient-text-light mb-2">{stage.title}</h3>
                <p className="text-gold/60 text-sm mb-4">{stage.subtitle}</p>
                {stage.content.map((p, j) => (
                  <p key={j} className="text-foreground/70 text-sm mb-3">{p}</p>
                ))}
                {stage.list && (
                  <ul className="mt-3 space-y-1">
                    {stage.list.map((item, j) => (
                      <li key={j} className="text-foreground/60 text-sm flex gap-2">
                        <span className="text-gold">—</span>{item}
                      </li>
                    ))}
                  </ul>
                )}
                {stage.extra && (
                  <p className="text-foreground/50 text-sm mt-4 whitespace-pre-line">{stage.extra}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card-bordered p-8 text-center space-y-3 scroll-fade-up">
          <h3 className="font-cormorant text-2xl gold-gradient-text-light">Стоимость услуг</h3>
          <p className="text-foreground/60 text-sm">Моя работа является платной, так как каждый обряд требует времени, силы и глубокого энергетического вложения.</p>
          <p className="text-foreground/60 text-sm">Цена зависит от сложности ситуации, выбранных ритуалов и их количества.</p>
          <p className="text-foreground/60 text-sm">Перед началом работы я всегда озвучиваю стоимость за работу и нужные материалы.</p>
        </div>
      </div>
    </section>
  );
};

export default WorkStages;
