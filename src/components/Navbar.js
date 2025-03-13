import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";
import { LuSun, LuMoon } from "react-icons/lu";
import { HandleThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function NavBar() {
  const { theme, setTheme } = useContext(HandleThemeContext);

  const iconStyling =
    "text-xl sm:text-4xl hover:cursor-pointer hover:text-primary";

  const darkThemeCard =
    "font-bold text-md bg-gray-900 text-gray-300  flex justify-between items-center p-5 sm:p-6  lg:text-xl";
  const lightThemeCard =
    "font-bold text-md bg-neutral-300 text-base-content flex justify-between items-center p-5 sm:p-6  lg:text-xl";

  return (
    <div className={theme == "dark" ? darkThemeCard : lightThemeCard}>
      <div>
        <Link href="/">
          <FaHome className={iconStyling} />
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <Link href="/about">
          <p className="hover:text-primary">About</p>
        </Link>
        <Link href="/contact">
          <p className="hover:text-primary">Contact</p>
        </Link>
        {theme == "dark" && (
          <LuSun className={iconStyling} onClick={() => setTheme("light")} />
        )}
        {theme == "light" && (
          <LuMoon className={iconStyling} onClick={() => setTheme("dark")} />
        )}
        <a href="https://github.com/Hampus2001" className={iconStyling}>
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
