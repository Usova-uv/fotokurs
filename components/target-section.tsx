const targets = [
  {
    title: "Любитель",
    description: "и хочешь стать профессионалом, хочешь снимать шикарно и монетизировать хобби"
  },
  {
    title: "Продолжающий фотограф",
    description: "и хочешь улучшить свои знания, повысить чек, уровень и качество работ"
  },
  {
    title: "СММ-специалист",
    description: "и хочешь снимать на айфон, делать ленту"
  },
  {
    title: "Владелец бизнеса/бренда/шоурума",
    description: "и хочешь научиться снимать сам, не тратя деньги на контент"
  },
  {
    title: "Снимаешь видео",
    description: "и хочешь научиться снимать фото и дополнить свои знания"
  },
  {
    title: "Снимаешь на камеру",
    description: "и хочешь перейти на айфон"
  }
]

export function TargetSection() {
  return (
    <section id="target" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header with burgundy background */}
        <div className="w-full bg-[#640a1d] py-[14px] px-[32px] mb-16 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <h2 className="text-white text-[46px] font-semibold uppercase tracking-tighter leading-none">
            Этот курс подойдет, если ты
          </h2>
        </div>
        
        {/* Targets grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <div 
              key={index}
              className="flex flex-col p-6 rounded-lg bg-black border border-zinc-800 hover:border-white/20 transition-colors"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-semibold text-[#6A0014]">#{index + 1}</span>
                <h3 className="font-sans text-sm font-semibold text-white">{target.title}</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
