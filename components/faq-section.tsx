"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, X } from "lucide-react"

const faqs = [
  {
    question: "Какой iPhone нужен для прохождения курса?",
    answer: "Курс подходит для владельцев iPhone 11 и новее. Большинство техник работают и на более старых моделях, но некоторые продвинутые функции (ProRAW, Портретный режим) доступны только на новых устройствах."
  },
  {
    question: "Я совсем новичок, смогу ли я освоить материал?",
    answer: "Да! Курс построен от простого к сложному. Мы начинаем с самых основ и постепенно переходим к продвинутым техникам. 90% наших учеников — новички без опыта в фотографии."
  },
  {
    question: "Сколько времени нужно уделять обучению?",
    answer: "Рекомендуем выделять 1-2 часа в день на просмотр уроков и выполнение заданий. Уроки короткие (10-15 минут), можно смотреть в любое удобное время."
  },
  {
    question: "Будет ли доступ к материалам после окончания курса?",
    answer: "Да, доступ сохраняется в зависимости от тарифа: 3 месяца на «Я САМ», 6 месяцев на «PRO» и навсегда на «VIP»."
  }
]

const goodFor = [
  "Хочешь научиться снимать качественные фото",
  "Готов уделять время практике и обучению",
  "Мечтаешь монетизировать навык фотографии",
  "Хочешь создавать контент для соцсетей",
  "Устал от скучных и однотипных снимков"
]

const notFor = [
  "Ищешь волшебную кнопку без практики",
  "Не готов выделять время на обучение",
  "Считаешь, что всё знаешь о фотографии",
  "Хочешь результат без усилий"
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-montserrat text-white font-semibold text-[14px] uppercase tracking-[0.3em] mb-6">FAQ</p>
            <h2 className="font-montserrat text-4xl md:text-6xl font-semibold mb-6 text-balance text-white uppercase tracking-[-0.03em]">
              Частые вопросы
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="mb-16">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-left font-montserrat font-medium hover:opacity-70 text-white transition-opacity py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed font-montserrat pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Good for / Not for */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-black border border-white/10">
              <h3 className="font-montserrat text-lg font-bold mb-6 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                Курс для тебя, если
              </h3>
              <ul className="space-y-4">
                {goodFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-black border border-white/10">
              <h3 className="font-montserrat text-lg font-bold mb-6 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-white" />
                </div>
                Курс не для тебя, если
              </h3>
              <ul className="space-y-4">
                {notFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
