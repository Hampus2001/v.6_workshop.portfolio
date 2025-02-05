import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";

export default function Card() {
  const permission = useContext(MyPortfolioContext);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setShowCard(true);
  }, [permission.length > 0]);

  return (
    <>
      {showCard && (
        <div className="flex w-full justify-center">
          {permission.projects.map((project, index) => {
            return (
              <div
                className="flex flex-col text-neutral-300 w-full m-10 shadow-lg p-5 rounded-lg dark:bg-neutral-900"
                key={index}
              >
                <img src={project.image} className="h-64 pb-5" />
                <h2 className="text-2xl font-bold tracking-widest">
                  {project.title}
                </h2>
                <p className="tracking-wide">{project.description}</p>
                <p className="py-3">
                  Tech stack: {permission.techSkills[index]}
                </p>
                <div className="flex justify-between">
                  <p>Year: {project.year}</p>
                  <a href={project.link}>Link</a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
