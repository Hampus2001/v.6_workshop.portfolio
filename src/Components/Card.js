import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";

export default function Card() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  const displayProjects = [];

  for (let i = 0; i < projects.length; i++) {
    displayProjects.push(
      <div className="shadow-lg shadow-base rounded-lg shadow-neutral-content">
        <img src={projects[i].image} className="h-auto w-auto rounded-t-lg" />
        <div key={i} className="flex justify-center w-full text-base-content">
          <div className="flex flex-col text-base-content bg-base-100 w-full gap-4 sm:gap-8 p-5 lg:p-20 rounded-b-lg">
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
                className="bg-base-content text-base-300 p-2 lg:p-5 rounded-lg"
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
