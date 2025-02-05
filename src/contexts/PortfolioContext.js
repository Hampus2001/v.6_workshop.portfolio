import { createContext, useState, useEffect } from "react";

export const MyPortfolioContext = createContext([]);

export default function PortfolioContext({ children }) {
  const [projects, setProjects] = useState();
  const [techSkills, setTechSkills] = useState();

  useEffect(() => {
    // Load data from localStorage on initial render
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const savedTechSkills =
      JSON.parse(localStorage.getItem("techSkills")) || [];

    setProjects(savedProjects);
    setTechSkills(savedTechSkills);
  }, []);

  //Overwrite localstorage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [projects || techSkills]);

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
    setTechSkills(techSkills.filter((tech) => tech.id !== id));
  };

  return (
    <MyPortfolioContext.Provider
      value={{
        projects,
        setProjects,
        techSkills,
        setTechSkills,
        deleteProject,
      }}
    >
      {children}
    </MyPortfolioContext.Provider>
  );
}
