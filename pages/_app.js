import { Poppins } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css';

const lato = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '800', '900']
})

export default function App({ Component, pageProps }) {

  return (
    <main className={lato.className}>
      <div className={`dark:bg-[#0E1623] bg-[#e7edef]`}>
        <ThemeProvider enableSystem={false} attribute='class'>
          {/* components */}
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </main>
  )
}
