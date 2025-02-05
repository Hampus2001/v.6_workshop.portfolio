import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import NavBar from "@/Components/Navbar";

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
    <div>
      <NavBar />
      <div className="flex flex-col items-center p-10">
        {!loggedIn && (
          <form className="flex flex-col gap-2">
            <input
              type="text"
              onChange={(e) => setInputUsername(e.target.value)}
              className="text-black px-4 py-2"
              placeholder="Username"
            />
            <input
              type="password"
              onChange={(e) => setInputPassword(e.target.value)}
              className="text-black px-4 py-2"
              placeholder="Password"
            />
            <div className="flex gap-5">
              <button
                className="bg-white text-black"
                onClick={() => handleLogin()}
              >
                Log in
              </button>
            </div>
          </form>
        )}
        {loggedIn && (
          <div className="flex flex-col items-center gap-2">
            <form className="flex flex-col gap-2" onSubmit={addProject}>
              <input
                className="text-black"
                type="text"
                placeholder="Project Name:"
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <input
                className="text-black"
                type="text"
                placeholder="Description:"
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
              />
              <input
                className="text-black"
                type="text"
                placeholder="Link:"
                onChange={(e) =>
                  setNewProject({ ...newProject, link: e.target.value })
                }
              />
              <input
                className="text-black"
                type="text"
                placeholder="Year:"
                onChange={(e) =>
                  setNewProject({ ...newProject, year: e.target.value })
                }
              />
              <input
                className="text-black"
                type="text"
                placeholder="Image:"
                onChange={(e) =>
                  setNewProject({ ...newProject, image: e.target.value })
                }
              />
              <input
                className="text-black mt-5"
                type="text"
                placeholder="tech skills:"
                onChange={(e) => setNewTechSkills(e.target.value)}
              />

              <button type="submit" className="p-5">
                Add Project
              </button>
            </form>
            <ul>
              {permission.projects.map((project, index) => {
                return (
                  <li className="flex gap-3" key={index}>
                    <h2>title: {project.title}</h2>
                    <p>Description:{project.description}</p>
                    <p>Year:{project.year}</p>
                    <p>Link:{project.link}</p>
                    <p>Image Tag:{project.image}</p>
                    <p></p>
                    <h3>Tech skills:{permission.techSkills[index]}</h3>
                    <button
                      onClick={() => permission.deleteProject(project.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
            <button onClick={() => setLoggedIn(false)}>Log out</button>
            <button onClick={() => console.log(permission)}>logga</button>
          </div>
        )}
      </div>
    </div>
  );
}
