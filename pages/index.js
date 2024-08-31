'use client'

import AboutSections from '@/components/about/AboutSections'
import Banner from '@/components/banner/Banner'
import Experiences from '@/components/experience/Experiences'
import ProjectsWorks from '@/components/projects/ProjectsWorks'
import ThemeSet from '@/components/ThemeSet'
import Head from 'next/head';
import { createClient } from "next-sanity";
import { useEffect } from 'react'
import Header from '@/components/header/Header'
import Expertise from '@/components/expertise/Expertise'

export default function Home({ skills, projects_tabs, projects, topProjects }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <Head>
        <title>Nilesh Rathod | Full Stack Developer</title>
        <meta name="description" content="Nilesh Rathod as a Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devLogo.png" />
      </Head>

      <Header topProjects={topProjects} />
      {/* 1x1:max-w-[1280px] */}
      <main className={`w-full h-full 1x1:max-w-full 1x1:px-[32px] max-w-[1200px] mx-auto`}>
        <Banner />
        <AboutSections />
        <Expertise skills={skills} />
        <ProjectsWorks allProjects={projects} tabs={projects_tabs} topProjects={topProjects} />
        <Experiences />
      </main>
      {/* theme changes */}
      <ThemeSet />
    </>
  )
}

export async function getServerSideProps() {
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

  const query_3 = `*[_type == "projects"] | order(name asc)`;
  const projects = await client.fetch(query_3);

  const query_4 = `*[_type == "topProjects"] | order(name asc)`;
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

