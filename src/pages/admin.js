import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import NavBar from "@/Components/Navbar";

export default function Admin() {
  const { projects, setProjects } = useContext(MyPortfolioContext);

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

  const displayProjects = [];

  for (let i = 0; i < projects.length; i++) {
    displayProjects.push(
      <div
        className="flex flex-col text-neutral-300 m-10 shadow-lg p-5 rounded-lg dark:bg-neutral-900 gap-3"
        key={i}
      >
        <input
          type="text"
          className="bg-neutral-800 py-20 text-center rounded-t-lg"
          value={projects[i].image}
          onChange={(e) => {
            const newImage = [...projects];
            newImage[i].image = e.target.value;
            setProjects(newImage);
          }}
        />
        <input
          type="text"
          className="bg-neutral-900 text-3xl"
          value={projects[i].title}
          onChange={(e) => {
            const newTitle = [...projects];
            newTitle[i].title = e.target.value;
            setProjects(newTitle);
          }}
        />
        <input
          type="text"
          className="bg-neutral-900"
          value={projects[i].desciption}
          onChange={(e) => {
            const newDescription = [...projects];
            newDescription[i].desciption = e.target.value;
            setProjects(newDescription);
          }}
        />
        <input
          type="text"
          className="bg-neutral-900"
          value={projects[i].techStack}
          onChange={(e) => {
            const newTech = [...projects];
            newTech[i].techStack = e.target.value;
            setProjects(newTech);
          }}
        />
        <div className="flex justify-between">
          <input
            type="text"
            className="bg-neutral-900"
            value={projects[i].year}
            onChange={(e) => {
              const newYear = [...projects];
              newYear[i].year = e.target.value;
              setProjects(newYear);
            }}
          />
          <input
            type="text"
            className="bg-neutral-900 text-end"
            value={projects[i].link}
            onChange={(e) => {
              const newLink = [...projects];
              newLink[i].link = e.target.value;
              setProjects(newLink);
            }}
          />
        </div>
      </div>
    );
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
            {displayProjects}
          </div>
        )}

        <button onClick={() => setLoggedIn(false)}>Log out</button>
        <button onClick={() => console.log(projects[0])}>logga</button>
      </div>
    </div>
  );
}
