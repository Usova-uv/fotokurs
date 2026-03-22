"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "./ui/button"

const modules = [
  {
    number: "01",
    title: "Модуль 1. База и понимание фотографии",
    lessons: 3,
    topics: [
      "как работает мобильная фотография",
      "как правильно настроить камеру iPhone",
      "какие возможности есть у камеры и как использовать их на максимум",
    ],
  },
  {
    number: "02",
    title: "Модуль 2. Свет, композиция и построение кадра",
    lessons: 5,
    topics: [
      "работать с естественным и искусственным светом",
      "понимать, какой свет делает фотографию дорогой и объёмной",
      "строить композицию, чтобы кадр выглядел гармонично",
      "выбирать правильные ракурсы",
      "готовиться к съёмке: образ, локация, настроение",
    ],
  },
  {
    number: "03",
    title: "Модуль 3. Практика съёмки",
    lessons: 4,
    topics: [
      "съёмка первой стрит-съёмки",
      "практика работы с человеком в кадре",
      "съёмка в студии",
      "разбор и использование 7 схем света",
    ],
  },
  {
    number: "04",
    title: "Модуль 4. Обработка и формирование стиля",
    lessons: 6,
    topics: [
      "как обрабатывать фотографии на телефоне",
      "как сделать кожу аккуратной и естественной",
      "как добиться чистоты и «журнальности» кадра",
      "как делать винтажную и глянцевую обработку",
      "как формировать свой стиль обработки",
      "как развивать насмотренность",
    ],
  },
  {
    number: "05",
    title: "Модуль 5. Работа с клиентами и деньги",
    lessons: 5,
    topics: [
      "психология работы с клиентами",
      "как уверенно проводить съёмки",
      "как формировать свой прайс",
      "где искать клиентов",
      "как организовать фотодни",
    ],
  },
  {
    number: "06",
    title: "Модуль 6. Продвижение",
    lessons: 4,
    topics: [
      "как создавать рилсы на миллион просмотров",
      "как привлекать клиентов через контент",
      "какие фотографии и видео привлекают внимание",
      "как выстраивать личный стиль в социальных сетях",
    ],
  },
  {
    number: "07",
    title: "Модуль 7. Дополнительно — практика работы",
    lessons: 4,
    topics: [
      "монтаж видео и рилс",
      "правильный отбор фотографий",
      "передача материала клиенту",
      "мотивация и развитие фотографа",
    ],
  },
]

export function ProgramSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="program" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-zinc-400 font-light text-xs tracking-widest uppercase mb-4">Программа обучения</p>
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-balance text-white uppercase tracking-[-0.03em]">
              7 модулей
            </h2>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-zinc-800 hover:border-white hover:text-white text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-zinc-800 hover:border-white hover:text-white text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Horizontal scroll container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 px-4 md:px-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {modules.map((module, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-80 p-6 rounded-lg bg-[#0a0a0a] border border-zinc-800 hover:border-white/20 transition-colors snap-start"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-5xl font-black text-white/10">{module.number}</span>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Play className="w-4 h-4" />
                <span>{module.lessons} уроков</span>
              </div>
            </div>
            <h3 className="font-sans text-lg font-semibold mb-4 text-white">{module.title}</h3>
            <ul className="space-y-2">
              {module.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-start gap-2 text-xs text-zinc-400">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
