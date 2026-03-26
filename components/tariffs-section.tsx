'use client'

export default function TariffsSection() {
  const tariffs = [
    {
      id: 1,
      title: "Я САМ",
      subtitle: "7 модулей курса",
      description: "Обучение, которое поможет вам научиться видеть кадр, уверенно проводить съёмки и создавать сильные, стильные фотографии на iPhone.",
      features: [
        "7 модулей обучения",
        "Съёмка на телефон «на уровне»",
        "Свет, композиция, ракурсы",
        "Практика: студия + улица",
        "Отбор фото + стиль",
        "Работа с клиентом и уверенность"
      ],
      oldPrice: "16 000₽",
      price: "12 990₽",
      bgColor: "bg-[#640a1d]",
      popular: false
    },
    {
      id: 2,
      title: "PRO",
      subtitle: "Полный курс + сопровождение",
      description: "Тариф для тех, кто хочет быстрее расти в фотографии, получать обратную связь и уверенно начать работать с клиентами.",
      features: [
        "Всё из базового тарифа",
        "Обратная связь и разбор работ 3 месяца",
        "Закрытый канал по обработке, где более 50 уроков по ретуши и цветокоррекции"
      ],
      oldPrice: "25 000₽",
      price: "17 990₽",
      bgColor: "bg-black",
      popular: true
    },
    {
      id: 3,
      title: "МЕНТОРСТВО",
      subtitle: "Личное сопровождение",
      description: "Личное обучение и работа со мной один на один. Формат для тех, кто хочет получить максимум внимания и поддержки.",
      features: [
        "Всё из тарифа ПРО",
        "2 офлайн съёмки с моделями, образами и студией (индивидуально с Ириной, студия + стрит)",
        "Личная встреча",
        "Разбор работ на протяжении 3х месяцев",
        "Индивидуальное сопровождение"
      ],
      subtitle2: "Формат, где я веду тебя за руку до результата!",
      oldPrice: "100 000₽",
      price: "75 000₽",
      bgColor: "bg-[#4a0d17]",
      popular: false
    }
  ]

  return (
    <section id="tariffs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <p className="text-base text-white text-center mb-6">
          Обучение находится в закрытом телеграм канале, все уроки разделены по модулям.
        </p>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Тарифы обучения</h2>
        
        <div className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto">
          {tariffs.map((tariff) => (
            <div
              key={tariff.id}
              className={`relative ${tariff.bgColor} p-8 flex flex-col ${
                tariff.popular
                  ? "border-2 border-white z-10"
                  : "border border-[#6b1f1f]"
              } ${tariff.id === 1 ? "rounded-l-lg" : ""} ${
                tariff.id === 3 ? "rounded-r-lg" : ""
              }`}
            >
              {tariff.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
                  Популярный
                </div>
              )}
              
              <h3 className="text-3xl font-bold text-center mb-2 text-white">{tariff.title}</h3>
              <p className="text-center text-gray-300 mb-6">{tariff.subtitle}</p>
              
              <p className="text-gray-300 text-center mb-8 text-sm leading-relaxed">
                {tariff.description}
              </p>

              {tariff.subtitle2 && (
                <p className="text-gray-300 text-center mb-8 text-sm italic leading-relaxed">
                  {tariff.subtitle2}
                </p>
              )}

              <ul className="space-y-3 mb-8 flex-grow">
                {tariff.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm mb-1">Стоимость</p>
                {tariff.oldPrice && (
                  <p className="text-gray-400 line-through text-lg mb-2">
                    {tariff.oldPrice}
                  </p>
                )}
                <p className="text-4xl font-bold text-white mb-6">
                  {tariff.price}
                </p>
                <a 
                  href="https://t.me/irinadaneliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#DC2626] text-white font-bold py-4 px-8 rounded-full hover:bg-[#DC2626]/90 transition-colors inline-block text-center"
                >
                  ВЫБРАТЬ ТАРИФ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}