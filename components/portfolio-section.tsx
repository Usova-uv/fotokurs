"use client"

import { useState } from "react"
import { X } from "lucide-react"

/**
 * Файлы: `public/portfolio/portfolio-1.jpeg` … `portfolio-3.jpeg`.
 * `publicFile` учитывает NEXT_PUBLIC_BASE_PATH при деплое в подкаталог.
 */
const publicFile = (path: string) => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

const portfolioImages = [
  {
    src: publicFile("/portfolio/portfolio-1.jpeg"),
    alt: "Коллекция профессиональных fashion портретов",
  },
  {
    src: publicFile("/portfolio/portfolio-2.jpeg"),
    alt: "Коллекция профессиональных fashion портретов",
  },
  {
    src: publicFile("/portfolio/portfolio-3.jpeg"),
    alt: "Коллекция чёрно-белых портретов пар на улицах города",
  },
]

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="portfolio" className="py-24 bg-[#000000]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-montserrat text-white font-semibold text-xs tracking-widest uppercase mb-4">Портфолио</p>
          <h2 className="font-montserrat text-5xl md:text-6xl font-semibold mb-6 text-balance text-white uppercase tracking-[-0.03em]">
            Мои работы
          </h2>
          <p className="text-sm text-zinc-400">
            Все фотографии сняты на iPhone. Убедись, что качественное фото — это про навыки, а не про технику.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Как about-section (irina-photo): <img> в aspect-блоке. background-image на мобильных WebKit часто не рисуется или откладывается. */}
              <div className="aspect-[2/3] relative w-full overflow-hidden rounded-xl border border-[#2a2a2a] hover:border-[#E9C9D1]/50 transition-colors duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={1800}
                  loading="eager"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="mt-3 text-center text-xs text-zinc-500 line-clamp-2">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Увеличенное фото"
              className="max-h-[90vh] max-w-full w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
