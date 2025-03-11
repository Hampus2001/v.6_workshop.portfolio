import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";

export default function Admin() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [newproject, setNewProject] = useState([
    {
      image: "",
      title: "",
      description: "",
      year: "",
      link: "",
      techSkills: "",
      id: "",
    },
  ]);
  const [credentials, setCredentials] = useState({
    username: "Hampus",
    password: "Hampus123",
  });

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

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImage = [...newproject];
      newImage.image = imageUrl;
      setNewProject(newImage);
    }
  }

  console.log(newproject);
  //All added projects displayed for edit in adminspage
  const displayProjects = [];

  for (let i = 0; i < projects.length; i++) {
    displayProjects.push(
      <div className="shadow-lg shadow-base rounded-lg">
        <img className="h-auto w-auto rounded-t-lg" src={projects[i].image} />
        <div
          className="flex flex-col text-neutral-300 w-full gap-4 sm:gap-8 lg:m-0 lg:my-10 shadow-lg p-5 rounded-b-lg dark:bg-neutral-900"
          key={i}
        >
          <input
            type="text"
            className="bg-neutral-900 text-lg sm:text-3xl"
            value={projects[i].title}
            onChange={(e) => {
              const newTitle = [...projects];
              newTitle[i].title = e.target.value;
              setProjects(newTitle);
            }}
          />
          <textarea
            type="text"
            className="bg-neutral-900 text-md sm:text-lg"
            value={projects[i].description}
            onChange={(e) => {
              const newDescription = [...projects];
              newDescription[i].description = e.target.value;
              setProjects(newDescription);
            }}
          />
          <input
            type="text"
            className="bg-neutral-900"
            value={projects[i].techSkills}
            onChange={(e) => {
              const newTech = [...projects];
              newTech[i].techStack = e.target.value;
              setProjects(newTech);
            }}
          />

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

          <button
            className="bg-primary rounded-lg"
            onClick={() => {
              const filteredProjects = projects.filter(
                (_, index) => index !== i
              );
              setProjects(filteredProjects);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  //Adminpage return:
  return (
    <div className="flex flex-col min-h-screen p-10">
      <div className="flex flex-col">
        {!loggedIn && (
          <form className="flex flex-col gap-2 p-10">
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
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col w-full bg-base-300 rounded-lg shadow-lg shadow-base ">
              <input
                type="file"
                className="bg-base-200 py-20 md:py-60 text-center rounded-t-lg"
                onChange={(e) => handleImageUpload(e)}
              />
              <div className="flex flex-col w-full gap-5 p-5">
                <input
                  type="text"
                  className="bg-base-300 text-sm sm:text-lg"
                  placeholder="Title: "
                  onChange={(e) => {
                    const newTitle = newproject;
                    newTitle.title = e.target.value;
                    setNewProject(newTitle);
                  }}
                />
                <textarea
                  type="text"
                  className="bg-base-300 text-sm sm:text-lg"
                  placeholder="Description: "
                  onChange={(e) => {
                    const newDescription = newproject;
                    newDescription.description = e.target.value;
                    setNewProject(newDescription);
                  }}
                />
                <input
                  type="text"
                  className="bg-base-300 text-sm sm:text-lg"
                  placeholder="Tech stack: "
                  onChange={(e) => {
                    const newTech = newproject;
                    newTech.techSkills = e.target.value;
                    setNewProject(newTech);
                  }}
                />

                <input
                  type="text"
                  className="bg-base-300 text-sm sm:text-lg"
                  placeholder="year: "
                  onChange={(e) => {
                    const newYear = newproject;
                    newYear.year = e.target.value;
                    setNewProject(newYear);
                  }}
                />
                <input
                  type="text"
                  className="bg-base-300 text-sm sm:text-lg"
                  placeholder="Link: "
                  onChange={(e) => {
                    const newLink = newproject;
                    newLink.link = e.target.value;
                    setNewProject(newLink);
                  }}
                />

                <button
                  className="bg-primary text-base-300 rounded-lg py-5"
                  onClick={() => {
                    const addProject = [...projects, newproject];
                    setProjects(addProject);
                  }}
                >
                  Add Project
                </button>
              </div>
            </div>
            <div>{displayProjects}</div>
          </div>
        )}
      </div>
    </div>
  );
}
