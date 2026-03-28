import Link from 'next/link'

export const metadata = {
  title: 'Политика конфиденциальности | PRO ВЗГЛЯД',
  description: 'Политика конфиденциальности сайта курса мобильной фотографии PRO ВЗГЛЯД',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link 
          href="/" 
          className="inline-block text-sm text-zinc-400 hover:text-[#7A2E2E] transition-colors mb-12"
        >
          ← На главную
        </Link>

        <h1 className="font-montserrat text-4xl md:text-5xl font-semibold mb-12 uppercase tracking-tight">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-sm leading-relaxed">
          <p className="text-zinc-300">
            Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта курса мобильной фотографии PRO ВЗГЛЯД (далее — Сайт).
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Общие положения</h2>
            <p className="text-zinc-300">
              Используя Сайт, вы соглашаетесь с условиями настоящей политики. Если вы не согласны с её положениями, пожалуйста, воздержитесь от использования Сайта.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Собираемая информация</h2>
            <p className="text-zinc-300 mb-4">
              Сайт может собирать следующую информацию:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>Данные, которые вы добровольно указываете при обращении (email, имя, контакты в мессенджерах)</li>
              <li>Технические данные: IP-адрес, тип браузера, данные об устройстве</li>
              <li>Данные об использовании Сайта (страницы просмотра, время на сайте)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Аналитика и cookies</h2>
            <p className="text-zinc-300">
              На Сайте используется Яндекс.Метрика для оценки посещаемости и улучшения работы. Сервис может сохранять cookies и собирать обезличенные данные о посещениях. Вы можете отключить cookies в настройках браузера.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Цели использования данных</h2>
            <p className="text-zinc-300">
              Персональные данные используются для связи с вами по вопросам обучения, ответов на обращения и предоставления информации о курсе. Технические и аналитические данные — для улучшения Сайта и понимания потребностей пользователей.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Защита данных</h2>
            <p className="text-zinc-300">
              Мы принимаем меры для защиты ваших данных от несанкционированного доступа, изменения или удаления. Передача данных в сторонние сервисы (например, Telegram) осуществляется в соответствии с политиками этих платформ.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Контакты</h2>
            <p className="text-zinc-300">
              По вопросам, связанным с политикой конфиденциальности и обработкой персональных данных, обращайтесь:{' '}
              <a href="mailto:biryukova.8888@gmail.com" className="text-[#7A2E2E] hover:underline">
                biryukova.8888@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Изменения</h2>
            <p className="text-zinc-300">
              Мы можем обновлять настоящую политику. Актуальная версия всегда размещена на этой странице. Дата последнего обновления — март 2025 г.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
