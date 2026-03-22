/** @type {import('next').NextConfig} */
/**
 * Статический экспорт для GitHub Pages.
 *
 * Если сайт по адресу https://<user>.github.io/<repo>/ — при сборке задайте:
 *   GITHUB_PAGES_BASE_PATH=/<repo>
 * (в GitHub Actions это задаётся автоматически в workflow.)
 *
 * Для корня домена (например свой домен или страница без подкаталога) — не задавайте переменную:
 *   assetPrefix: '' и basePath не используются.
 */
const rawBase = process.env.GITHUB_PAGES_BASE_PATH || ''
const basePath = rawBase === '/' ? '' : rawBase.replace(/\/$/, '')

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  /** Для ссылок на файлы из `public/` в компонентах (например `Image src=`) */
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath
    ? { basePath, assetPrefix: basePath }
    : { assetPrefix: '' }),
}

export default nextConfig
