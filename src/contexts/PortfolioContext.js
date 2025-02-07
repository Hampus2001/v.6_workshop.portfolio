import { createContext, useState, useEffect } from "react";

export const MyPortfolioContext = createContext([]);

export default function PortfolioContext({ children }) {
  const [projects, setProjects] = useState([
    {
      image: "image tag",
      title: "Gemnini",
      desciption: "Schoolproject",
      year: "2025",
      link: "www.github.com",
      techStack: "nextjs, tailwind, node, git",
      id: "1234",
    },
    {
      image: "image tag2",
      title: "Gemnini2",
      desciption: "Schoolproject2",
      year: "20252",
      link: "www.github.com2",
      techStack: "nextjs, tailwind, node, git2",
      id: "1234 2",
    },
  ]);

  //read from local storage

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
