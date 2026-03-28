/** @type {import('next').NextConfig} */
/**
 * Статический экспорт: подходит для Timeweb Cloud (отдача папки `out/`), GitHub Pages и аналогов.
 *
 * Корень домена (daneliya-profoto.ru): переменную не задавайте.
 * Подкаталог (например /repo/): при сборке задайте GITHUB_PAGES_BASE_PATH=/repo
 */
const rawBase = process.env.GITHUB_PAGES_BASE_PATH || ''
const basePath = rawBase === '/' ? '' : rawBase.replace(/\/$/, '')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath
    ? { basePath, assetPrefix: basePath }
    : { assetPrefix: '' }),
}

export default nextConfig
