'use client'

import AboutSections from '@/components/AboutSections'
import Banner from '@/components/Banner'
import Experiences from '@/components/Experiences'
import ProjectsWorks from '@/components/ProjectsWorks'
import ThemeSet from '@/components/ThemeSet'
import Head from 'next/head';
import { createClient } from "next-sanity";
import { useEffect } from 'react'
import Header from '@/components/Header'

export default function Home({ skills, projects_tabs, projects, topProjects }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  // console.log(projects)

<<<<<<< HEAD
=======
export default function Home() {
>>>>>>> cb68779dac979b2f41e5569c1c10bd73aac4b99f
  return (
    <>
      <Head>
        <title>Nilesh Rathod | Full Stack Developer</title>
        <meta name="description" content="Nilesh Rathod as a Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devLogo.png" />
      </Head>

      <Header topProjects={topProjects} />
      <main className={`w-full h-full 1x1:max-w-[1280px] max-w-[1200px] mx-auto`}>
        <Banner />
<<<<<<< HEAD
        <AboutSections skills={skills} />
        <ProjectsWorks allProjects={projects} tabs={projects_tabs} />
=======
        <AboutSections />
        <ProjectsWorks />
>>>>>>> cb68779dac979b2f41e5569c1c10bd73aac4b99f
        <Experiences />
        {/* theme changes */}
        <ThemeSet />
      </main>
    </>
  )
}

<<<<<<< HEAD
export async function getStaticProps() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2021-10-21',
    ignoreBrowserTokenWarning: true,
  })

  const query = `*[_type == "skills"][0]`;
  const skills = await client.fetch(query);

  const query_2 = `*[_type == "projectstabs"]`;
  const projects_tabs = await client.fetch(query_2);

  const query_3 = `*[_type == "projects"] | order(name desc)`;
  const projects = await client.fetch(query_3);

  const query_4 = `*[_type == "topProjects"]`;
  const topProjects = await client.fetch(query_4);

  return {
    props: {
      skills,
      projects_tabs,
      projects,
      topProjects
    }
  };
}

=======
>>>>>>> cb68779dac979b2f41e5569c1c10bd73aac4b99f

