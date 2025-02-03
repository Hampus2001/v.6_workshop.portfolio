import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/admin">
        <p>Admin</p>
      </Link>
      <img src="/images/khira.jpg" alt="Example" />
    </div>
  );
}
