import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

/** Префикс путей для GitHub Pages (совпадает с GITHUB_PAGES_BASE_PATH в next.config). */
function withBasePath(path: string) {
  const raw = process.env.GITHUB_PAGES_BASE_PATH || ''
  const base = raw.replace(/\/$/, '')
  if (!base) return path
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-sans',
  weight: ['300', '400', '600', '700', '900']
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: '--font-display',
  weight: ['400', '600', '700', '900']
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '900']
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'PRO ВЗГЛЯД | Курс мобильной фотографии',
  description: 'Курс по мобильной фотографии от Ирины Данелия. Видеть свет. Чувствовать человека. Снимать осознанно.',
  generator: 'v0.app',
  openGraph: {
    title: 'PRO ВЗГЛЯД',
    description: 'Курс по мобильной фотографии от Ирины Данелия.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: withBasePath('/icon-light-32x32.png'),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: withBasePath('/icon-dark-32x32.png'),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: withBasePath('/icon.svg'),
        type: 'image/svg+xml',
      },
    ],
    apple: withBasePath('/apple-icon.png'),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable} ${montserrat.variable} overflow-x-hidden`}><head>
        <script type="text/javascript">{`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(107269725, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounceRate:true,
            webvisor:true
          });
        `}</script>
        <noscript><div><img src="https://mc.yandex.ru/watch/107269725" style={{position:"absolute", left:"-9999px"}} alt="" /></div></noscript>
      </head>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
}
