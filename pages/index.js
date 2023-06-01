import AboutSections from '@/components/AboutSections'
import Banner from '@/components/Banner'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import ProjectsWorks from '@/components/ProjectsWorks'
import ThemeSet from '@/components/ThemeSet'
import Head from 'next/head';
import { createClient } from "next-sanity";

export default function Home({ languages, software, project }) {
  return (
    <>
      <Head>
        <title>Nilesh Rathod | Full Stack Developer</title>
        <meta name="description" content="Developer ? MERN Stack : Front End" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devLogo.png" />
      </Head>
      <main className={`w-full h-full 1x1:max-w-[1280px] max-w-[1200px] mx-auto`}>
        <Banner />
        <AboutSections languages={languages} software={software} />
        <ProjectsWorks />
        <Experiences />
      </main>
      {/* <Footer /> */}
      {/* theme changes */}
      <ThemeSet />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "q5etd0xs",
    dataset: "production",
    useCdn: true
  })

  const query = `*[_type == "languages"]`;
  const languages = await client.fetch(query);

  const query_2 = `*[_type == "software"]`;
  const software = await client.fetch(query_2);

  const query_3 = `*[_type == "project"]`;
  const project = await client.fetch(query_3);

  return {
    props: {
      languages,
      software,
      project
    }
  };
}


