import Image from "next/image"

const publicFile = (path: string) => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author photo */}
          <div className="relative">
          <div className="aspect-[3/4] rounded-2xl border border-[#2a2a2a] overflow-hidden">
    <Image
    src={publicFile("/irina-photo.jpg")}
    alt="Ирина Данелия – мобильный фотограф"
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
</div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#E9C9D1]/30 rounded-2xl -z-10" />
          </div>
          
          {/* Content */}
          <div>
            <p className="text-xs font-light tracking-[0.2em] uppercase text-zinc-400 mb-8">
              Обо мне
            </p>
            <h2 className="text-lg md:text-xl font-light mb-8 text-balance text-white tracking-wide">
              Меня зовут Ирина, я мобильный фотограф
            </h2>
            
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-zinc-300">
                Уже более 3 лет я снимаю на iPhone. Я начинала с iPhone 13 — просто брала телефон и снимала. Со временем именно эти кадры начали набирать сотни тысяч и даже миллионы просмотров.
              </p>
              
              <p className="text-sm leading-relaxed text-zinc-300">
                Поэтому я точно знаю: чтобы начать, не нужна дорогая техника. Достаточно того айфона, который уже есть у вас.
              </p>
              
              <p className="text-sm leading-relaxed text-zinc-300">
                В своём обучении я делаю акцент на самом главном — умении видеть кадр. Чувствовать свет, понимать композицию, замечать эмоции и характер человека.
              </p>
              
              <p className="text-sm leading-relaxed text-zinc-300">
                Я учу создавать не просто красивые фотографии, а кадры с настроением и жизнью — те самые, которые цепляют взгляд и остаются в памяти.
              </p>
              
              <p className="text-sm leading-relaxed text-white font-medium">
                Потому что сильная фотография начинается не с камеры. Она начинается с вашего взгляда.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
