'use client'

import { Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-16 border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-montserrat text-5xl md:text-6xl font-semibold mb-4 text-white">
            Готовы начать
          </h2>
          <p className="text-sm text-zinc-400 mb-8">
            Присоединяйся к курсу и начни создавать фотографии, которыми будешь гордиться
          </p>
          <a 
            href="#tariffs" 
            className="inline-block px-10 py-4 bg-[#6A0014] text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-[#8b2f2f] transition-colors"
          >
            Хочу на обучение!
          </a>
        </div>

        {/* Footer content */}
        <div className="grid md:grid-cols-3 gap-8 pb-12 border-b border-[#2a2a2a]">
          {/* Контакты */}
          <div>
            <h3 className="font-montserrat text-xl font-semibold mb-4 text-white uppercase">
              Контакты
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#6A0014]" />
                <span className="text-sm text-zinc-400">biryukova.8888@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#6A0014]" />
                <a href="tel:+79645825354" className="text-sm text-zinc-400 hover:text-[#8b2f2f] transition-colors">
                  +7 (964) 582-53-54
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-zinc-500 pt-8">
          <a href="/privacy/" className="hover:text-[#8b2f2f] transition-colors">
            Политика конфиденциальности
          </a>
        </p>
      </div>
    </footer>
  )
}
