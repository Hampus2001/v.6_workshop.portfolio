import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import NavBar from "@/Components/Navbar";
import Card from "@/Components/Card";

export default function Admin() {
  const permission = useContext(MyPortfolioContext);

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    setLoggedIn(isLoggedIn);
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const [credentials, setCredentials] = useState({
    username: "Hampus",
    password: "Hampus123",
  });

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
    year: "",
    image: "",
    id: "",
  });
  const [newTechSkills, setNewTechSkills] = useState("");

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function handleLogin() {
    if (
      credentials.username === inputUsername &&
      credentials.password === inputPassword
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  function addProject(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    setNewProject({ ...newProject, id: Date.now() });
    permission.setProjects([...permission.projects, newProject]);
    permission.setTechSkills([...permission.techSkills, newTechSkills]);
  }

  return (
    <div className="flex flex-col w-full">
      <NavBar />
      <div className="flex flex-col items-center p-10">
        {!loggedIn && (
          <form className="flex flex-col gap-2">
            <input
              type="text"
              onChange={(e) => setInputUsername(e.target.value)}
              className="px-4 py-2"
              placeholder="Username"
            />
            <input
              type="password"
              onChange={(e) => setInputPassword(e.target.value)}
              className=" px-4 py-2"
              placeholder="Password"
            />
            <div className="flex gap-5">
              <button className="bg-white " onClick={() => handleLogin()}>
                Log in
              </button>
            </div>
          </form>
        )}
        {loggedIn && (
          <div className="flex flex-col items-center gap-2">
            <form className="flex flex-col gap-2" onSubmit={addProject}>
              <input
                className=""
                type="text"
                placeholder="Project Name:"
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <input
                className=""
                type="text"
                placeholder="Description:"
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
              />
              <input
                className=""
                type="text"
                placeholder="Link:"
                onChange={(e) =>
                  setNewProject({ ...newProject, link: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Year:"
                onChange={(e) =>
                  setNewProject({ ...newProject, year: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Image:"
                onChange={(e) =>
                  setNewProject({ ...newProject, image: e.target.value })
                }
              />
              <input
                className=" mt-5"
                type="text"
                placeholder="tech skills:"
                onChange={(e) => setNewTechSkills(e.target.value)}
              />

              <button type="submit" className="p-5">
                Add Project
              </button>
            </form>
          </div>
        )}
        {permission.projects.map((project, index) => {
          return (
            <div
              className="flex flex-col text-neutral-300 w-full m-10 shadow-lg p-10 rounded-lg dark:bg-neutral-900"
              key={index}
            >
              <img src={project.image} className="h-44 pb-5" />
              <input
                className="text-2xl font-bold tracking-widest"
                value={project.description}
                onChange={(e) =>
                  permission.updateDesciption(e.target.value, project.id)
                }
              />

              <p className="tracking-wide">{project.description}</p>
              <p className="py-3">Tech stack: {permission.techSkills[index]}</p>
              <div className="flex justify-between">
                <p>Year: {project.year}</p>
                <a href={project.link}>Link</a>
              </div>
              <div className="flex justify-between">
                <button
                  className="btn bg-primary text-white"
                  onClick={() => permission.deleteProject(project.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}

        <button onClick={() => setLoggedIn(false)}>Log out</button>
        <button onClick={() => console.log(permission)}>logga</button>
      </div>
    </div>
  );
}
