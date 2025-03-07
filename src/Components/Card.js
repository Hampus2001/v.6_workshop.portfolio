import { HandleImagesContext } from "@/contexts/imagesContext";
import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";

export default function Card() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  const { images, setImages } = useContext(HandleImagesContext);
  const displayProjects = [];

  for (let i = 0; i < projects.length; i++) {
    displayProjects.push(
      <div className="flex justify-center md: w-full">
        <div
          className="flex flex-col text-neutral-300 w-full m-10 lg:m-0 lg:my-10 shadow-lg p-5 rounded-lg dark:bg-neutral-900"
          key={i}
        >
          <img src={images[i]} className="h-auto w-auto pb-5" />
          <h2 className="text-2xl font-bold tracking-widest">
            {projects[i].title}
          </h2>
          <p className="tracking-wide">{projects[i].description}</p>
          <p className="py-3">Tech stack: {projects[i].techSkills}</p>
          <div className="flex justify-between">
            <p>Year: {projects[i].year}</p>
            <a href={projects[i].link}>Link</a>
          </div>
        </div>
      </div>
    );
  }

  return <>{displayProjects}</>;
}
