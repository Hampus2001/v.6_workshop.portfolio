import { createContext, useState, useEffect } from "react";

export const MyPortfolioContext = createContext([]);

export default function PortfolioContext({ children }) {
  const [projects, setProjects] = useState([
    {
      image: "./images/pokemonPage.png",
      title: "Pokemon Collection",
      description:
        "Digital pokemon collection. Showcase your cards without bringing them!",
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
