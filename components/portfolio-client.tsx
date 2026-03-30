"use client"

import { useState } from "react"
import { X } from "lucide-react"

/**
 * Только лайтбокс и делегирование клика. Сами <img> рендерятся в Server Component (portfolio-section.tsx),
 * чтобы в HTML сразу были обычные теги — как у irina-photo.jpg (на мобильных это критично).
 */
export function PortfolioClient({ children }: { children: React.ReactNode }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div
        onClick={(e) => {
          const el = (e.target as HTMLElement).closest("[data-portfolio-src]")
          if (el) {
            const src = el.getAttribute("data-portfolio-src")
            if (src) setSelectedImage(src)
          }
        }}
      >
        {children}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-colors hover:bg-[#2a2a2a]"
            onClick={() => setSelectedImage(null)}
            aria-label="Закрыть"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center">
            <img
              src={selectedImage}
              alt="Увеличенное фото"
              className="max-h-[90vh] w-auto max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
