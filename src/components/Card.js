import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { HandleThemeContext } from "@/contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";

export default function Card() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  const { theme } = useContext(HandleThemeContext);
  const displayProjects = [];

  const darkThemeCard =
    "w-full sm:w-5/12 bg-gray-900 text-gray-300 shadow-xl rounded-lg dark:shadow-neutral-950";
  const lightThemeCard =
    "w-full sm:w-5/12 bg-neutral-300 text-base-content shadow-xl rounded-lg shadow-neutral-500";

  for (let i = 0; i < projects.length; i++) {
    displayProjects.push(
      <div className={theme == "dark" ? darkThemeCard : lightThemeCard} key={i}>
        <img
          src={projects[i].image}
          alt="Project screenshot"
          className="h-auto w-auto rounded-t-lg"
        />
        <div key={i} className="flex justify-center w-full">
          <div className="flex flex-col w-full gap-4 lg:gap-5 p-5 lg:p-10 rounded-b-lg">
            <h2 className="text-sm sm:text-lg lg:text-2xl font-bold tracking-widest">
              {projects[i].title}
            </h2>
            <p className=" sm:tracking-wide text-xs lg:text-lg">
              {projects[i].description}
            </p>
            <p className="py-2 text-xs lg:text-lg">
              Tech stack: {projects[i].techSkills}
            </p>
            <div className="flex justify-between items-center text-xs lg:text-lg">
              <p>Year: {projects[i].year}</p>
              <a
                href={projects[i].link}
                className="bg-base-content text-base-100 p-2 rounded-lg"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{displayProjects}</>;
}
