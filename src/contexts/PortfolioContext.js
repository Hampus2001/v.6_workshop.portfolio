import { createContext, useState, useEffect } from "react";

export const MyPortfolioContext = createContext([]);

export default function PortfolioContext({ children }) {
  const [projects, setProjects] = useState([
    {
      image: "./images/projectTwo.png",
      title: "Google Gemini",
      description:
        'Groupproject from school. Uses AI api and custom promts to generate desired output. I\'ve created the page "recipe" which generates random recipes on selected foodcategory!',
      year: "2025",
      link: "https://gemini-project-one.vercel.app/",
      techSkills: "React, Tailwind, Git, DaisyUI",
      id: "",
    },
    {
      image: "./images/pokemonPage.png",
      title: "Pokemon Collection",
      description:
        "Digital pokemon collection. Showcase your cards without bringing them! With this site you can generate all pokemon sets and cards using api.",
      year: "2025",
      link: "https://pokemon-one-bay.vercel.app/",
      techSkills: "Next.js, Tailwind, Git",
      id: "",
    },
  ]);

  return (
    <MyPortfolioContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </MyPortfolioContext.Provider>
  );
}
