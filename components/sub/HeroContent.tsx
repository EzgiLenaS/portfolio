"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideFromRight,
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContect = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-32 md:mt-40 w-full z-[20] gap-10"
    >
      {/* Sol taraf - metin */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box inline-flex items-center gap-2 py-[8px] px-[10px] border border-[#7042f88b] opacity-90 rounded-full bg-black/40 backdrop-blur"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <p className="Welcome-text text-[13px] text-[#E4ECFF]">
            Full-Stack Developer · MERN & Next.js
          </p>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="flex flex-col gap-2 mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[650px]"
        >
          <span>Hi, I&apos;m Ezgi.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            I build web apps & small games.
          </span>
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-[15px] md:text-[16px] text-gray-300 max-w-[560px] leading-relaxed"
        >
          Computer Engineering graduate (2023). I focus on MERN & Next.js
          projects and game development with Unity/C#.
          I enjoy turning tutorials into real projects and I&apos;m currently
          looking for an entry-level developer role.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="flex flex-row flex-wrap items-center gap-4 mt-4"
        >
          <a
            href="#projects"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition"
          >
            View projects
          </a>

          <a
            href="mailto:ezgilena00@gmail.com"
            className="px-5 py-2 rounded-full border border-gray-500 text-sm text-gray-200 hover:bg-white/5 transition"
          >
            Contact me
          </a>
        </motion.div>
      </div>

      {/* Sağ taraf - görsel */}
      <motion.div
        variants={slideFromRight(0.8)}
        className="w-full max-w-[420px] h-full flex justify-center items-center"
      >
        <Image
          src="/NextWebsite.png" // istersen başka bir görselle değiştir
          alt="Portfolio preview"
          width={650}
          height={650}
          className="w-full h-auto rounded-2xl border border-[#2A0E61] bg-black/40 object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContect;
