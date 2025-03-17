import { HandleThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Contact() {
  const { theme } = useContext(HandleThemeContext);

  const darkThemeCard =
    "flex flex-col bg-gray-900 text-gray-300 shadow-xl rounded-lg dark:shadow-neutral-950 p-5 lg:p-20 gap-2 lg:gap-10 lg:text-4xl";
  const lightThemeCard =
    "flex flex-col bg-neutral-300 text-base-content shadow-xl rounded-lg shadow-neutral-500 p-5 lg:p-20 gap-2 lg:gap-10 lg:text-4xl";

  return (
    <div className="flex flex-col items-center min-h-screen p-10 gap-10">
      <h1 className="lg:text-7xl font-bold">Contact</h1>

      <div className={theme == "dark" ? darkThemeCard : lightThemeCard}>
        <h1 className="lg:pb-10  text-xl lg:text-4xl font-bold">
          Hampus Söderlund
        </h1>
        <div className="flex gap-2 lg:text-3xl">
          <h2 className="font-bold">Email: </h2>
          <a>Hampus_2001@hotmail.com</a>
        </div>
        <div className="flex gap-2 lg:text-3xl">
          <h2 className="font-bold">School: </h2>
          <a>Chas Academy</a>
        </div>
      </div>
    </div>
  );
}
