'use client'

import { Mail, MessageCircle, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-16 border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-montserrat text-5xl md:text-6xl font-semibold mb-4 text-balance">
            Готова начать
          </h2>
          <p className="text-sm text-zinc-400 mb-8">
            Присоединяйся к курсу и начни создавать фотографии, которыми будешь гордиться
          </p>
          <a
            href="#tariffs"
            className="inline-block bg-[#E9C9D1] text-[#000000] hover:bg-[#E9C9D1]/90 rounded-full px-8 py-4"
          >
            Выбрать тариф
          </a>
        </div>

        {/* Footer content */}
        <div className="grid md:grid-cols-3 gap-8 pb-12 border-b border-[#2a2a2a]">
          {/* Brand */}
          <div>
            <h3 className="font-montserrat text-xl font-semibold mb-4 text-white uppercase tracking-wider">
              PRO ВЗГЛЯД
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Мобильный фотограф, автор курса «PRO ВЗГЛЯД».
              Помогаю раскрыть творческий потенциал и научиться снимать профессионально.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4 text-white uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">biryukova.8888@gmail.com</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+7 (964) 582-53-54</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4 text-white uppercase tracking-wider">
              Я в соцсетях
            </h4>
            <div className="flex gap-3">
              <a
                href="https://t.me/irinadaneliya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#E9C9D1] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#2a2a2a]">
          <p className="text-sm text-[#6B6B6B]">
            {new Date().getFullYear()} Ирина Данелия. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-[#6B6B6B]">
            <a href="#" className="hover:text-[#E9C9D1] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-[#E9C9D1] transition-colors">
              Оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
