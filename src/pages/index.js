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
import Card from "@/components/Card";
import { HandleThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState, useEffect } from "react";

export default function Home() {
  const { theme } = useContext(HandleThemeContext);

  return (
    <>
      <div
        className={`${
          theme == "dark"
            ? "bg-gradient-to-b from-gray-950 via-blue-900 to-gray-950"
            : "bg-gradient-to-b from-gray-100 via-blue-300 to-gray-100"
        } flex flex-col min-h-screen gap-20 md:gap-40 p-10 sm:px-14 md:px-28 2xl:px-80 xl:py-20`}
      >
        <div
          id="hero"
          className="flex my-10 justify-between items-center 2xl:gap-10  md:my-20"
        >
          <div className="flex flex-col text-sm md:text-3xl 2xl:text-4xl xl:gap-5">
            <p>My Name is</p>
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold mb-5 sm:text-4xl md:text-5xl 2xl:text-7xl">
              Hampus Söderlund
            </h1>
            <p>I build things for web</p>
          </div>
          <img
            className="w-28 h-28 rounded-full md:w-52 md:h-52 lg:w-64 lg:h-64 2xl:w-80 2xl:h-80 object-cover aspect-square "
            src="./images/progilePic.jpg"
            alt="profile picture"
          />
        </div>
        <div className="flex flex-col gap-10 md:gap-28">
          <div className="flex flex-col gap-5 items-center text-lg md:text-2xl md:gap-10">
            <h3>MY TECH STACK:</h3>
            <p>Technologies I've been working with recently</p>
          </div>
          <div
            id="myTechStacks"
            className="flex flex-col gap-5 justify-between items-center md:gap-20"
          >
            <div className="flex w-full justify-between text-5xl sm:text-6xl lg:text-7xl">
              <FaHtml5 className="text-red-500" />
              <FaCss3Alt className="text-blue-500" />
              <FaReact className="text-sky-500" />
              <RiTailwindCssFill className="text-sky-400" />
              <IoLogoJavascript className="text-yellow-400" />
            </div>
            <div className="flex w-full justify-between text-5xl sm:text-6xl lg:text-7xl">
              <FaGitAlt className="text-orange-600" />
              <RiNextjsFill
                className={`${
                  theme == "dark" ? "text-gray-300" : "text-gray-900"
                }`}
              />
              <FaGithub
                className={`${
                  theme == "dark" ? "text-gray-300" : "text-gray-900"
                }`}
              />
              <BiLogoVisualStudio className="text-sky-500" />
              <FaNode className="text-green-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-20">
          <h2 className="text-lg md:text-2xl">PROJECTS</h2>
          <div id="projects" className="flex-wrap flex justify-between gap-10">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
