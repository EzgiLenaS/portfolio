import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div
    id='projects'
    className='flex flex-col items-center justify-center py-1'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-1'>
            My Projects
        </h1>

        <h2 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10'>
            Websites
        </h2>

        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src="/z-e-commerce.png"
            title="E-Commerce Store"
            description="A full-stack e-commerce platform that enables users to browse and purchase products securely."
            />
            <ProjectCard
            src="/z-twitter.png"
            title="Twitter Clone"
            description="A Twitter-like social media platform with authentication, real-time interactions, and post engagement features."
            />
            <ProjectCard
            src="/z-product.png"
            title="Product Store"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
             <ProjectCard
            src="/screenshot-for-readme.png"
            title="Netflix Clone"
            description="A Netflix-like streaming platform with authentication and real-time data fetching."
            />
        </div>

        <h2 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Games
        </h2>

        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <ProjectCard
            src="/z-delivery.png"
            title="The Delivery Driver"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>
    </div>
  )
}

export default Projects