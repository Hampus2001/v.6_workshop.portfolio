import NavBar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNode,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";
import Card from "@/Components/Card";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div id="hero" className="flex p-16 justify-between items-center">
        <div className="flex flex-col text-2xl">
          <p>My Name is</p>
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold mb-5">
            Hampus Söderlund
          </h1>
          <p>I build things for web</p>
        </div>
        <img
          className="w-44 h-44 rounded-full"
          src="./images/khira.jpg"
          alt="profile picture"
        />
      </div>

      <div
        id="myTechStacks"
        className="flex flex-col gap-5 p-10 justify-between items-center"
      >
        <h3>MY TECH STACK:</h3>
        <p>Technologies I've been working with recently</p>

        <div className="flex w-full justify-center gap-5 text-7xl md:text-9xl">
          <FaHtml5 className="text-red-500" />
          <FaCss3Alt className="text-blue-500" />
          <FaReact className="text-sky-500" />
          <RiTailwindCssFill className="text-sky-400" />
          <IoLogoJavascript className="text-yellow-400" />
        </div>
        <div className="flex w-full justify-center gap-5 text-7xl md:text-9xl">
          <FaGitAlt className="text-orange-600" />
          <RiNextjsFill />
          <FaGithub />
          <BiLogoVisualStudio className="text-sky-500" />
          <FaNode className="text-green-500" />
        </div>
      </div>
      <br />
      <div id="projects">
        <Card />
      </div>
      <Footer />
    </div>
  );
}
