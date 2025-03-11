import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";

export default function Card() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  const displayProjects = [];

  for (let i = 0; i < projects.length; i++) {
    displayProjects.push(
      <div className="shadow-lg shadow-base rounded-lg">
        <img src={projects[i].image} className="h-auto w-auto rounded-t-lg" />
        <div key={i} className="flex justify-center w-full">
          <div className="flex flex-col text-neutral-300 w-full gap-2 sm:gap-5 lg:m-0 lg:my-10 shadow-lg p-5 rounded-b-lg dark:bg-neutral-900">
            <h2 className="text-2xl font-bold tracking-widest">
              {projects[i].title}
            </h2>
            <p className="tracking-wide text-sm sm:text-lg">
              {projects[i].description}
            </p>
            <p className="py-3 text-sm sm:text-lg">
              Tech stack: {projects[i].techSkills}
            </p>
            <div className="flex justify-between text-sm sm:text-lg">
              <p>Year: {projects[i].year}</p>
              <a href={projects[i].link}>Link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{displayProjects}</>;
}
