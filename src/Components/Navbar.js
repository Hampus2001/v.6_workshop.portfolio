import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";
import { LuSun, LuMoon } from "react-icons/lu";
import { HandleThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function NavBar() {
  const { theme, setTheme } = useContext(HandleThemeContext);

  const iconStyling =
    "text-xl sm:text-3xl hover:cursor-pointer hover:text-primary";

  return (
    <div className="font-bold text-sm bg-base-300 flex h-4 justify-between items-center p-10  lg:text-xl">
      <div>
        <Link href="/">
          <FaHome className={iconStyling} />
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="/contact">
          <p>Contact</p>
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
