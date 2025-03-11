import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="font-bold text-sm bg-base-300 flex h-4 justify-between items-center p-5 sm:p-10 lg:text-xl">
      <div></div>
      <div className="flex gap-5 items-center">
        <p>About</p>
        <p>Contact</p>
        <Link href="/">
          <p>Home</p>
        </Link>
        <a href="https://github.com/Hampus2001" className="text-xl sm:text-3xl">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
