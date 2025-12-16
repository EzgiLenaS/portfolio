import React from "react";

const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript (basic)", "HTML5", "CSS3"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
  "Game Development": ["Unity", "C#"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 py-16 px-6 md:px-10"
    >
      <h2 className="text-[32px] md:text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Skills
      </h2>

      <p className="text-sm md:text-base text-gray-300 max-w-[640px] text-center">
        These are the main technologies I&apos;ve used in my personal projects,
        tutorials and experiments. I&apos;m always open to learning new tools
        when a project needs them.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[900px] mt-4">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl border border-[#2A0E61] bg-black/40 p-5 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {group}
            </h3>
            <ul className="text-sm text-gray-300 space-y-1">
              {(items as string[]).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
