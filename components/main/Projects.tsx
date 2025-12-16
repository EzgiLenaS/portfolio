import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 gap-8"
    >
      <h1 className="text-[32px] md:text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Projects
      </h1>

      {/*Real-time & Tools*/}
      { 
      <div className="w-full max-w-[1100px] flex flex-col gap-4 px-4 md:px-8 mt-8">
        <h2 className="text-[24px] md:text-[28px] font-semibold text-white mb-2">
          Real-time Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            src="/projects/tulululu.png"
            title="Video Call App (Tulululu)"
            description="Real-time video call and chat app I actively use with my friends."
            tech="WebRTC, Socket.io, React, Node.js, MongoDB"
            liveUrl="https://tulululu.ezgilenasonmez.com/"
            githubUrl="https://github.com/EzgiLenaS/video_calling"
          />

          <ProjectCard
            src="/projects/karekod2.png"
            title="Pharmacy Chrome Extension"
            description="Internal Chrome extension for my family's pharmacy to quickly look up products by barcode."
            tech="Chrome Extensions, JavaScript"
            liveUrl="https://chromewebstore.google.com/detail/ezcane-i%CC%87la%C3%A7-karekod-tara/jnpffjojepcgldffnpjkkfjapmepkgkc?hl=tr"
            githubUrl="https://github.com/EzgiLenaS/pharmacy_extension"
          />
        </div>
      </div>
      }

      {/* Web Apps */}
      <div className="w-full max-w-[1100px] flex flex-col gap-4 px-4 md:px-8">
        <h2 className="text-[24px] md:text-[28px] font-semibold text-white mb-2">
          Web Apps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProjectCard
            src="/projects/twitterclone.png"
            title="Twitter Clone"
            description="A Twitter-like social media app built while following a MERN tutorial, extended with my own improvements."
            tech="React, Node.js, MongoDB, Tailwind CSS"
            liveUrl="https://twitterclone.ezgilenasonmez.com/"        // varsa ekle, yoksa sil
            githubUrl="https://github.com/EzgiLenaS/twitter-clone"
          />

          <ProjectCard
            src="/projects/ecommerce.png"
            title="E-commerce Store"
            description="A simple online store for practising product listing, cart, and checkout logic."
            tech="React, Node.js, MongoDB, Stripe (trial)"
            liveUrl="https://ecommerce.ezgilenasonmez.com/"
            githubUrl="https://github.com/EzgiLenaS/e-commerce-store"
          />

          <ProjectCard
            src="/projects/product.png"
            title="Product Management App"
            description="A small CRUD app for managing products and categories with authentication."
            tech="MERN stack"
            liveUrl="https://productstore.ezgilenasonmez.com/"
            githubUrl="https://github.com/EzgiLenaS/product_store"
          />

          <ProjectCard
            src="/projects/streamsphere.png"
            title="StreamSphere"
            description="This portfolio site, built with Next.js 13 and Tailwind CSS, deployed on a Hostinger VPS."
            tech="Next.js, TypeScript, Tailwind CSS"
            liveUrl="https://streamsphere.ezgilenasonmez.com/"
            githubUrl="https://github.com/EzgiLenaS/netflix-clone"
          />
        </div>
      </div>

      {/* Games */}
      <div className="w-full max-w-[1100px] flex flex-col gap-4 px-4 md:px-8 mt-8">
        <h2 className="text-[24px] md:text-[28px] font-semibold text-white mb-2">
          Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            src="/projects/z-delivery.png"
            title="The Delivery Driver"
            description="A 2D top-down delivery game where the player navigates the city and delivers packages under time pressure."
            tech="Unity, C#"
            githubUrl="https://github.com/EzgiLenaS/delivery_driver_udemy"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
