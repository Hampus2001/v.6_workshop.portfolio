import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { HandleThemeContext } from "@/contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";

export default function Card() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  const { theme } = useContext(HandleThemeContext);
  const displayProjects = [];

  const darkThemeCard =
    "bg-gray-900 text-gray-300 shadow-xl rounded-lg dark:shadow-neutral-950";
  const lightThemeCard =
    "bg-neutral-300 text-base-content shadow-xl rounded-lg shadow-neutral-500";

  for (let i = 0; i < projects.length; i++) {
    displayProjects.push(
      <div className={theme == "dark" ? darkThemeCard : lightThemeCard}>
        <img src={projects[i].image} className="h-auto w-auto rounded-t-lg" />
        <div key={i} className="flex justify-center w-full">
          <div className="flex flex-col w-full gap-4 sm:gap-8 p-5 lg:p-20 rounded-b-lg">
            <h2 className="text-2xl lg:text-5xl font-bold tracking-widest">
              {projects[i].title}
            </h2>
            <p className="tracking-wide text-sm sm:text-lg lg:text-3xl">
              {projects[i].description}
            </p>
            <p className="py-5 text-sm sm:text-lg lg:text-3xl">
              Tech stack: {projects[i].techSkills}
            </p>
            <div className="flex justify-between items-center text-sm sm:text-lg lg:text-3xl">
              <p>Year: {projects[i].year}</p>
              <a
                href={projects[i].link}
                className="bg-base-content text-base-100 p-2 lg:p-5 rounded-lg"
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
