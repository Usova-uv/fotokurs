"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const portfolioImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5856.JPG-H1A0DQ6E2V6dOSEfIGEnZ6KW1KQpgg.jpeg",
    alt: "Коллекция профессиональных fashion портретов",
    size: "large"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5865.JPG-44MIcjjO2eOPm0K2T4Hax3XkFAJsH3.jpeg",
    alt: "Коллекция профессиональных fashion портретов",
    size: "large"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5877.JPG-rdZcTWWffh29sN2Kkx0SjEpQSTn95A.jpeg",
    alt: "Коллекция чёрно-белых портретов пар на улицах города",
    size: "large"
  },
]

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="portfolio" className="py-24 bg-[#000000]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-montserrat text-white font-semibold text-xs tracking-widest uppercase mb-4">Портфолио</p>
          <h2 className="font-montserrat text-5xl md:text-6xl font-semibold mb-6 text-balance text-white uppercase tracking-[-0.03em]">
            Мои работы
          </h2>
          <p className="text-sm text-zinc-400">
            Все фотографии сняты на iPhone. Убедись, что качественное фото — это про навыки, а не про технику.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {portfolioImages.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-xl border border-[#2a2a2a] hover:border-[#E9C9D1]/50 transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={image.size === "large" ? 900 : 700}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Увеличенное фото"
              fill
              className="object-contain"
              sizes="100vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
