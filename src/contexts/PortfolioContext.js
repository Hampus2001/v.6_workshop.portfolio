import { createContext, useState, useEffect } from "react";

export const MyPortfolioContext = createContext([]);

export default function PortfolioContext({ children }) {
  const [projects, setProjects] = useState([
    {
      image: "./images/gemini.png",
      title: "Google Gemini",
      description:
        'Group project from school. Uses AI API and custom prompts to generate desired output. I\'ve created the page "recipe," which generates random recipes on chosen input!',
      year: "2025",
      link: "https://gemini-project-one.vercel.app/Hampus",
      techSkills: "React, Tailwind, Git, DaisyUI",
      id: "",
    },
    {
      image: "./images/pokemonPage.png",
      title: "Pokemon Collection",
      description:
        "Digital Pokémon collection: Showcase your cards without bringing them! With this site, you can generate all Pokémon sets and cards using an API and save them to your digital collection.",
      year: "2025",
      link: "https://pokemon-one-bay.vercel.app/",
      techSkills: "Next.js, Tailwind, Git",
      id: "",
    },
    {
      image: "./images/matchmetrics.png",
      title: "MatchMetrics",
      description:
        "Side project. Live scores, upcomming fixtures, teams and leagues! Working with backend-developer.",
      year: "2025",
      link: "https://matchmetrix-frontend-frame.vercel.app/",
      techSkills: "Next.js, Tailwind, Git, express",
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
