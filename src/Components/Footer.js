import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between bg-gray-950 font-bold text-gray-300 h-4 items-center p-10">
      <div className="flex gap-5 items-center">
        <Link href="/">
          <p>Home</p>
        </Link>
        <p>About</p>
        <p>Contact</p>
        <Link href="/admin">
          <p>Admin</p>
        </Link>
        <a href="https://github.com/Hampus2001" className="text-3xl">
          <FaGithub />
        </a>
      </div>
      <div>
        <p className="text-sm">Made by Hampus Söderlund</p>
      </div>
    </div>
  );
}
