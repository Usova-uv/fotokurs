"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp } from "lucide-react"

export function CalculatorSection() {
  const [shootsPerMonth, setShootsPerMonth] = useState(4)
  const [pricePerShoot, setPricePerShoot] = useState(5000)

  const monthlyIncome = shootsPerMonth * pricePerShoot
  const yearlyIncome = monthlyIncome * 12

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <section id="calculator" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-zinc-400 font-light text-xs tracking-widest uppercase mb-4">Калькулятор дохода</p>
            <h2 className="font-montserrat text-5xl md:text-6xl font-semibold mb-6 text-balance text-white uppercase tracking-[-0.03em]">
              Сколько можно заработать
            </h2>
            <p className="text-sm text-zinc-400">
              Посчитай потенциальный доход от мобильной фотографии
            </p>
          </div>

          {/* Calculator card */}
          <div className="p-8 md:p-12 rounded-3xl bg-[#000000] border border-[#2a2a2a]">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Sliders */}
              <div className="space-y-10">
                {/* Shoots per month */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-white font-medium">Съёмок в месяц</label>
                    <span className="text-2xl font-serif font-bold text-[#E9C9D1]">{shootsPerMonth}</span>
                  </div>
                  <Slider
                    value={[shootsPerMonth]}
                    onValueChange={(value) => setShootsPerMonth(value[0])}
                    min={1}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-sm text-[#6B6B6B]">
                    <span>1</span>
                    <span>20</span>
                  </div>
                </div>

                {/* Price per shoot */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-white font-medium">Цена за съёмку</label>
                    <span className="text-2xl font-serif font-bold text-[#E9C9D1]">{formatNumber(pricePerShoot)} руб</span>
                  </div>
                  <Slider
                    value={[pricePerShoot]}
                    onValueChange={(value) => setPricePerShoot(value[0])}
                    min={1000}
                    max={30000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-sm text-[#6B6B6B]">
                    <span>1 000</span>
                    <span>30 000</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#2a2a2a]">
                    <div className="flex items-center gap-3 mb-2">
                      <Calculator className="w-5 h-5 text-[#E9C9D1]" />
                      <span className="text-[#6B6B6B]">Доход в месяц</span>
                    </div>
                    <p className="text-4xl font-serif font-bold text-white">
                      {formatNumber(monthlyIncome)} <span className="text-xl text-[#6B6B6B]">руб</span>
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#6A0014] border border-[#6A0014]">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-[#E9C9D1]" />
                      <span className="text-[#E9C9D1]">Доход за год</span>
                    </div>
                    <p className="text-4xl font-serif font-bold text-white">
                      {formatNumber(yearlyIncome)} <span className="text-xl text-[#E9C9D1]/70">руб</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-center text-sm text-[#6B6B6B] mt-8 pt-8 border-t border-[#2a2a2a]">
              Это консервативный расчёт. Многие наши ученики зарабатывают значительно больше после прохождения курса.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
