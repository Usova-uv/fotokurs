"use client"

export function HeroSection() {


  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center py-24">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold uppercase mb-8 tracking-[-0.08em] leading-[0.9] text-white">
          PRO ВЗГЛЯД
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 mb-16 font-light leading-relaxed">
          Онлайн-обучение по мобильной съёмке
        </p>

        {/* Poetic lines */}
        <div className="mb-20 space-y-2">
          <p className="text-xs font-light tracking-[0.2em] uppercase text-zinc-400">Видеть свет.</p>
          <p className="text-xs font-light tracking-[0.2em] uppercase text-zinc-400">Чувствовать человека.</p>
          <p className="text-xs font-light tracking-[0.2em] uppercase text-zinc-400">Снимать осознанно.</p>
        </div>

        {/* CTA Button */}
        <a
  href="#tariffs"
  className="px-10 py-4 bg-[#6A0014] text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-[#8b2f2f] transition-colors inline-block"
>
  Хочу на обучение!
</a>
      </div>
    </section>
  );
}