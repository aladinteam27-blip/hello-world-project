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
        <h2 className="font-cormorant text-3xl md:text-5xl gold-gradient-text text-center mb-2 scroll-blur">
          Предсказание будущего
        </h2>
        <p className="text-center text-foreground/60 mb-10 scroll-fade-up">по фото и картам Таро</p>

        <div className="glass-card p-8 md:p-10 scroll-fade-up">
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
              <li key={i} className="text-foreground/70 text-sm flex items-start gap-2">
                <span className="text-gold mt-0.5">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Predictions;
