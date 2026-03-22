'use client'

import { Mail, MessageCircle, Phone } from 'lucide-react'

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
            className="inline-block bg-[#E9C901] text-black hover:bg-[#E9C901]/90 rounded-lg py-3 px-8 font-medium transition-colors"
          >
            Выбрать тариф
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
                <Mail className="w-4 h-4 text-[#E9C901]" />
                <span className="text-sm text-zinc-400">biryukova.8888@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
