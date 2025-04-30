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
            link="https://github.com/EzgiLenaS/e-commerce-store"
            description="A full-featured e-commerce platform built with the MERN stack, integrated with Stripe for secure payments and Redis for efficient caching. The project includes a robust authentication system using JWT with access and refresh tokens, along with user signup/login flows. Core e-commerce functionalities such as product and category management, shopping cart, checkout process, and coupon codes are implemented. An admin dashboard provides tools for managing products and viewing sales analytics. The UI is fully responsive and styled with Tailwind CSS. This project allowed me to deepen my understanding of secure full-stack development, performance optimization, and real-world e-commerce workflows."
            />
            <ProjectCard
            src="/z-twitter.png"
            title="Twitter Clone"
            link="https://github.com/EzgiLenaS/twitter-clone"
            description="A social media application inspired by Twitter, developed using React, Node.js, Express, and MongoDB with Tailwind CSS for styling. It includes core features such as JWT-based user authentication, post creation, deletion, commenting, liking, and real-time interaction. Users can follow others, manage their profile details, and upload images via Cloudinary. The app also supports suggested users, notifications, and profile customization. This project allowed me to gain practical experience in full-stack development, React Query for data management, and building scalable social platforms."
            />
            <ProjectCard
            src="/z-product.png"
            title="Product Store"
            link="https://github.com/EzgiLenaS/product_store"
            description="A responsive e-commerce product store built with the MERN stack, featuring product listings, detailed views, and full frontend-backend integration. The project includes a custom-built RESTful API, clean UI with Chakra UI, and robust error handling to ensure smooth user interactions. Developed as part of a learning journey, this application allowed me to practice full-stack development and deploy a fully functional store with real-world structure."
            />
             <ProjectCard
            src="/screenshot-for-readme.png"
            title="Netflix Clone"
            link="https://github.com/EzgiLenaS/netflix-clone"
            description="A fully responsive movie streaming platform built with the MERN stack and styled using Tailwind CSS. The application features user authentication with JWT, dynamic movie and TV show listings, trailer previews, search functionality for both titles and actors, and personalized recommendations. Users can also view similar content suggestions and access search history. This project helped me deepen my understanding of full-stack integration, media API consumption, and responsive UI design optimized for real-world deployment."
            />
        </div>

        <h2 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Games
        </h2>

        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <ProjectCard
            src="/z-delivery.png"
            title="The Delivery Driver"
            description="A 2D top-down delivery game built with Unity and C#, where players pick up packages and deliver them to customers while avoiding obstacles and using boost zones to stay fast. Created as part of a game development course, this project helped me explore core Unity mechanics like collision, trigger zones, and map interaction while designing a fun and dynamic gameplay loop."
            />
        </div>
    </div>
  )
}

export default Projects