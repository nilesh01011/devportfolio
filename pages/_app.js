import { Poppins } from '@next/font/google'
import { ThemeProvider, useTheme } from 'next-themes'
import '@/styles/globals.css';
import ThemeSet from '@/components/ThemeSet';
import Footer from '@/components/Footer';

const lato = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '800', '900']
})

export default function App({ Component, pageProps }) {

  return (
    <main className={lato.className}>
      <div className={``}>
        <ThemeProvider enableSystem={false} attribute='class'>
          {/* components */}
          <Component {...pageProps} />
          {/* theme changes */}
          {/* <ThemeSet /> */}
          <Footer />
        </ThemeProvider>
      </div>
    </main>
  )
}
