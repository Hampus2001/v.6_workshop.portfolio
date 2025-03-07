import { MyPortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import NavBar from "@/Components/Navbar";
import { HandleImagesContext } from "../contexts/imagesContext";

export default function Admin() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  const { images, setImages } = useContext(HandleImagesContext);
  const [newImage, setNewImage] = useState();
  const [loggedIn, setLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [newproject, setNewProject] = useState([
    {
      image: "",
      title: "",
      desciption: "",
      year: "",
      link: "",
      techStack: "",
      id: "",
    },
  ]);
  const [credentials, setCredentials] = useState({
    username: "Hampus",
    password: "Hampus123",
  });

  useEffect(() => {
    //update localstorage to set logged in if you have logged in once.
    localStorage.setItem("isLoggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

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
      setNewImage(URL.createObjectURL(file));
    }
  }

  function submitImageUpload() {
    setImages([...images, newImage]);
    setNewImage("");
  }

  //All added projects displayed for edit in adminspage
  const displayProjects = [];

  for (let i = 0; i < projects.length; i++) {
    displayProjects.push(
      <div
        className="flex flex-col w-full text-neutral-300 m-10 md:m-0 md:my-10 shadow-lg p-5 rounded-lg dark:bg-neutral-900 gap-3"
        key={i}
      >
        <img
          className="bg-neutral-800 text-center rounded-t-lg h-64 md:h-[600px] "
          src={images[i]}
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
        <button
          onClick={() => {
            const filteredProjects = projects.filter((_, index) => index !== i);
            setProjects(filteredProjects);
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  //Adminpage return:
  return (
    <div className="flex flex-col">
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
          <div className="md:w-2/4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col m-10 md:m-0 md:w-full shadow-lg p-5 rounded-lg bg-base-300 text-base-content gap-3 md:gap-10 md:text-2xl">
                <input
                  type="file"
                  className="bg-base-200 py-20 md:py-60 text-center rounded-t-lg"
                  onChange={handleImageUpload}
                />

                <input
                  type="text"
                  className="bg-base-300 text-3xl"
                  placeholder="Title: "
                  onChange={(e) => {
                    const newTitle = newproject;
                    newTitle.title = e.target.value;
                    setNewProject(newTitle);
                  }}
                />
                <textarea
                  type="text"
                  className="bg-base-300"
                  placeholder="Description: "
                  onChange={(e) => {
                    const newDescription = newproject;
                    newDescription.desciption = e.target.value;
                    setNewProject(newDescription);
                  }}
                />
                <input
                  type="text"
                  className="bg-base-300"
                  placeholder="Tech stack: "
                  onChange={(e) => {
                    const newTech = newproject;
                    newTech.techStack = e.target.value;
                    setNewProject(newTech);
                  }}
                />
                <div className="flex justify-between">
                  <input
                    type="text"
                    className="bg-base-300"
                    placeholder="year: "
                    onChange={(e) => {
                      const newYear = newproject;
                      newYear.year = e.target.value;
                      setNewProject(newYear);
                    }}
                  />
                  <input
                    type="text"
                    className="bg-base-300 text-end"
                    placeholder="Link: "
                    onChange={(e) => {
                      const newLink = newproject;
                      newLink.link = e.target.value;
                      setNewProject(newLink);
                    }}
                  />
                </div>
                <button
                  className="bg-base-content text-base-300 rounded-lg py-5"
                  onClick={() => {
                    const addProject = [...projects, newproject];
                    setProjects(addProject);
                    submitImageUpload();
                  }}
                >
                  Add Project
                </button>
              </div>
            </div>
            <div>{displayProjects}</div>
            <button onClick={() => setLoggedIn(false)}>Log out</button>
          </div>
        )}
      </div>
    </div>
  );
}
