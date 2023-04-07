import AboutSections from '@/components/AboutSections'
import Banner from '@/components/Banner'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import ProjectsWorks from '@/components/ProjectsWorks'
import ThemeSet from '@/components/ThemeSet'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Nilesh Rathod | Full Stack Developer</title>
        <meta name="description" content="Developer ? MERN Stack : Front End" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`w-full h-full 1x1:max-w-[1280px] max-w-[1200px] mx-auto`}>
        <Banner />
        <AboutSections />
        <ProjectsWorks />
        <Experiences />
      </main>
      {/* <Footer /> */}
      {/* theme changes */}
      <ThemeSet />
    </>
  )
}
