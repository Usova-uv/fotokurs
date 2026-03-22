import { Lightbulb, Palette, Settings, Sparkles, TrendingUp, Users } from "lucide-react"

const benefits = [
  {
    icon: Settings,
    title: "Настройки камеры",
    description: "Освоишь все скрытые функции и настройки камеры iPhone, которые знают единицы"
  },
  {
    icon: Lightbulb,
    title: "Работа со светом",
    description: "Научишься видеть и использовать свет в любых условиях — дома, на улице, в кафе"
  },
  {
    icon: Palette,
    title: "Обработка фото",
    description: "Создашь свой уникальный стиль обработки в мобильных приложениях"
  },
  {
    icon: Users,
    title: "Съёмка людей",
    description: "Поймёшь, как снимать портреты так, чтобы модели выглядели потрясающе"
  },
  {
    icon: Sparkles,
    title: "Эстетика кадра",
    description: "Разберёшь композицию, ракурсы и научишься создавать WOW-эффект"
  },
  {
    icon: TrendingUp,
    title: "Монетизация",
    description: "Узнаешь, как превратить навык мобильной фотографии в источник дохода"
  }
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-[#000000]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-zinc-400 font-light text-xs tracking-widest uppercase mb-4">Что ты получишь на курсе</p>
          <h2 className="font-sans text-5xl md:text-6xl font-semibold mb-6 text-balance text-white uppercase tracking-[-0.03em]">
            PRO ВЗГЛЯД
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Ты изменишь своё представление о мобильной фотографии, создашь роскошное портфолио, научишься работать с клиентами и проведёшь первые съёмки, узнаешь все секреты востребованности, станешь свободным человеком во всех смыслах!
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#E9C9D1]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E9C9D1]/10 flex items-center justify-center mb-6 group-hover:bg-[#E9C9D1]/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-[#E9C9D1]" />
              </div>
              <h3 className="font-sans text-lg font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
