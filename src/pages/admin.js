import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useState } from "react";
import Link from "next/link";

export default function Admin() {
  const permission = useContext(MyPortfolioContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "Hampus",
    password: "Hampus123",
  });

  const [newProject, setNewProject] = useState("");
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
    permission.setProjects([...permission.projects, newProject]);
    permission.setTechSkills([...permission.techSkills, newTechSkills]);
  }

  return (
    <div className="flex flex-col items-center p-10">
      <Link href="/" className=" flex p-10">
        Home
      </Link>
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
          <button className="bg-white text-black" onClick={() => handleLogin()}>
            Log in
          </button>
        </form>
      )}
      {loggedIn && (
        <div className="flex flex-col items-center gap-2">
          <form className="flex flex-col gap-2" onSubmit={addProject}>
            <input
              className="text-black"
              type="text"
              placeholder="Project Name:"
              onChange={(e) => setNewProject(e.target.value)}
            />
            <input
              className="text-black"
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
                <li key={index}>
                  <h2>{project}</h2>
                  <h3>{permission.techSkills[index]}</h3>
                </li>
              );
            })}
          </ul>
          <button onClick={() => setLoggedIn(false)}>Log out</button>
        </div>
      )}
    </div>
  );
}
