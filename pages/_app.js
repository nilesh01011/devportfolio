import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css';
import Footer from '@/components/footer/Footer';
// import { Poppins } from '@next/font/google'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '300', '400', '700', '800', '900']
// })

export default function App({ Component, pageProps }) {

  return (
    <main
    //  className={poppins.className}
    >
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
