import '@/styles/globals.css'

import { Montserrat, Open_Sans } from '@next/font/google'
import Script from 'next/script'

import Analytics from '@/lib/Analytics'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full max-w-[100vw] overflow-x-hidden scroll-smooth  antialiased `}
    >
      <body className="">
        {children}
        <Analytics />
        <Script id="onRouteChange">{`
        (function (history) {
          var pushState = history.pushState;
          history.pushState = function(state){
            var result = pushState.apply(history, arguments);
            window.dispatchEvent(new Event("routeChange", state));
            return result;
          };
        })(window.history);
      `}</Script>
      </body>
    </html>
  )
}
