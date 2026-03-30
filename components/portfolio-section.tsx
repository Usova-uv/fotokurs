import { PortfolioClient } from "./portfolio-client"

/**
 * Файлы: `public/portfolio/portfolio-1.jpeg` … `portfolio-3.jpeg`.
 * Server Component: картинки в начальном HTML (как about-section), без гидрации клиентского дерева для img.
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
  return (
    <section id="portfolio" className="py-24 bg-[#000000]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-widest text-white">
            Портфолио
          </p>
          <h2 className="mb-6 font-montserrat text-5xl font-semibold uppercase tracking-[-0.03em] text-balance text-white md:text-6xl">
            Мои работы
          </h2>
          <p className="text-sm text-zinc-400">
            Все фотографии сняты на iPhone. Убедись, что качественное фото — это про навыки, а не про технику.
          </p>
        </div>

        <PortfolioClient>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolioImages.map((image, index) => (
              <div
                key={image.src}
                data-portfolio-src={image.src}
                className="group min-h-0 cursor-pointer"
              >
                <div className="relative aspect-[2/3] w-full min-h-0 overflow-hidden rounded-xl border border-[#2a2a2a] transition-colors duration-300 hover:border-[#E9C9D1]/50">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={1800}
                    loading="eager"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-3 line-clamp-2 text-center text-xs text-zinc-500">{image.alt}</p>
              </div>
            ))}
          </div>
        </PortfolioClient>
      </div>
    </section>
  )
}
