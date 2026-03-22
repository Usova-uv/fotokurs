import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}><head>
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
        <Analytics />
      </body>
    </html>
  )
}
